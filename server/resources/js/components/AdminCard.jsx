import { Link } from '@inertiajs/react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function AdminCard({title,url}) {
  return (
    <div className='border text-center w-25 p-3 rounded-3 m-3'>
      <p>{title}</p>
      <Link to={url} href={url} class="btn btn-primary">Kudeatu</Link>
    </div>
    
  )
}
