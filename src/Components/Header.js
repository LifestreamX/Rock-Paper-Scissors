import React from 'react';
import Container from 'react-bootstrap/Container';
import Rules from './Rules';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Score from './UserScore';
import ComputerScore from './ComputerScore';
import titleImage from '../images/rock-paper-scissors.png';

const Header = ({
  computerScore,
  setModalShow,
  modalShow,
  userScore,
  handleClearScore,
}) => {
  return (
    <header className='d-flex justify-content-center align-items-center h-50 mt-3 header-wrapper '>
      <Container className='d-flex flex-column justify-content-center align-items-center'>
        {/* Title section */}
        <Row className='mb-5 text-uppercase font-monospace w-100 text-center header-row'>
          <Col className='title-image-bg text-white bo p-4 rounded header header-col'>
            <h1 className='fw-bold header-title '>Rock Paper Scissors!</h1>
            {/* Rules section */}
            <Button
              className=' rules fs-4 fw-bold rules-button position-absolute start-0 mx-3 my-5 '
              variant='info'
              onClick={() => setModalShow(true)}
              id='rules-mobile'
            >
              <span className='rules-scoreboard-text'>Rules</span>
            </Button>
            <Rules show={modalShow} onHide={() => setModalShow(false)} />
            {/* Clear Scoreboard  */}
            <Button
              className='clear-button fw-bold fw-bolder fs-4 position-absolute end-0 mx-3 my-5 '
              variant='warning'
              size='lg'
              onClick={handleClearScore}
            >
              <span className='clear-scoreboard-text'> Clear Scoreboard</span>
            </Button>
          </Col>
        </Row>

        {/* Score and title image section */}
        <Row className='mb-2  '>
          <Col className='d-flex'>
            {/* User score */}
            <div className=' bg-primary rounded-pill h-25 mt-5 score text-white user-score '>
              <Score userScore={userScore} />
            </div>
            {/* Rotating image */}
            <img
              src={titleImage}
              alt=''
              className='img-fluid rotating-title-image m-5 rotate-image'
            />

            {/* Computer score */}
            <div className='bg-danger rounded-pill h-25  mt-5 score  text-white comp-score '>
              <ComputerScore computerScore={computerScore} />
            </div>
            <div className='computer-victory-message'></div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
