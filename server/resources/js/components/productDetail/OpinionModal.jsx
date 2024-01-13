import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap"; 
import RatingStars from 'react-rating-stars-component';


export const OpinionModal = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    // Aquí puedes realizar alguna validación antes de enviar la opinión
    onSubmit({ title, content, rating });
    // Limpia el estado y cierra el modal
    setTitle("");
    setContent("");
    setRating(0);
    onClose();
  };

  return (
    <Modal show={isOpen} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Produktuaren iritzia</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Tituloa:</Form.Label>
            <Form.Control type="text" autoFocus value={title} required onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formContent"  className="mt-3">
            <Form.Label>Iritzia:</Form.Label>
            <Form.Control as="textarea" maxLength={1000} rows={10} required value={content} onChange={(e) => setContent(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formRating" className="mt-3 d-flex align-items-center">
            <Form.Label className="pt-3 me-2">Balorazioa:</Form.Label>
            <RatingStars
              value={rating}
              size={40}
              activeColor="#ffd700"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="success" className="px-5" size="lg" onClick={handleSubmit}>
          Bidali
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
