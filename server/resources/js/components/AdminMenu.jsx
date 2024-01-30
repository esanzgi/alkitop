import { Link } from '@inertiajs/react';
import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function AdminMenu() {
  return (
    <div className='bg-success text-white '>
      <NavDropdown title="Admin menu" id="basic-nav-dropdown" className='p-2'>
      <NavDropdown.Item>
        <Link href="/admin/users" className='' >Erabiltzaileak</Link>
      </NavDropdown.Item>

      <NavDropdown.Item >
        <Link href="/admin/produktuak">Produktuak</Link>
      </NavDropdown.Item>

      <NavDropdown.Item >
        <Link href="/admin/iritziak" >Iritziak</Link>
      </NavDropdown.Item>
    
      <NavDropdown.Divider />

      <NavDropdown.Item>
        <Link href="/panel"> Estatistikak </Link>
      </NavDropdown.Item>

      <NavDropdown.Divider />

      <NavDropdown.Item >
        <Link href="/admin" >Hasiera</Link>
      </NavDropdown.Item>

      </NavDropdown>
    </div>
    
  );
}
