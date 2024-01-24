import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

export const ProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    images: [],
    isEco: false,
    price: '',
    location: '',
    category: '',
    frequency: '',
  });
  console.log('Datos: ', productData)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    const images = Array.from(e.target.files);
    setProductData((prevProductData) => ({
      ...prevProductData,
      images: [...prevProductData.images, ...images],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/produktua-sartu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      // if (!response.ok) {
      //   const errorResponse = await response.json(); // Intenta leer el contenido JSON del error
      //   throw new Error(`Error al enviar el formulario: ${errorResponse.error || 'Error desconocido'}`);
      // }

      // const result = await response.json();
      // console.log(result.message); // Imprime el mensaje del servidor en caso de éxito
      // // Lógica adicional en caso de éxito

    } catch (error) {
      console.error('Error:', error.message);
      // Lógica para manejar errores
    }
  };



  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formProductName">
        <Form.Label>Produktuaren izena:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el nombre del producto"
          name="name"
          value={productData.name}
          onChange={handleInputChange}
          required
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
          required
        />
      </Form.Group>

      <Form.Group controlId="formProductPrice">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese el precio del producto"
          name="price"
          value={productData.price}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formProductFrequency">
        <Form.Label>Frecuencia</Form.Label>
        <Form.Control
          as="select"
          name="frequency"
          value={productData.frequency}
          onChange={handleInputChange}
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
          onChange={() => setProductData({ ...productData, isEco: !productData.isEco })}
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
          required
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
          required
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
        />
      </Form.Group>

      {/* Lista de nombres de archivos seleccionados */}
      {productData.images.length > 0 && (
        <ListGroup className="mt-3">
          {productData.images.map((file, index) => (
            <ListGroup.Item key={index}>{file.name}</ListGroup.Item>
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

