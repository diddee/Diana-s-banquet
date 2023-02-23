import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
        <p>Welcome to Diana's Banquet</p>
        <Link to="/Contact">CONTACT US</Link>

        
    </div>
  )
}

export default Home
