import React, { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { Register } from './Register'

export function Login ({ show, handleClose }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [showRegisterModal, setShowRegisterModal] = useState(false)

  const handleLogin = () => {
    // Lógica para manejar el inicio de sesión
    console.log('Username:', username)
    console.log('Password:', password)
    handleClose()
  }

  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true)
  }

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false)
  }

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
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Row>

          <div className='row form-group mt-4'>
            <div className='form-check ms-3'>
              <input type='checkbox' className='form-check-input border-1 border-success' name='remember' />
              <label htmlFor='remember' className='form-check-label'>Remember me</label>
            </div>
          </div>
        </Form>

      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-between align-items-center'>

        <span onClick={handleOpenRegisterModal} className='text-hover-success fst-italic' data-bs-toggle='modal' data-bs-target='#registerModal'>¿No tienes cuenta? Registrarse</span>
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
  )
}
