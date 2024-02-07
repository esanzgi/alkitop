import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatModal = ({ isOpen, onClose, user, owner }) => {

  console.log(owner);
  return (
    <Modal show={isOpen} onHide={onClose} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title>{owner.name}-ekin hitz egin</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action='/sendMessage' method='post' className='d-flex flex-column align-content-center'>
          <input type='hidden' value={user?.id_user} name='user'/>
          <input type='hidden' value={owner?.idUser} name='owner'/>
          <div className="mb-3">
            <input type='text' className="form-control" id='mezua' name='mezua' placeholder="Mezua" />
          </div>
          <button type="submit" className='btn btn-success d-flex align-self-end'>
            <FontAwesomeIcon icon={faPaperPlane} className='me-2' />
            Bidali
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' className='px-4' onClick={onClose}>
          Itxi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChatModal;
