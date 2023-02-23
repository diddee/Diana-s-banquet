import React from 'react'
import { Link } from 'react-router-dom'
import './Text.css'


const Text = () => {
  return (
    <div className='HomeText'>
        <p className='Top'>Make any Occasion Unforgettable.</p>
        <p>Bring your dream event to life with our expert planning services!
             From intimate gatherings to grand celebrations, we will handle
              every moment, so you can sit back, relax and enjoy the moment. <br />
               Contact us today!</p>
        <Link to="/Contact">LET'S CREATE MEMORIES TOGETHER...</Link>


    </div>
  )
}

export default Text
