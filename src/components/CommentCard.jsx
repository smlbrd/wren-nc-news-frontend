import '../styles/CommentCard.css';
import timestampFromNow from '../utils/timestampFromNow';

function CommentCard({ author, body, created_at, votes }) {
  const date = timestampFromNow(created_at);

  return (
    <li className="comment-card">
      <div className="comment-author">{author}</div>
      <div>{votes}</div>
      <div>{date}</div>
      <div>{body}</div>
    </li>
  );
}

export default CommentCard;
