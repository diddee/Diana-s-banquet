import React from 'react'
import About1 from '../../Assets/about2.png'
import About2 from '../../Assets/about1.png'
import './About.css'

const About = () => {
  return (
    <div className='About'>
      <h1>About Us</h1>
      <div className='Content'>
        <img src={About2} alt="a pic" className='Img1'/>
        <img src={About1} alt="a pic" className='Img2'/>
        <div className='Paragraph'>
          <p>We are gifted Event Planners, well experienced in decoration of all kinds, 
            surprise packages, baking of cake, snacks, small chops and other edibles for events. 
            We are a team of professionals for all event categories. We cover, edit your pictures 
            and videos with the latest technologies.
          </p>
          <p>We are well renowned for our deployment of top-notch colorful decorations, and we 
            are wholesomely driven by our organizational values of Excellence, integrity, 
            customer-centricity and accountability.
          </p>

        </div>

      </div>
      
    </div>
  )
}

export default About
