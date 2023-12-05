import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

export function Register({ show, handleClose }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPassword2Valid, setIsPassword2Valid] = useState(true);

  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    const validationErrors = validate();

    if (validationErrors.length > 0) {
      setErrorMessage(validationErrors.join('\n'));
      return;
    }

    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Repeat Password:', passwordRepeat);
    console.log('Accept Terms:', acceptTerms);

    handleClose();
  };

  const validate = () => {
    const errors = [];

    // Check if name is not empty and does not contain numbers
    if (name.trim() === '' || containsNumbers(name)) {
      setIsNameValid(false);
      errors.push('Please enter a valid name without numbers. ');
    } else {
      setIsNameValid(true);
    }

    // Check if email is not empty and is in a valid format
    if (email.trim() === '') {
      setIsEmailValid(false);
      errors.push('Please enter your email. ');
    } else if (!validateEmail(email)) {
      setIsEmailValid(false);
      errors.push('Invalid email format. ');
    } else {
      setIsEmailValid(true);
    }

    // Check if username is not empty
    if (username.trim() === '') {
      setIsUsernameValid(false);
      errors.push('Please enter a username. ');
    } else {
      setIsUsernameValid(true);
    }

    // Check if password is not empty
    if (password.trim() === '') {
      setIsPasswordValid(false);
      errors.push('Please enter your password. ');
    } else {
      setIsPasswordValid(true);
    }

    // Check if the repeated password is the same as the original password
    if (passwordRepeat.trim() === '' || passwordRepeat !== password) {
      setIsPassword2Valid(false);
      errors.push('Passwords do not match');
    } else {
      setIsPassword2Valid(true);
    }

    // Add logic to check if everything is valid in the database

    return errors;
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>REGISTER</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className='mb-3'>
            <Form.Group as={Col}>
              <Form.Label>Name and Surname</Form.Label>
              <Form.Control
                type='text'
                className={`form-control-sm ${isNameValid ? '' : 'is-invalid'}`}
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                className={` form-control-sm ${isEmailValid ? '' : 'is-invalid'}`}
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col}>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                className={`form-control-sm ${isUsernameValid ? '' : 'is-invalid'}`}
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} xs={6}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                className={` form-control-sm ${isPasswordValid ? '' : 'is-invalid'}`}
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} xs={6}>
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                type='password'
                className={`form-control-sm ${isPassword2Valid ? '' : 'is-invalid'}`}
                name='passwordRepeat'
                value={passwordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className='border-1 border-top pt-3'>
            <Col className='ms-3'>
              <Form.Check
                type='checkbox'
                label={
                  <span>
                    I accept the{' '}
                    <a href='#' data-bs-toggle='collapse' data-bs-target='#termsAndConditions'>
                      Terms and Conditions
                    </a>
                  </span>
                }
                className='border-1 border-success'
                name='acceptTerms'
                id='acceptTerms'
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
              />
            </Col>
          </Row>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <span className='me-4 me-sm-5 text-hover-success fst-italic' data-bs-toggle='modal' data-bs-target='#loginModal'>
          Already have an account? Log In
        </span>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='outline-success' onClick={handleRegister}>
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function containsNumbers(text) {
  var containsNonAlphabetic = false;
  for (let i = 0; i < text.length; i++) {
    if (!/^[a-zA-Z]+$/.test(text[i])) {
      containsNonAlphabetic = true;
      break;
    }
  }
  return containsNonAlphabetic;
}

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const atSymbol = email.indexOf('@');
  const dotSymbol = email.lastIndexOf('.');

  return emailRegex.test(email) && atSymbol !== -1 && dotSymbol > atSymbol;
};
