import '../styles/CommentForm.css';
import { useContext, useState } from 'react';
import { postCommentByArticleId } from '../api/api';
import { UserContext } from '../contexts/UserContext';
import ErrorHandler from './ErrorHandler';
import { Button } from '@mui/material';

function CommentForm({ article_id, setCommentsList }) {
  const { user } = useContext(UserContext);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState('');

  function handleChange(e) {
    setNewComment(e.target.value);
  }

  function handleReset() {
    setNewComment('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setPending(true);

    postCommentByArticleId(article_id, {
      username: user.username,
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
        setError(error);
        setPending(false);
      });
  }

  return (
    <div className="comment-form">
      {error ? <ErrorHandler error={error} /> : null}
      <form onSubmit={handleSubmit}>
        <textarea
          className="comment-input"
          name="comment"
          type="text"
          placeholder="Join the conversation"
          value={newComment}
          onChange={handleChange}
          aria-required="true"
          required
        />
        <Button
          className="comment-button"
          type="reset"
          value="reset"
          onClick={handleReset}
          variant="outlined"
        >
          Reset
        </Button>
        <Button
          className="comment-button"
          type="submit"
          value="submit"
          disabled={pending}
          variant="outlined"
        >
          {pending ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
}

export default CommentForm;
