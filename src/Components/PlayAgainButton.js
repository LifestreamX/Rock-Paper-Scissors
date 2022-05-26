import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const PlayAgainButton = ({ counter, reset, userScore, computerScore }) => {
  return (
    <div >
      <Link to='/' onClick={reset}>
        <Button
          variant='Light'
          size='lg'
          className='fw-bolder text-white play-again-button'
          hidden={counter > 0 || userScore >= 3 || computerScore >= 3}
        >
          Play Again
        </Button>
      </Link>
    </div>
  );
};

export default PlayAgainButton;
