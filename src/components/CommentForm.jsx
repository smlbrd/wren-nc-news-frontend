import { useContext, useState } from 'react';
import { postCommentByArticleId } from '../api/api';
import { UserContext } from '../contexts/UserContext';

function CommentForm({ article_id, setCommentsList }) {
  const { user } = useContext(UserContext);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [newComment, setNewComment] = useState('');

  function handleChange(e) {
    setNewComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    setPending(true);

    postCommentByArticleId(article_id, {
      username: user.name,
      body: newComment,
    })
      .then((newlyPostedComment) => {
        setCommentsList((currComments) => [
          newlyPostedComment,
          ...currComments,
        ]);
        setPending(false);
        setNewComment('');
      })
      .catch(() => {
        setError('Something went wrong. Please try again later!');
        setPending(false);
      });
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <textarea
          name="comment"
          type="text"
          placeholder="Join the conversation"
          value={newComment}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={pending}>
          {pending ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
