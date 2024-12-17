import { getCommentsByArticleId } from '../api/api';
import { useEffect, useState } from 'react';
import CommentCard from './CommentCard';

function CommentsList({ article_id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
      .then(({ comments }) => {
        setCommentsList(comments);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error, 'ruh roh!');
      });
  }, [article_id]);

  return (
    <>
      {isLoading ? (
        <p>Now loading</p>
      ) : (
        <ul className="comments-list">
          {commentsList.map((comment) => {
            return <CommentCard key={comment.comment_id} {...comment} />;
          })}
        </ul>
      )}
    </>
  );
}

export default CommentsList;
