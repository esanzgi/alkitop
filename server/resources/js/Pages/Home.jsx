// App.js

import React, { useEffect } from 'react'
import { FilterNav } from '../components/FilterNav'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HomeContent } from '../components/HomeContent'
import { useUserContext } from '@/context/userContext'

export default function Home({ products, user, owner }) {
  const { login } = useUserContext()

  useEffect(() => {
    login(user)
  }, [])
  login(user)
  
  return (
    <main className=''>
      <div className='fixed-top bg-white'>
        <Header user={user} owner={owner} />
        <div className='shadow-sm bg-light'>
          <div className='container-md pt-2'>
            <FilterNav />
          </div>
        </div>
      </div>

      <div className='home-content container pb-5'>
        <HomeContent products={products} user={user} />
      </div>

      <div className='mt-5 pt-5 bg-light border-top'>
        <div className='container-md'>
          <Footer />
        </div>
      </div>
    </main>
  )
}


