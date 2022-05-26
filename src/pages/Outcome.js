import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Rock from '../images/Rock.png';
import Scissors from '../images/Scissors.png';
import Paper from '../images/Paper.png';
import PlayAgainButton from '../Components/PlayAgainButton';
import UserVictory from '../Components/UserVictory';
import ComputerVictory from '../Components/ComputerVictory';

const Outcome = ({
  userChoice,
  userScore,
  setUserScore,
  computerScore,
  setComputerScore,
  compChoice,
  setCompChoice,
  userWin,
  setUserWin,
  counter,
  setCounter,
  handleClearScore,
}) => {
  // Computer randomly picking
  const computersTurn = () => {
    const options = ['rock', 'paper', 'scissors'];
    setCompChoice(options[Math.floor(Math.random() * 3)]);
  };

  // console.log(compChoice);
  console.log(userChoice);

  // Computers pick on page load
  useEffect(() => {
    computersTurn();
  }, []);

  // Outcome Options Results
  const MatchResults = () => {
    if (userChoice === 'rock' && compChoice === 'scissors') {
      setUserWin('win');
      setUserScore(userScore + 1);
    } else if (userChoice === 'rock' && compChoice === 'paper') {
      setUserWin('lose');
      setComputerScore(computerScore + 1);
    } else if (userChoice === 'scissors' && compChoice === 'paper') {
      setUserWin('win');
      setUserScore(userScore + 1);
    } else if (userChoice === 'scissors' && compChoice === 'rock') {
      setUserWin('lose');
      setComputerScore(computerScore + 1);
    } else if (userChoice === 'paper' && compChoice === 'rock') {
      setUserWin('win');
      setUserScore(userScore + 1);
    } else if (userChoice === 'paper' && compChoice === 'scissors') {
      setUserWin('lost');
      setComputerScore(computerScore + 1);
    } else {
      setUserWin('draw');
    }
  };

  // Countdown
  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : MatchResults();

    return () => {
      clearInterval(timer);
    };
  }, [counter, compChoice]);

  // Navigates back to home screen if no user input
  const navigate = useNavigate();
  useEffect(() => {
    if (userChoice === null) {
      navigate('/');
    }
  }, []);

  // Reset counter and comp choice onclick event
  const reset = () => {
    setCounter(3);
    setCompChoice();
  };

  // Logic for grabbing image when picked option
  const PickedImage = () => {
    if (userChoice === 'rock') {
      return <img src={Rock} alt='rock' className='picked-images' />;
    } else if (userChoice === 'paper') {
      return <img src={Paper} alt='paper' className='picked-images' />;
    } else if (userChoice === 'scissors') {
      return <img src={Scissors} alt='scissors' className='picked-images' />;
    }
  };

  // Logic for grabbing comp image when picked option
  const CompImage = () => {
    if (compChoice === 'rock') {
      return <img src={Rock} alt='rock' className='picked-images' />;
    } else if (compChoice === 'paper') {
      return <img src={Paper} alt='paper' className='picked-images' />;
    } else if (compChoice === 'scissors') {
      return <img src={Scissors} alt='scissors' className='picked-images' />;
    }
  };

  return (
    <main className='w-100 d-flex justify-content-center align-items-center outcome-wrapper '>
      <Row className='d-flex justify-content-center w-100 justify-content-center game-results'>
        <Col className='d-flex justify-content-center align-items-center '>
          <Card className='shadow-lg rounded-circle   bg-primary text-white p-5  d-flex justify-content-center h-100 user-outcome'>
            <div className='d-flex justify-content-center align-items-center mb-2 fs-4 fw-bolder text-uppercase'>
              <div className='picked-text'>{userChoice} </div>
            </div>
            <div className='d-flex justify-content-center'>
              <PickedImage className='picked-images ' />
            </div>
            {counter === 0 && (
              <div className='d-flex justify-content-center mt-2 fs-4 fw-bolder text-uppercase'>
                <div>
                  {' '}
                  {userWin == 'win' && <p className='picked-text'>Wins</p>}
                </div>
                <div>
                  {' '}
                  {userWin == 'lose' && <p className='picked-text'>Lost</p>}
                </div>
                <div>
                  {' '}
                  {userWin == 'draw' && <p className='picked-text'>Draw</p>}
                </div>
              </div>
            )}
          </Card>
        </Col>

        <Col className='d-flex justify-content-center align-items-center '>
          {/* Play again button */}

          {counter === 0 && (userScore === 5 || computerScore === 5) ? null : (
            <div className='play-again'>
              <PlayAgainButton
                reset={reset}
                userScore={userScore}
                computerScore={computerScore}
                counter={counter}
                setCounter={setCounter}
              />
            </div>
          )}

          {/* Victory for user component  */}
          <div className='user-victory-message'>
            {userScore === 3 && (
              <UserVictory
                handleClearScore={handleClearScore}
                setCounter={setCounter}
              />
            )}
          </div>

          {/* Victory for Computer */}
          {computerScore === 3 && (
            <div className='computer-victory-wrapper'>
              <ComputerVictory
                handleClearScore={handleClearScore}
                setCounter={setCounter}
              />
            </div>
          )}
        </Col>

        {/* Results from single match */}
        <Col className='d-flex  justify-content-center align-items-center computer-outcome'>
          {/* Countdown for comp */}

          <Card className='p-5  shadow-lg rounded-circle  bg-danger text-white d-flex justify-content-center comp-image'>
            <div className='d-flex flex-column justify-content-center align-items-center '>
              <div className='d-flex justify-content-center align-items-center flex-column mb-2 fs-5 fw-bolder text-uppercase'>
                {counter === 0 ? (
                  <div>
                    <div className='text-center fs-4'>
                      <div className='picked-text'>{compChoice}</div>
                    </div>
                    <div className='mt-2 d-flex justify-content-center'>
                      <CompImage />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className='fs-1'>{counter}</div>
                    <Spinner animation='border' className='mt-3' />
                  </>
                )}
              </div>

              {counter === 0 && (
                <div className='d-flex justify-content-center mt-2 fs-4 fw-bolder text-uppercase'>
                  <div>
                    {' '}
                    {userWin == 'win' && <p className='picked-text'>Lost</p>}
                  </div>
                  <div>
                    {' '}
                    {userWin == 'lose' && <p className='picked-text'>Wins</p>}
                  </div>
                  <div>
                    {' '}
                    {userWin == 'draw' && <p className='picked-text'>Draw</p>}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default Outcome;
