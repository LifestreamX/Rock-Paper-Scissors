import Button from 'react-bootstrap/Button';
import React, { useState, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { Link } from 'react-router-dom';
const UserVictory = ({ handleClearScore, setCounter }) => {
  const [fire, setFire] = useState(false);
  const [reset, setReset] = useState(false);
  const [fireCounter, setFireCounter] = useState(10);
  const audioRef = useRef();

  const style = {
    position: 'relative',
    top: 300,
    left: 300,
    width: '1000px',
    height: '1000px',
    zIndex: -1,
  };

  // using use effect hook set  confetti off on win
  useEffect(() => {
    const timer =
      fireCounter > 0
        ? setInterval(() => {
            setFireCounter(fireCounter - 1);
          }, 5000)
        : null;

    let onClickFire = () => {
      // set any value that is cast to the logical true and will differ from the previous one.
      setFire({ fire: {} });
    };

    let onClickReset = () => {
      // set any value that is cast to the logical true and will differ from the previous one.
      setReset({ reset: {} });
    };

    if (fireCounter > 0) {
      return onClickFire();
    } else {
      return onClickReset(setFireCounter(10));
    }
  }, [fireCounter]);

  // Win audio
  useEffect(() => {
    audioRef.current.play();
  }, []);

  const restartGame = () => {
    handleClearScore();
    audioRef.current.pause();
    setCounter(3);
  };

  return (
    <>
      <audio ref={audioRef} src='win.mp3' />

      <div className='confetti-wrapper'>
        <ReactCanvasConfetti
          // set the styles as for a usual react component
          style={style}
          // set the class name as for a usual react component
          className={'confetti'}
          // if value in this.state.fire cast to the logical true and will differ from the previous, then will be called new animation
          fire={fire}
          reset={reset}
        />
      </div>

      <div className='d-flex justify-content-center align-items-center flex-column winning-wrapper '>
        <div className=' rounded p-5 rgb-background you-win-wrapper'>
          <h1 className='text-white you-win-text '>You Win!</h1>
        </div>
        <Link to='/'>
          <Button
            variant='lg '
            className='mt-3 rgb-background text-white fw-bolder start-new-game-button'
            onClick={restartGame}
          >
            Start New Game
          </Button>
        </Link>
      </div>
    </>
  );
};

export default UserVictory;
