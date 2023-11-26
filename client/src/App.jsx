// App.js

import './App.css'
import { FilterNav } from './components/FilterNav'
import { FilteredProducts } from './components/FilteredProducts'
import { Header } from './components/Header'
import { HomeContent } from './components/HomeContent'

function App () {
  return (
    <main className='pb-5'>
      <div className='fixed-top bg-white'>
        <Header />
        <div className='shadow-sm bg-white'>
          <div className='container-md pt-2'>
            <FilterNav />
          </div>
        </div>

      </div>

      <div className='home-content container'>
        <HomeContent />
        <FilteredProducts />
        {/* <FilteredProducts /> */}
      </div>
    </main>
  )
}

export default App