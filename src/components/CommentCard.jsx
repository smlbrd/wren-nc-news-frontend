import '../styles/CommentCard.css';
import { useContext } from 'react';
import timestampFromNow from '../utils/timestampFromNow';
import { UserContext } from '../contexts/UserContext';
import { Button } from '@mui/material';

function CommentCard({
  author,
  body,
  comment_id,
  created_at,
  votes,
  deleteComment,
  isDeleting,
}) {
  const { user } = useContext(UserContext);
  const date = timestampFromNow(created_at);

  function handleDelete(comment_id) {
    deleteComment(comment_id);
  }

  return (
    <li className="comment-card">
      <div className="comment-author">{author}</div>
      <div className="comment-info">
        <div>
          {votes} votes - {date}
        </div>
      </div>
      <div className="comment-body">{body}</div>
      <div className="comment-id" hidden>
        {comment_id}
      </div>
      {author === user.username && (
        <Button
          className="comment-button comment-delete"
          onClick={() => handleDelete(comment_id)}
          disabled={isDeleting}
          variant="outlined"
          color="error"
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </Button>
      )}
    </li>
  );
}

export default CommentCard;
