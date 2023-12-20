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
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-at-green border-bottom">
                <div className="container-fluid">
                    <Link className="navbar-brand col-1" href="/">
                        <ApplicationLogo className="navbar-brand" />
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul>
                        <div className='text-white'>
                            <h2>Kaixo {user.name}</h2>
                        </div>
                        <div className="ms-3">
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
            </nav> */}

            {header && (
                <header className="bg-white shadow">
                    <div className="container-fluid py-3 d-flex justify-content-between">
                        {header}
                        {user.name}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul>
                        <div className="ms-3">
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
                        <button
                        onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                        className="navbar-toggler"
                        type="button"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
