import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function AdminCard({title,url}) {
  return (
    <div className='border text-center w-25 p-3 rounded-3 m-3'>
      <p>{title}</p>
      <a class="btn btn-primary" href={url} role="button">Kudeatu</a>
    </div>
    
  )
}
