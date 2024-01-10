// FiltroProductos.js
import useFilterSearch from '@/hooks/useFilterSearch';
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Range } from './Range';

const FiltroProductos = ({ show, handleClose }) => {

  const handleApplyFilters = () => {
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header>
        <Modal.Title className="text-center">Filtros</Modal.Title>
        <Button variant="close" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Filtro de fecha */}
          <Form.Group controlId="fechaDesde">
            <Form.Label>Fecha Desde:</Form.Label>
            <Form.Control
              type="date"
            />
          </Form.Group>

          <Form.Group controlId="fechaHasta">
            <Form.Label>Fecha Hasta:</Form.Label>
            <Form.Control
              type="date"
            />
          </Form.Group>

          {/* Filtro de rango de precio */}
          <Form.Group controlId="precioMin">
            <Form.Label>Precio Mínimo:</Form.Label>
            <Range></Range>
          </Form.Group>

          <Form.Group controlId="precioMax">
            <Form.Label>Precio Máximo:</Form.Label>
            <Form.Control
              type="number"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleApplyFilters}>
          Aplicar
        </Button>
        <Button variant="secondary" >
          Resetear Filtros
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FiltroProductos;
