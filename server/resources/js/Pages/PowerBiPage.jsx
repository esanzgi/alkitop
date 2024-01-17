import React from 'react'
import { Powerbi } from '@/components/Powerbi'
import { Header } from '../components/Header'
import { useUserContext } from '@/context/userContext'

function PowerBiPage({user,owner}) {
  const { loggedUser, login, logout } = useUserContext()
  login(user)
  return (
    <div >
      <div className='fixed-top bg-white'>
      <Header user={user} owner={owner}/>
      </div>
      <Powerbi/>
    </div>
    
  )
}

export default PowerBiPage 
