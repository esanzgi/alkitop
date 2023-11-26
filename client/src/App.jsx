// App.js

import './App.css'
import { FilterNav } from './components/FilterNav'
import { Header } from './components/Header'
import { HomeContent } from './components/HomeContent'

function App () {
  return (
    <main className=''>
      <div className='fixed-top bg-white'>
        <Header />
        <div className='shadow-sm bg-white'>
          <div className='container-md pt-4'>
            <FilterNav />
          </div>
        </div>

      </div>

      <div className='home-content container'>
        <HomeContent />

      </div>
    </main>
  )
}

export default App
