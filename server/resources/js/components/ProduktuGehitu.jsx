import React, { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

export function ProduktuGehitu ({ show, handleClose }) {
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [rentalFrequency, setRentalFrequency] = useState('')

  const [isProductNameValid, setIsProductNameValid] = useState(true)
  const [isDescriptionValid, setIsDescriptionValid] = useState(true)
  const [isImageValid, setIsImageValid] = useState(true)
  const [isPriceValid, setIsPriceValid] = useState(true)
  const [isLocationValid, setIsLocationValid] = useState(true)
  const [isCategoryValid, setIsCategoryValid] = useState(true)
  const [isRentalFrequencyValid, setIsRentalFrequency] = useState(true)

  const [errorMessage, setErrorMessage] = useState('')

  const [showModal, setShowModal] = useState(false)
  const [isEcoProduct, setIsEcoProduct] = useState(false)

  const handleButtonClick = () => {
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handleEcoButtonClick = () => {
    setIsEcoProduct(true)
    setShowModal(false)
  }

  const handleNotEcoButtonClick = () => {
    setIsEcoProduct(false)
    setShowModal(false)
  }

  const handleProduct = () => {
    const validationErrors = validate()

    if (validationErrors.length > 0) {
      setErrorMessage(validationErrors.join('\n'))
      return
    }

    handleClose()
  }

  const validate = () => {
    const errors = []

    // Check if Tlf number is not empty and meets your specific criteria
    if (productName.trim() === '' || !isValidProductName(productName)) {
      setIsProductNameValid(false)
      errors.push('Please enter a product name. ')
    } else {
      setIsProductNameValid(true)
    }

    // Check if ID is not empty and meets your specific criteria
    if (description.trim() === '' || !isValidDescription(description)) {
      setIsDescriptionValid(false)
      errors.push('Please enter a description. ')
    } else {
      setIsDescriptionValid(true)
    }

    if (image.trim() === '' || !isValidImage(image)) {
      setIsImageValid(false)
      errors.push('Please enter a valid image. ')
    } else {
      setIsImageValid(true)
    }

    if (price.trim() === '' || !isValidPrice(price)) {
      setIsPriceValid(false)
      errors.push('Please enter a valid price. ')
    } else {
      setIsPriceValid(true)
    }

    if (rentalFrequency.trim() === '') {
      setIsRentalFrequency(false)
      errors.push('Please select the rental frequency. ')
    } else {
      setIsRentalFrequency(true)
    }

    if (location.trim() === '' || !isValidLocation(location)) {
      setIsLocationValid(false)
      errors.push('Please enter your location ')
    } else {
      setIsLocationValid(true)
    }

    if (category.trim() === '') {
      setIsCategoryValid(false)
      errors.push('Please select a category. ')
    } else {
      setIsCategoryValid(true)
    }

    return errors
  }

  function isValidProductName (izena) {
    let isValid = true
    for (let i = 0; i < izena.length; i++) {
      if (!/^[a-zA-Z]+$/.test(izena[i])) {
        isValid = false
        break
      }
    }
    return isValid
  }

  function isValidDescription (testua) {
    let isValid = true
    for (let i = 0; i < testua.length; i++) {
      if (!/^[a-zA-Z]+$/.test(testua[i])) {
        isValid = false
        break
      }
    }
    return isValid
  }

  function isValidImage (image) {
    return image && /\.(jpg|jpeg|png|gif)$/i.test(image)
  }

  function isValidPrice (prezioa) {
    return (!isNaN(prezioa) && prezioa > 0)
  }

  function isValidLocation (tokia) {
    let isValid = true
    for (let i = 0; i < tokia.length; i++) {
      if (!/^[a-zA-Z]+$/.test(tokia[i])) {
        isValid = false
        break
      }
    }
    return isValid
  }

  return (
    <div>
      <div className='d-flex justify-content-center my-4'>
        <h1 className=''>Produktu bat igo</h1>
      </div>
      <Form>

        <Row className='mb-3'>
          <Form.Group as={Col}>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type='text'
              className={`form-control-sm ${isProductNameValid ? '' : 'is-invalid'}`}
              name='productName'
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              className={`form-control-sm ${isDescriptionValid ? '' : 'is-invalid'}`}
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col}>
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type='file'
              accept='image/*'
              className={`form-control-sm ${isImageValid ? '' : 'is-invalid'}`}
              name='image'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} className='col-8'>
            <Form.Label>Price (€)</Form.Label>
            <Form.Control
              type='number'
              className={`form-control-sm ${isPriceValid ? '' : 'is-invalid'}`}
              name='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} className='col-4 ml-2'>
            <Form.Label>Rental Frequency</Form.Label>
            <div>
              <Form.Check
                type='radio'
                label='Every Day'
                name='rentalFrequency'
                id='daily'
                className={`form-control-sm ${isRentalFrequencyValid ? '' : 'is-invalid'}`}
                checked={rentalFrequency === 'daily'}
                onChange={() => setRentalFrequency('daily')}
              />
              <Form.Check
                type='radio'
                label='Every Week'
                name='rentalFrequency'
                id='weekly'
                checked={rentalFrequency === 'weekly'}
                onChange={() => setRentalFrequency('weekly')}
              />
              <Form.Check
                type='radio'
                label='Every Month'
                name='rentalFrequency'
                id='monthly'
                checked={rentalFrequency === 'monthly'}
                onChange={() => setRentalFrequency('monthly')}
              />
            </div>
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col}>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type='text'
              className={`form-control-sm ${isLocationValid ? '' : 'is-invalid'}`}
              name='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col}>
            <Form.Label>Category</Form.Label>
            <Form.Control
              as='select'
              className={`form-control-sm ${isCategoryValid ? '' : 'is-invalid'}`}
              name='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='bizikleta'>Bizikleta</option>
              <option value='moto'>Moto</option>
              <option value='kotxe'>Kotxe</option>
              <option value='eskiak'>Eskiak</option>
              <option value='musika'>Musika</option>
              <option value='beste'>Beste bat...</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Row className='my-4 d-flex justify-content-center'>
          <div>
            <Form.Group>
              <Form.Label>Eko produktua</Form.Label>
            </Form.Group>
            <Col>
              <Button variant='primary' onClick={handleButtonClick}>
                {isEcoProduct ? 'Eko' : 'Ez Eko'}
              </Button>
            </Col>
          </div>

        </Row>

        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Zure produktua eko da?</Modal.Title>
          </Modal.Header>
          <Modal.Body className='d-flex flex-column'>
            <div>
              <ul>1. Eraginkortasun energetikoa:
                Produktuak energia-eraginkortasuna erraztuko duten teknologiekin diseinatuta egon behar
                du. Lehentasuna emango zaie energia-kontsumo txikiko ziurtagiriak dituzten gailuei.
              </ul>
              <ul>2.Material iraunkorrak:
                Lehenetsi egin behar dira material birziklagarriekin edo biodegradagarriekin egindako
                produktuak. Ingurumena errespetatzen duten ziurtatutako materialen erabilera sustatuko da
              </ul>
              <ul>3.Bizi-ziklo iraunkorra:
                Bizitza baliagarriaren amaieran erraz birzikla daitezkeen produktuei emango zaie
                lehentasuna. Iraunkortasuna eta konpontzeko aukera irizpide garrantzitsuak izango dira.
              </ul>
              <ul>4.Garraio iraunkorra:
                Modu eraginkorrean garraiatu daitezkeen produktuak, karbono-aztarna murriztuz,
                mesedegarriak izango dira.
              </ul>
            </div>
            <div className='mt-auto d-flex justify-content-center'>
              <Button variant='success' onClick={handleEcoButtonClick}>
                Eko
              </Button>
              <Button variant='danger' onClick={handleNotEcoButtonClick}>
                Ez Eko
              </Button>
            </div>
            {/* <div className='mt-3'>
              <a
                href='../'
                target='_blank'
                rel='noopener noreferrer'
              >
                Ver política de eco
              </a>
            </div> */}
          </Modal.Body>
        </Modal>

        {errorMessage && (
          <div className='alert alert-danger' role='alert'>
            {errorMessage}
          </div>
        )}
      </Form>
      <div className='d-flex justify-content-center'>
        <Button variant='outline-success' onClick={handleProduct}>
          Produktua igo
        </Button>
      </div>

    </div>
  )
}
