import React, { useState, useEffect } from 'react';
import ALKITOP_LOGO from '../assets/images/logotxuria.png';
import { Login } from './login/Login';
import { Search } from './Search';
import { Register } from './login/Register';
import { AlokatzaileRegister } from './login/AlokatzaileRegister';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useUserContext } from '@/context/userContext';
import { Dropdown } from 'react-bootstrap';

export function Header({ user, owner }) {
  const { loggedUser } = useUserContext()
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAlokatzaile, setShowAlokatzaile] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!loggedUser);
  const [roleId, setRoleId] = useState(null);

  useEffect(() => {
    fetch('/api/user/role')
      .then(response => response.json())
      .then(data => {
        setRoleId(data);
      })
      .catch(error => {
        console.error('Error fetching user ID:', error);
      });
  }, []);

  useEffect(() => {
    setIsAuthenticated(!!loggedUser);
  }, [loggedUser]);

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
          <UserDropdown isAuthenticated={isAuthenticated} handleRegisterAlokatzaile={handleRegisterAlokatzaile} roleId={roleId} />
        ) : (
          <Link href='/login' className='btn btn-outline-light rounded-pill'>
            Sign in
          </Link>
        )}

        {isAuthenticated && botoia()}


        <Login show={showLoginModal} handleClose={handleCloseLoginModal} />
        <AlokatzaileRegister show={showAlokatzaile} handleClose={handleCloseRegisterAlokatzaile} />
      </div>
    </nav>
  );

  function botoia() {
    if (roleId == 3) {
      return <button type='submit' className='btn btn-outline-light ms-2 rounded-pill d-none d-md-block' onClick={handleRegisterAlokatzaile}> <FontAwesomeIcon icon={faPlus} className='me-2' />Produktu igo</button>
    } else if (roleId == 4 || roleId == 1 || roleId == 2) {
      return <Link to='/produktu-gehitu' href='/produktu-gehitu' className='btn btn-outline-light ms-2 rounded-pill d-none d-md-block'> <FontAwesomeIcon icon={faPlus} className='me-2' /> Produktu igo </Link>
    }
  }

  function isAdmin() {
    if (roleId == 1) {
      return <Link to="/admin" href='/admin' className='btn btn-outline-light ms-2 rounded-pill d-none d-md-block'>Kudeaketa</Link>
    }
  }
}

function UserDropdown({ isAuthenticated, handleRegisterAlokatzaile, roleId }) {
  const { post, get } = useForm()
  const { loggedUser, logout } = useUserContext();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    post(route('logout'))
      .then(() => {
        logout();
        setShowDropdown(false);
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  const handleProduct = () => {
    if (roleId == 3) {
      handleRegisterAlokatzaile()
    } else if (roleId == 4 || roleId == 1 || roleId == 2) {
      get('/produktu-gehitu')
    }
  }

  const handleAdmin = () => {
    if (roleId == 1) {
      return <Link to="/admin" href='/admin' className='btn btn-outline-light ms-2 rounded-pill d-none d-md-block'>Kudeaketa</Link>
    }
  }

  return (
    <Dropdown show={showDropdown} onToggle={handleDropdownToggle}>
      <Dropdown.Toggle variant='outline-light' id='user-dropdown' className='rounded-pill'>
        <FontAwesomeIcon icon={faUser} className='me-2' />
        {loggedUser?.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} href='/profile' onClick={() => setShowDropdown(false)}>
          Profile
        </Dropdown.Item>
        <Dropdown.Item className='d-block d-md-none' onClick={handleProduct}>
          Produktua igo
        </Dropdown.Item>
        {roleId === 1 && (
          <Dropdown.Item as={Link} href='/admin'>
            Admin
          </Dropdown.Item>
        )}
        <Dropdown.Item as="button" onClick={handleLogout}>
          Logout <FontAwesomeIcon icon={faSignOutAlt} className='ms-2' />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
