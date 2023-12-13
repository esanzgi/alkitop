import { useState } from 'react'
import ALKITOP_LOGO from '../assets/images/logotxuria.png'
import { Login } from './login/Login'

import { Search } from './Search'
import { Register } from './login/Register'
import { AlokatzaileRegister } from './login/AlokatzaileRegister'
import { Link } from 'react-router-dom'

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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

      <form action='/' method='get' className='navbar-brand me-0 d-flex align-items-center'>
        <button type='submit' style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
          <img src={ALKITOP_LOGO} alt='alkitop-logo' style={{ width: '80px' }} />
          <span className='d-none d-md-inline text-white fs-4'>Alkitop</span>
        </button>
      </form>


        <Search />

        <button onClick={handleOpenLoginModal} className='d-none d-sm-block btn btn-outline-light rounded-pill' type='button'>
          Sign in
        </button>
          <button type="submit" className='d-none d-md-block btn btn-outline-light ms-2 rounded-pill' onClick={handleRegisterAlokatzaile}>
              <FontAwesomeIcon icon={faPlus} className='me-2' />
              Subir producto
          </button>


        <Login show={showLoginModal} handleClose={handleCloseLoginModal} />
        <AlokatzaileRegister show={showAlokatzaile} handleClose={handleCloseRegisterAlokatzaile} />
      </div>
    </nav>
  )
}
