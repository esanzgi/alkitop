export function Search () {
  return (
    <form className='col d-flex mx-3'>
      <div className='input-group'>
        <input className='form-control rounded-end rounded-pill' type='search' placeholder='Buscar' aria-label='Search' />
        <button className='btn btn-outline-success px-4 rounded-start rounded-pill' type='submit'>
          <i className='fa fa-search' />
        </button>
      </div>
    </form>
  )
}
