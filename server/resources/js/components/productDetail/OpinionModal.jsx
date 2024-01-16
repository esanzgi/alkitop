import { useUserContext } from "@/context/userContext";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import RatingStars from 'react-rating-stars-component';


export const OpinionModal = ({ isOpen, onClose, onSubmit, product }) => {
  const { loggedUser } = useUserContext()
  const { data, setData, post, errors } = useForm({
    title: '',
    review: '',
    rating: 0,
  });
  console.log('OPINION MODAL LOGGED', loggedUser)

  const handleSubmit = (e) => {
    e.preventDefault();

    post('/api/rating/create', {
      data: {
        id_product: product.id_product,
        ...data,
      },
    });
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
            <Form.Control
              type="text"
              autoFocus
              required
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formContent" className="mt-3">
            <Form.Label>Iritzia:</Form.Label>
            <Form.Control
              as="textarea"
              maxLength={1000}
              rows={10}
              required
              value={data.review}
              onChange={(e) => setData('review', e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formRating" className="mt-3 d-flex align-items-center">
            <Form.Label className="pt-3 me-2">Balorazioa:</Form.Label>
            <RatingStars
              size={40}
              activeColor="#ffd700"
              value={data.rating}
              onChange={(newRating) => setData('rating', newRating)}
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
