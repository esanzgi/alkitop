import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function AdminMenu() {
  return (
    <div className='bg-success text-white '>
      <NavDropdown title="Admin menu" id="basic-nav-dropdown" className='p-2'>
      <NavDropdown.Item href="/admin/users">Erabiltzaileak</NavDropdown.Item>
        <NavDropdown.Item href="/admin/produktuak">Produktuak</NavDropdown.Item>
        <NavDropdown.Item href="/admin/iritziak">Iritziak</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/panel">Estatistikak</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/admin">Hasiera</NavDropdown.Item>

      </NavDropdown>
    </div>
    
  );
}
