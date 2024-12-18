import '../styles/CommentCard.css';
import timestampFromNow from '../utils/timestampFromNow';

function CommentCard({ author, body, comment_id, created_at, votes }) {
  const date = timestampFromNow(created_at);

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
    </li>
  );
}

export default CommentCard;
