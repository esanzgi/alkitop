import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function AdminMenu() {
  return (
    <NavDropdown title="Admin menu" id="basic-nav-dropdown">
      <NavDropdown.Item href="/admin/users">Erabiltzaileak</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Produktuak</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
          <NavDropdown.Item href="/admin">
              Hasiera
         </NavDropdown.Item>
    </NavDropdown>
  );
}
