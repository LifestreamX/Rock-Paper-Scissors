import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import rules from '../images/Rules.png';

function Rules(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Rules</Modal.Title>
      </Modal.Header>
      <p className='fs-4 mx-3'>First to 3 points wins!</p>
      <Modal.Body className='modal-wrapper'>
        <img src={rules} alt='' className='rules-image' />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Rules;
