import React from 'react'
import Logo from '../../Assets/Foot-Logo.png'
import IG from '../../Assets/IG.png'
import Whatsapp from '../../Assets/Whatsapp.png'
import Phone from '../../Assets/Phone.png'
import Facebook from '../../Assets/Facebook.png'
import Mail from '../../Assets/mail.png'


import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="Events">
            <p>WEDDINGS</p>
            <p>BIRTHDAYS</p>
            <p>RENTALS</p>
            <p className='Training'>TRAINING</p>

        </div>
        <div className='Blank'></div>
        <div className="Foot">
            <img src={Logo} alt="" />
            <div className="Socials">
                <p>Follow</p>
                <div className="Icon">
                    <img src={IG} alt="" />
                    <img src={Whatsapp} alt="" />
                    <img src={Phone} alt="" />

                </div>
            </div>
            <div className="Contact">
                <p>Contact Info</p>
                <div className="Phone">
                    <img src={Phone} alt="" />
                    <p>+234 810 999 7387</p>
                </div>
                <div className="Mail">
                    <img src={Mail} alt="" />
                    <p>dianasbanquet.eventplanning@gmail.com</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
