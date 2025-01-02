import { useState } from 'react';
import { patchVotesByArticleId } from '../api/api';
import ErrorHandler from './ErrorHandler';
import { Button } from '@mui/material';

function VoteHandler({ article_id, votes }) {
  const [isClicked, setIsClicked] = useState(false);
  const [error, setError] = useState(null);

  function handleClick() {
    const voteAdjustment = !isClicked ? 1 : -1;
    setError(null);
    patchVotesByArticleId(article_id, { inc_votes: voteAdjustment }).catch(
      () => {
        setError(error);
      }
    );
    setIsClicked(!isClicked);
  }

  return (
    <>
      <div>
        {isClicked ? (
          <>
            <Button variant="outlined" onClick={handleClick}>
              Unlike
            </Button>
            <p>{votes + 1} likes</p>
          </>
        ) : (
          <>
            <Button variant="outlined" onClick={handleClick}>
              Like
            </Button>
            <p>{votes} likes</p>
          </>
        )}
        {error ? <ErrorHandler error={error} /> : null}
      </div>
    </>
  );
}

export default VoteHandler;
