import React, { useState, useEffect } from 'react';
import ALKITOP_LOGO from '../assets/images/logotxuria.png';
import { Login } from './login/Login';
import { Search } from './Search';
import { Register } from './login/Register';
import { AlokatzaileRegister } from './login/AlokatzaileRegister';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@inertiajs/react';

export function Header({ user, owner }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAlokatzaile, setShowAlokatzaile] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);
  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleRegisterAlokatzaile = () => {
    setShowAlokatzaile(true);
  };

  const handleCloseRegisterAlokatzaile = () => {
    setShowAlokatzaile(false);
  };

  return (
    <nav className='navbar bg-at-green'>
      <div className='container-fluid'>
        <Link href='/' className='navbar-brand me-0 d-flex align-items-center'>
          <button type='button' style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
            <img src={ALKITOP_LOGO} alt='alkitop-logo' style={{ width: '80px' }} />
            <span className='d-none d-md-inline text-white fs-4'>Alkitop</span>
          </button>
        </Link>

        <Search />

        {isAuthenticated ? (
          <Link className='btn btn-outline-light rounded-pill' type='button' href="/profile">
            <label>{user.name}</label>
          </Link>
        ) : (
          <Link href='/login' className='btn btn-outline-light rounded-pill'>
            Sign in
          </Link>
        )}

        {isAuthenticated && botoia(owner)}


        
        
        <Login show={showLoginModal} handleClose={handleCloseLoginModal} />
        <AlokatzaileRegister show={showAlokatzaile} handleClose={handleCloseRegisterAlokatzaile} />
      
      </div>
    </nav>
  );

  function botoia(owner) {
    if (owner==null) {
      return <button type='submit' className='btn btn-outline-light ms-2 rounded-pill' onClick={handleRegisterAlokatzaile}> <FontAwesomeIcon icon={faPlus} className='me-2' />Produktu igo</button>
    }else{
      return <Link to='/produktu-gehitu' href='/produktu-gehitu' className='btn btn-outline-light ms-2 rounded-pill'> <FontAwesomeIcon icon={faPlus} className='me-2' /> Produktu igo </Link>
    }
  }

  
}


