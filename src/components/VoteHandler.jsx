import { useState } from 'react';
import { patchVotesByArticleId } from '../api/api';

function VoteHandler({ article_id, votes }) {
  const [isClicked, setIsClicked] = useState(false);
  const [voteAdded, setVoteAdded] = useState(0);
  const [error, setError] = useState(null);

  {
    /* TODO: Each article can be liked ONCE PER PAGE VISIT
    Implement user context later to make it one vote per user
     */
  }

  function handleClick() {
    const voteAdjustment = !isClicked ? 1 : -1;
    setError(null);
    patchVotesByArticleId(article_id, { inc_votes: voteAdjustment }).catch(
      () => {
        setError('Something went wrong. Please try again!');
        setVoteAdded((currentVotesAdded) => {
          return currentVotesAdded - 1;
        });
      }
    );
    setVoteAdded((currentVotesAdded) => {
      setIsClicked(!isClicked);
      return currentVotesAdded + 1;
    });
  }

  return (
    <>
      <div>
        {isClicked ? (
          <>
            <button onClick={handleClick}>Unlike</button>
            <p>{votes + 1} likes</p>
          </>
        ) : (
          <>
            <button onClick={handleClick}>Like</button>
            <p>{votes} likes</p>
          </>
        )}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}

export default VoteHandler;
