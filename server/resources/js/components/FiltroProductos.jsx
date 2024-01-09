// FiltroProductos.js
import useFilterSearch from '@/hooks/useFilterSearch';
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Range } from './Range';

const FiltroProductos = ({ show, handleClose }) => {
  const { setFiltro, filtro, resetFilters } = useFilterSearch();

  const [newFilter, setNewFilter] = useState({ ...filtro });

  const handleApplyFilters = () => {
    setFiltro(newFilter);
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
              value={newFilter.fechaDesde}
              onChange={(e) => setNewFilter({ ...newFilter, fechaDesde: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="fechaHasta">
            <Form.Label>Fecha Hasta:</Form.Label>
            <Form.Control
              type="date"
              value={newFilter.fechaHasta}
              onChange={(e) => setNewFilter({ ...newFilter, fechaHasta: e.target.value })}
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
              value={newFilter.precioMax}
              onChange={(e) => setNewFilter({ ...newFilter, precioMax: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleApplyFilters}>
          Aplicar
        </Button>
        <Button variant="secondary" onClick={resetFilters}>
          Resetear Filtros
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FiltroProductos;
