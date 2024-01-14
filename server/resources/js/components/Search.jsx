import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { router, useForm, usePage } from '@inertiajs/react'

export function Search() {
  const [search, setSearch] = useState('')
  const { get } = useForm()

  const handleOnSubmit = (event) => {
    event.preventDefault()
    if(!search) return
    get(`/products/search?search=${search}`)
  }

  return (
    <form className='col d-flex mx-3' onSubmit={handleOnSubmit}>
      <div className='input-group'>
        <input
          className='form-control rounded-end rounded-pill'
          type='search'
          placeholder='Bilatu'
          aria-label='Search'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button className='btn btn-light px-4 rounded-start rounded-pill' type='submit'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  )
}
