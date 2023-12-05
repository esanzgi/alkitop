import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Register } from './Register';

export function Login({ show, handleClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLogin = () => {
    // Logic to handle login
    validate();
  
    // Check if there are validation errors
    if (!isUsernameValid || !isPasswordValid) {
      // If there are errors, don't close the modal
      return;
    }
  
    console.log('Username:', username);
    console.log('Password:', password);
    handleClose();
  };
  

  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const validate = () => {
    // Initially set to valid
    setIsUsernameValid(true);
    setIsPasswordValid(true);
  
    // Implement your validation logic here
    if (username === '') {
      setIsUsernameValid(false);
    }
  
    if (password === '') {
      setIsPasswordValid(false);
    }
  
    // Check if either username or password is empty
    if (username === '' || password === '') {
      // If there are errors, don't close the modal
      return;
    }
  
    // If there are no errors, close the modal
    handleClose();
  };
  
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formUsername'>
              <Form.Label>Username or Email</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your username'
                value={username}
                className={isUsernameValid ? '' : 'is-invalid'}
                onChange={(e) => setUsername(e.target.value)}
              />
              {!isUsernameValid && (
                <Form.Control.Feedback type='invalid'>
                  Please enter a valid username.
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter your password'
                value={password}
                className={isPasswordValid ? '' : 'is-invalid'}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isPasswordValid && (
                <Form.Control.Feedback type='invalid'>
                  Please enter a valid password.
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Row>

          <div className='row form-group mt-4'>
            <div className='form-check ms-3'>
              <input type='checkbox' className='form-check-input' name='remember' />
              <label htmlFor='remember' className='form-check-label'>Remember me</label>
            </div>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-between align-items-center'>
        <span onClick={handleOpenRegisterModal} className='text-hover-success fst-italic' data-bs-toggle='modal' data-bs-target='#registerModal'>Don't have an account? Register</span>
        <div>
          <Button variant='secondary' className='me-2' onClick={handleClose}>
            Close
          </Button>
          <Button variant='success' onClick={handleLogin}>
            Log In
          </Button>
        </div>
      </Modal.Footer>
      <Register show={showRegisterModal} handleClose={handleCloseRegisterModal} />
    </Modal>
  );
}
