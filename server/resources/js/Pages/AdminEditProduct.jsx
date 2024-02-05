import React from 'react';
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useUserContext } from '@/context/userContext';
import ProductEditCard from '@/components/ProductEditCard';
import AdminMenu from '@/components/AdminMenu';



export default function EditProduct({user,product}) {
  const { login } = useUserContext();
  login(user)
  return (
    <div> 
      <main className=''>
      <div className='fixed-top bg-white'>
        <Header user={user} />
        <AdminMenu></AdminMenu>
      </div>
      <div className='mx-5 my-5 px-5'>
        <ProductEditCard product={product}/>
      </div>
      
    </main>
    </div>
  );
}
