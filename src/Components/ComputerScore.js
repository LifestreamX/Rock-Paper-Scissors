import React from 'react';

const ComputerScore = ({ computerScore }) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center computer-score-content'>
      <h1 className='m-1 comp-title'>Comp </h1>
      <h1 className='comp-score'>{computerScore}</h1>
    </div>
  );
};

export default ComputerScore;
