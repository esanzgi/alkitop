  import React from 'react';
  import { Footer } from '../components/Footer'
  import { Header } from '../components/Header'
  import ProductEditCard  from '../components/ProductEditCard'
  import { useUserContext } from '@/context/userContext';



  export default function EditProduct({user,owner,product}) {
    const { login } = useUserContext();
    login(user)
    return (
      <div> 
        <main className=''>
        <div className='fixed-top bg-white'>
          <Header user={user} owner={owner} />
        </div>
        <div className='mx-5 my-5 px-5'>
          <ProductEditCard product={product}/>
        </div>
        
        <div className='mt-5 pt-5 bg-light border-top'>
          <div className='container-md'>
            <Footer />
          </div>
        </div>
      </main>
      </div>
    );
  }
