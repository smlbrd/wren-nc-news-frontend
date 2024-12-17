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
    if (!isClicked) {
      setError(null);
      patchVotesByArticleId(article_id, { inc_votes: 1 }).catch((error) => {
        setError('Something went wrong. Please try again later!');
        setVoteAdded((currentVotesAdded) => {
          return currentVotesAdded - 1;
        });
      });
      setVoteAdded((currentVotesAdded) => {
        setIsClicked(!isClicked);
        return currentVotesAdded + 1;
      });
    } else {
      patchVotesByArticleId(article_id, { inc_votes: -1 }).catch(() => {
        setError('Something went wrong. Please try again later!');
        setVoteAdded((currentVotesAdded) => {
          return currentVotesAdded - 1;
        });
      });
      setVoteAdded((currentVotesAdded) => {
        setIsClicked(!isClicked);
        return currentVotesAdded + 1;
      });
    }
  }

  if (error) return <p>{error}</p>;

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
      </div>
    </>
  );
}

export default VoteHandler;
