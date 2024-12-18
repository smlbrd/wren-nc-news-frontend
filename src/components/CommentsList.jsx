import { getCommentsByArticleId } from '../api/api';
import { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import { deleteCommentById } from '../api/api';

function CommentsList({ article_id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
      .then(({ comments }) => {
        setCommentsList(comments);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error, 'Something went wrong!');
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
        console.log(error, 'Something went wrong!');
        setIsDeleting(false);
      });
  }

  return (
    <>
      {isLoading ? (
        <p>Listening to the people...</p>
      ) : (
        <>
          <CommentForm
            article_id={article_id}
            setCommentsList={setCommentsList}
          />
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
