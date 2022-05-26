import Button from 'react-bootstrap/Button';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import sad from '../images/sad.png';

const ComputerVictory = ({ handleClearScore, setCounter }) => {
  const audioRef = useRef();

  // Win audio
  useEffect(() => {
    audioRef.current.play();
  }, []);

  const restartGame = () => {
    handleClearScore();
    audioRef.current.pause();
    setCounter(3)
  };
  return (
    <>
      <audio ref={audioRef} src='loss.mp3' />

      <div className='d-flex justify-content-center align-items-center flex-column losing-wrapper'>
        <div className=' rounded p-2 bg-danger d-flex flex-column justify-content-center align-items-center '>
          <p className='text-white fs-2 fw-bolder m-3 mobile-text'>Computer </p>
          <p className='text-white fs-2 fw-bolder mobile-text'>Wins</p>
          <img src={sad} alt='sad-face' className='sad-face mb-1' />
        </div>
        <Link to='/'>
          <Button
            variant='lg '
            className='mt-3 bg-danger text-white fw-bolder'
            onClick={restartGame}
          >
            Start New Game
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ComputerVictory;
