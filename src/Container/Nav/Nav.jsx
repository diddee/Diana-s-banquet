import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Logo.png'
import './Nav.css'

const Nav = () => {

    const [currentNav, setCurrentNav] = useState(1)
    
  return (
    <div className='Nav'>
        <div className="Logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className="NavList">
            <ul className='Nav-Link'>
                <li onClick={() => setCurrentNav(1)} className={currentNav === 1 ? 'active' : ''}>
                
                    <Link to='/'> Home</Link>
                </li>

                <li onClick={() => setCurrentNav(2)} className={currentNav === 2 ? 'active' : ''}>
                
                    <Link to='/About'> About</Link>
                </li>

                <li onClick={() => setCurrentNav(3)} className={currentNav === 3 ? 'active' : ''}>
                
                    <Link to='/Gallery'> Gallery</Link>
                </li>

                <li onClick={() => setCurrentNav(4)} className={currentNav === 4 ? 'active' : ''}>
                
                    <Link to='/Services'> Services</Link>
                </li>

                <li onClick={() => setCurrentNav(5)} className={currentNav === 5 ? 'active' : ''}>
                
                    <Link to='/FAQs'> FAQs</Link>
                </li>

                <li onClick={() => setCurrentNav(6)} className={currentNav === 6 ? 'active' : ''}>
                
                    <Link to='/Contact'> Contact Us</Link>
                </li>
            </ul>

            <ul className='Nav-Btn'>
                <li>
                    <Link to='/Sign In'> Sign In</Link>

                </li>

                <li className='SignUp'>
                    <Link to='/Sign Up'> Sign Up</Link>
                </li>
            </ul>

        </div>
      
    </div>
  )
}

export default Nav
