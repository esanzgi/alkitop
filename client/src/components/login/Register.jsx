import React, { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

export function Register ({ show, handleClose }) {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleRegister = () => {
    // Lógica para manejar el registro
    console.log('Name:', name)
    console.log('Username:', username)
    console.log('Password:', password)
    console.log('Repeat Password:', passwordRepeat)
    console.log('Accept Terms:', acceptTerms)
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>REGISTRARSE</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className='mb-3'>
            <Form.Group as={Col}>
              <Form.Label>Nombre y Apellidos</Form.Label>
              <Form.Control
                type='text'
                className='border-1 border-success form-control-sm'
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
                className='border-1 border-success form-control-sm'
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
                className='border-1 border-success form-control-sm'
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
                className='border-1 border-success form-control-sm'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} xs={6}>
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                type='password'
                className='border-1 border-success form-control-sm'
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
                    Acepto los{' '}
                    <a href='#' data-bs-toggle='collapse' data-bs-target='#termsAndConditions'>
                      Términos y Condiciones
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <span className='me-4 me-sm-5 text-hover-success fst-italic' data-bs-toggle='modal' data-bs-target='#loginModal'>
          ¿Ya tienes cuenta? Iniciar Sesión
        </span>
        <Button variant='secondary' onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant='outline-success' onClick={handleRegister}>
          Registrarse
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
