import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { router } from '@inertiajs/react'

export function Search() {
  const [search, setSearch] = useState('')

  const handleOnSubmit = (event) => {
    console.log(search)
    event.preventDefault()
    router.post('/products/search', { search })
  }

  return (
    <form className='col d-flex mx-3' onSubmit={handleOnSubmit}>
      <div className='input-group'>
        <input
          className='form-control rounded-end rounded-pill'
          type='search'
          placeholder='Buscar'
          aria-label='Search'
          onChange={(e) => setSearch(e.target.value)} />
        <button className='btn btn-light px-4 rounded-start rounded-pill' type='submit'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  )
}
