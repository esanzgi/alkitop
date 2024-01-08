import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-vh-100 bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-at-green border-bottom">
                <div className="container-fluid">
                    <Link className="navbar-brand " href="/" style={{ width: '150px' }}>
                        <ApplicationLogo className="navbar-brand" />
                    </Link>

                    <div className="navbar col-10 d-flex " id="navbarNav" >

                        <div className='text-white me-5 col-lg-8'>
                                <h2>Kaixo {user.name}</h2>
                        </div>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')} className="nav-link text-white" >
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul>

                        <div className="me-5">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="d-flex align-items-center">
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                        >
                                            {user.name}
                                            <svg
                                                className="ms-2 -me-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>

                    
                </div>
            </nav> 
            <main>{children}</main>
        </div>
    );
}
