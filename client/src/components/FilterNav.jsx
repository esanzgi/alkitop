export function FilterNav () {
  return (

    <nav>
      <ul className='d-flex g-4 justify-content-between'>
        <li className='d-inline-flex flex-column justify-content-center align-items-center'>
          <i className='fs-2 fa fa-bicycle mb-1' />
          <span className='fs-6'>Bicicletas</span>
        </li>

        <li className='d-inline-flex flex-column justify-content-center align-items-center'>
          <i className='fs-2 fa fa-motorcycle mb-1' />
          <span className='fs-6'>Motor</span>
        </li>

        <li className='d-inline-flex flex-column justify-content-center align-items-center'>
          <i className='fs-2 fa fa-person-skiing mb-1' />
          <span className='fs-6'>Esquíes</span>
        </li>

        <li className='d-inline-flex flex-column justify-content-center align-items-center'>
          <i className='fs-2 fa fa-music mb-1' />
          <span className='fs-6'>Music</span>
        </li>

      </ul>
    </nav>
  )
}
