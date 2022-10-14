import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rock from '../images/Rock.png';
import Scissors from '../images/Scissors.png';
import Paper from '../images/Paper.png';
import { Link } from 'react-router-dom';

const Play = ({ setUserChoice, userChoice }) => {
  // Function for when  button choice is clicked, sets userChoice to id of button
  const picked = (e) => {
    setUserChoice(e.target.id);
  };

  return (
    <main className='d-flex justify-content-center align-items-center h-25 mt-1 play-wrapper'>
      {/* Card choices section */}
      <Row className='mb-2 choices'>
        {/* Rock card */}
        <Col className='mx-5 choices-col'>
          <Card
            style={{ width: '18rem' }}
            className='choices-card d-flex flex-column justify-content-center align-items-center p-3 shadow-lg border border-primary'
          >
            {' '}
            <div className='mobile-play-images'>
              <Card.Img variant='top' src={Rock} />
            </div>
            <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
              <Card.Title className='p-2 fs-3'>Rock</Card.Title>
              <Link to='/game'>
                <Button variant='primary btn-lg' onClick={picked} id='rock'>
                  Choose
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Paper card */}
        <Col className='mx-5 choices-col'>
          <Card
            style={{ width: '18rem' }}
            className='choices-card d-flex flex-column justify-content-center align-items-center p-3 shadow-lg border border-danger'
          >
            <div className='mobile-play-images'>
              <Card.Img variant='top' src={Paper} className='choose-image' />
            </div>
            <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
              <Card.Title className='p-2 fs-3'>Paper</Card.Title>
              <Link to='/game'>
                <Button variant='danger btn-lg' onClick={picked} id='paper'>
                  Choose
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Scissors card */}
        <Col className='mx-5 choices-col'>
          <Card
            style={{ width: '18rem' }}
            className='choices-card  d-flex flex-column justify-content-center align-items-center p-3 shadow-lg border border-success'
          >
            <div className='mobile-play-images'>
              <Card.Img variant='top' src={Scissors} className='choose-image' />
            </div>
            <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
              <Card.Title className='p-2 fs-3'>Scissors</Card.Title>
              <Link to='/game'>
                <Button variant='success btn-lg' onClick={picked} id='scissors'>
                  Choose
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default Play;
