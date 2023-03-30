import React from 'react'
import { Link } from 'react-router-dom'

import logo from './../assets/Logo_2.png'

import './navbar.css'

const Navbar = () => {
    return (
        <div className="container_navbar">
            <header>
                <img src={logo} alt="logo_site" className="logo" />

                <nav className="navmain">
                    <ul className='navUl'>
                        <li className='navLi'>
                            <Link to='/' className='links_nav'>
                                Home
                            </Link>
                        </li>
                        <li className='navLi'>
                            <Link to='/cartaz' className='links_nav'>
                                Cartaz
                            </Link>
                        </li>
                        <li className='navLi'>
                            <Link to='/sobre' className='links_nav'>
                                Sobre
                            </Link>
                        </li>
                        <li className='navLi'>
                            <Link to='/login' className='links_nav'>
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar