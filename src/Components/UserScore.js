import React from 'react';

const Score = ({ userScore }) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center user-score-content'>
      <h1 className='m-1'>User </h1>
      <h1>{userScore}</h1>
    </div>
  );
};

export default Score;
