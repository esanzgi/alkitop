import React from 'react'
import { FilterNav } from '../components/FilterNav'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HomeContent } from '../components/HomeContent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProduktuGehitu } from '../components/ProduktuGehitu'
import { useUserContext } from '@/context/userContext'

function ProduktuGehituPage ({user,owner}) {
  const { loggedUser, login, logout } = useUserContext()
  login(user)
    return (
      <main className=''>
        <div className='fixed-top bg-white'>
          <Header user={user} owner={owner}/>
          <div className='shadow-sm bg-light'>
            <div className='container-md pt-2'>
              <FilterNav />
            </div>
          </div>
        </div>

        <div className='home-content container pb-5'>
          <ProduktuGehitu />
        </div>

        <div className='mt-5 pt-5 bg-light border-top'>
          <div className='container-md'>
            <Footer />
          </div>
        </div>
      </main>
  )
}

export default ProduktuGehituPage 
