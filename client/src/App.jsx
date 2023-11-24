import './App.css'
import { FilterNav } from './components/FilterNav'
import { Header } from './components/Header'

function App () {
  return (
    <main>

      <Header />
      <div className='container mt-3'>
        <FilterNav />
      </div>
    </main>
  )
}

export default App
