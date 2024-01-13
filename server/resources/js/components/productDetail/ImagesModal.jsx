import React from 'react';
import { Modal, Button } from 'react-bootstrap'; // Asegúrate de tener instalada la librería de Bootstrap

const ImagesModal = ({ isOpen, onClose, images }) => {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Más Imágenes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Agrega aquí el contenido del modal con más imágenes */}
        {/* Puedes usar un Slider u otra interfaz para mostrar las imágenes */}
        {images.map((image, index) => (
          <img
            key={index}
            className='img-fluid rounded-4 object-fit-cover product'
            src={image}
            alt={`Imagen ${index + 1}`}
            style={{ marginBottom: '10px' }}
          />
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImagesModal;
