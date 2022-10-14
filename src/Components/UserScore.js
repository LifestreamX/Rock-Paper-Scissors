import React from 'react';

const Score = ({ userScore }) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center user-score-content'>
      <h1 className='m-1 user-title'>User </h1>
      <h1 className='user-score'>{userScore}</h1>
    </div>
  );
};

export default Score;
