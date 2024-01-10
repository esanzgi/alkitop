import React, { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

export function AlokatzaileRegister ({ show, handleClose }) {
  const [tlfNumber, setTlfNumber] = useState('')
  const [id, setId] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)

  const [isTlfNumberValid, setIsTlfNumberValid] = useState(true)
  const [isIdValid, setIsIdValid] = useState(true)

  const [errorMessage, setErrorMessage] = useState('')

  const handleRegister = () => {
    const validationErrors = validate()

    if (validationErrors.length > 0) {
      setErrorMessage(validationErrors.join('\n'))
      return
    }

    console.log('Tlf Number:', tlfNumber)
    console.log('ID:', id)
    console.log('Accept Terms:', acceptTerms)

    handleClose()
  }

  const validate = () => {
    const errors = []
    var balio=document.getElementById('balidazioa').value;

    // Check if Tlf number is not empty and meets your specific criteria
    if (tlfNumber.trim() === '' || !isValidTlfNumber(tlfNumber)) {
      setIsTlfNumberValid(false)
      errors.push('Please enter a valid Tlf number. ')
    } else {
      setIsTlfNumberValid(true)
    }

    // Check if ID is not empty and meets your specific criteria
    if (id.trim() === '' || !isValidId(id)) {
      setIsIdValid(false)
      errors.push('Please enter a valid ID. ')
    } else {
      setIsIdValid(true)
    }

    if(errors.length==0){
      balio=true
    }
    return errors
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Alta eman produktuak alokatzen jartzeko</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form action='/new-owner' method='POST'>
          <Row className='mb-3'>
            <Form.Group as={Col}>
              <Form.Label>Telefono zenbakia</Form.Label>
              <Form.Control
                type='tel'
                className={`form-control-sm ${isTlfNumberValid ? '' : 'is-invalid'}`}
                name='tlfNumber'
                value={tlfNumber}
                onChange={(e) => setTlfNumber(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col}>
              <Form.Label>NAN</Form.Label>
              <Form.Control
                type='text'
                className={`form-control-sm ${isIdValid ? '' : 'is-invalid'}`}
                name='id'
                value={id}
                onChange={(e) => setId(e.target.value)}
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
            <div className='alert alert-danger' role='alert'>
              {errorMessage}
            </div>
          )}
            <Button type='submit' variant='outline-success' onClick={handleRegister}>
              Register
            </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className='d-flex just'>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        {/* <form action="/new-owner" method='post'>
          <meta name="csrf-token" content="{{ csrf_token() }}"/>
          <Button type='submit' variant='outline-success' onClick={handleRegister}>
              Register
            </Button>
            <input type="hidden" value="false" name='balidazioa' id='balidazioa'/>
        </form> */}
          
      </Modal.Footer>
    </Modal>
  )
}

function isValidTlfNumber (tlfNumber) {
  let isValid = true

  for (let i = 0; i < tlfNumber.length; i++) {
    if (isNaN(tlfNumber[i])) {
      isValid = false
      break
    }
  }
  // Check if the first digit is between 6 and 9
  if (tlfNumber[0] < '6' || tlfNumber[0] > '9') {
    isValid = false
  }

  // Check if the length is exactly 9
  if (tlfNumber.length !== 9) {
    isValid = false
  }

  return isValid
}

function isValidId (id) {
  let isValid = true

  // Check if the last character is a letter
  const lastChar = id[id.length - 1]
  if (!isNaN(lastChar) || !isNaN(parseInt(lastChar))) {
    isValid = false
  }

  // Check if the ID has exactly 8 numbers
  if (id.length !== 9 || isNaN(id.slice(0, 8))) {
    isValid = false
  }

  return isValid
}
