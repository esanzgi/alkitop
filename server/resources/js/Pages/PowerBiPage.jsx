// App.js

import React from 'react'
import { Powerbi } from '@/components/Powerbi'
import { Header } from '../components/Header'

function PowerBiPage({user,owner}) {
  return (
    <div>
      <Header user={user} owner={owner}/>
      <Powerbi/>
    </div>
    
  )
}

export default PowerBiPage 
