import React from 'react'
import Event from '../../Assets/Ellipse 2.png'
import Decoration from '../../Assets/Ellipse 3.png'
import Cake from '../../Assets/Ellipse 4.png'
import Rental from '../../Assets/Ellipse 5.png'
import Training from '../../Assets/Ellipse 6.png'
import Pastry from '../../Assets/Ellipse 7.png'
import './Services.css'


const Services = () => {
  return (
    <div className='Services'>
        <h1>Our Services</h1>

        <div className='Content'>
            <div className='Service'>
                <img src={Event} alt="" />
                <h2>Event Planning</h2>
                <p>With every last detail taken care of, we're here to ensure the 
                    day you've always dreamed of will be the day you'll never forget.</p>
            </div>
            <div className='Service'>
                <img src={Decoration} alt="" />
                <h2>Decorations</h2>
                <p>With every last detail taken care of, we're here to ensure the 
                    day you've always dreamed of will be the day you'll never forget.</p>
            </div>
            <div className='Service'>
                <img src={Cake} alt="" />
                <h2>Cakes</h2>
                <p>With every last detail taken care of, we're here to ensure the 
                    day you've always dreamed of will be the day you'll never forget.</p>
            </div>
            <div className='Service'>
                <img src={Rental} alt="" />
                <h2>Rentals</h2>
                <p>With every last detail taken care of, we're here to ensure the day 
                    you've always dreamed of will be the day you'll never forget.</p>
            </div>
            <div className='Service'>
                <img src={Training} alt="" />
                <h2>Training</h2>
                <p>With every last detail taken care of, we're here to ensure the 
                    day you've always dreamed of will be the day you'll never forget.</p>
            </div>
            <div className='Service'>
                <img src={Pastry} alt="" />
                <h2>Pastries</h2>
                <p>With every last detail taken care of, we're here to ensure the 
                    day you've always dreamed of will be the day you'll never forget.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Services
