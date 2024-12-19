import { getCommentsByArticleId } from '../api/api';
import { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import { deleteCommentById } from '../api/api';
import ErrorHandler from './ErrorHandler';
import Loading from './Loading';

function CommentsList({ article_id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    getCommentsByArticleId(article_id)
      .then(({ comments }) => {
        setCommentsList(comments);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [article_id]);

  function deleteComment(commentIdToDelete) {
    setIsDeleting(true);
    deleteCommentById(commentIdToDelete)
      .then(() => {
        setCommentsList((currComments) =>
          currComments.filter(
            (comment) => comment.comment_id !== commentIdToDelete
          )
        );
        setIsDeleting(false);
      })
      .catch((error) => {
        setError(error);
        setIsDeleting(false);
      });
  }

  return (
    <>
      {error ? <ErrorHandler error={error} /> : null}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CommentForm
            article_id={article_id}
            setCommentsList={setCommentsList}
          />
          {!commentsList.length ? <p>No comments yet!</p> : null}
          <ul className="comments-list">
            {commentsList.map((comment) => {
              return (
                <CommentCard
                  key={comment.comment_id}
                  {...comment}
                  deleteComment={deleteComment}
                  isDeleting={isDeleting}
                />
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}

export default CommentsList;
