import { useState } from 'react'
import ALKITOP_LOGO from '../assets/images/logotxuria.png'
import { Login } from './login/Login'

import { Search } from './Search'
import { Register } from './login/Register'
import { AlokatzaileRegister } from './login/AlokatzaileRegister'
import { Link } from 'react-router-dom'

export function Header () {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showAlokatzaile, setShowAlokatzaile] = useState(false)

  const handleOpenLoginModal = () => {
    setShowLoginModal(true)
  }

  const handleCloseLoginModal = () => {
    setShowLoginModal(false)
  }

  const handleRegisterAlokatzaile = () => {
    setShowAlokatzaile(true)
  }

  const handleCloseRegisterAlokatzaile = () => {
    setShowAlokatzaile(false)
  }

  return (

    <nav className='navbar bg-at-green'>

      <div className='container-fluid'>

        <a className='navbar-brand me-0 d-flex align-items-center' href='#'>
          <img src={ALKITOP_LOGO} alt='alkitop-logo' style={{ width: '80px' }} />

          <span className='d-none d-md-inline text-white fs-4'>Alkitop</span>
        </a>

        <Search />

        <button onClick={handleOpenLoginModal} className='d-none d-sm-block btn btn-outline-light rounded-pill' type='button'>
          Sign in
        </button>
        <Link to='/produktu-gehitu' className='d-none d-md-block btn btn-outline-light ms-2 rounded-pill' onClick={handleRegisterAlokatzaile}>
          <i className='fa fa-plus me-2' />Subir producto
        </Link>

        <Login show={showLoginModal} handleClose={handleCloseLoginModal} />
        <AlokatzaileRegister show={showAlokatzaile} handleClose={handleCloseRegisterAlokatzaile} />
      </div>
    </nav>
  )
}
