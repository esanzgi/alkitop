import { Link, useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

export const ProductForm = () => {
  const { data: productData, setData, post, errors } = useForm({
    name: '',
    description: '',
    images: [],
    isEco: false,
    price: '',
    location: '',
    category: '',
    frequency: '',
  });
  console.log('errors:', errors)
  console.log('data:', productData)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  const handleImageChange = (e) => {
    const images = Array.from(e.target.files);
    setData('images', [...productData.images, ...images]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      post('/produktua-sartu', {
        onSuccess: () => {
          console.log('Formulario enviado con éxito');
        },
        onError: (error) => {
          console.error('Error al enviar el formulario:', error);
        },
      });
    } catch (error) {
      console.error('Error:', error.message);
    }

  };

  const handleRemoveImage = (indexToRemove) => {
    const updatedImages = productData.images.filter((_, index) => index !== indexToRemove);
    setData('images', updatedImages);
  };

  return (
    <Form onSubmit={handleSubmit} encType="multipart/form-data">
      <Form.Group controlId="formProductName">
        <Form.Label>Produktuaren izena:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el nombre del producto"
          name="name"
          value={productData.name}
          onChange={handleInputChange}
          isInvalid={!!errors?.name}
        />
      </Form.Group>

      <Form.Group controlId="formProductDescription">
        <Form.Label>Deskripzioa:</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Ingrese la descripción del producto"
          name="description"
          value={productData.description}
          onChange={handleInputChange}
          isInvalid={!!errors?.description}
        />
      </Form.Group>

      <Form.Group controlId="formProductPrice">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el precio del producto"
          name="price"
          value={productData.price}
          onChange={handleInputChange}
          isInvalid={!!errors?.price}
        />
      </Form.Group>

      <Form.Group controlId="formProductFrequency">
        <Form.Label>Frecuencia</Form.Label>
        <Form.Control
          as="select"
          name="frequency"
          value={productData.frequency}
          onChange={handleInputChange}
          isInvalid={!!errors?.frequency}
        >
          <option value="">Aukeratu</option>
          <option value="daily">Egunero</option>
          <option value="weekly">Astero</option>
          <option value="monthly">Hilero</option>
        </Form.Control>
      </Form.Group>


      <Form.Group controlId="formProductIsEco">
        <Form.Check
          type="checkbox"
          label="Producto Ecológico"
          name="isEco"
          checked={productData.isEco}
          onChange={(e) => setData('isEco', e.target.checked)}
          isInvalid={!!errors?.isEco}
        />
      </Form.Group>


      <Form.Group controlId="formProductLocation">
        <Form.Label>Ubicación</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese la ubicación del producto"
          name="location"
          value={productData.location}
          onChange={handleInputChange}
          isInvalid={!!errors?.location}
        />
      </Form.Group>

      <Form.Group controlId="formProductCategory">
        <Form.Label>Categoría</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese la categoría del producto"
          name="category"
          value={productData.category}
          onChange={handleInputChange}
          isInvalid={!!errors?.category}
        />
      </Form.Group>


      {/* Campo de imágenes */}
      <Form.Group controlId="formProductImages">
        <Form.Label>Imágenes</Form.Label>
        <Form.Control
          type="file"
          name="images"
          multiple
          onChange={handleImageChange}
          accept="image/*"
          isInvalid={!!errors?.images}
        />
      </Form.Group>

      {/* Lista de nombres de archivos seleccionados */}
      {productData.images.length > 0 && (
        <ListGroup className="mt-3">
          {productData.images.map((file, index) => (
            <ListGroup.Item key={index} className='d-flex justify-content-between'>
              <span>{file.name}</span>
              <Button
                variant="outline-danger"
                size="sm"
                className="float-right"
                onClick={() => handleRemoveImage(index)}
              >
                X
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      {/* Botón de envío */}
      <Button variant="primary" type="submit">
        Subir Producto
      </Button>
    </Form>
  );
};

