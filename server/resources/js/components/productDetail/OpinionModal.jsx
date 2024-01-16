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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/rating/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify({
          id_user: loggedUser.id_user,
          id_product: product.id_product,
          ...data,
        }),
      });

      console.log('Response status:', response.status);

      if (response.status === 201) {
        console.log('Post successful:', response);
        setData({
          title: '',
          review: '',
          rating: 0,
        });
        onClose();
      } else {
        console.log('Post unsuccessful:', response);
        // Handle the error, e.g., display an error message
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error, e.g., display an error message
    }
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
