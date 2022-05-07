import React from 'react';

const ComputerScore = ({ computerScore }) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center computer-score-content'>
      <h1 className='m-1'>Comp </h1>
      <h1 >{computerScore}</h1>
    </div>
  );
};

export default ComputerScore;
