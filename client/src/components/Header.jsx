import ALKITOP_LOGO from '../assets/images/alkitop_logo.png'

import { Search } from './Search'

export function Header () {
  return (

    <nav className='navbar bg-light'>

      <div className='container-fluid'>

        <a className='navbar-brand me-0 d-flex align-items-center' href='#'>
          <img src={ALKITOP_LOGO} alt='alkitop-logo' style={{ width: '80px' }} />

          <span className='d-none d-md-inline text-success fs-4'>Alkitop</span>
        </a>

        <Search />

        <button className='d-none d-sm-block btn btn-success rounded-pill' type='button'>
          Sign in
        </button>
        <a className='d-none d-md-block btn btn-outline-success ms-2 rounded-pill' href='#'>
          <i className='fa fa-plus me-2' />
          Subir producto
        </a>
      </div>
    </nav>
  )
}
