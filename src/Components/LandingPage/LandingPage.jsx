import React from 'react'
import Nav from '../../Container/Nav/Nav'
import Home from '../../Container/Home/Home'
import Text from '../../Container/HomeText/Text'
import About from '../../Container/About/About'
import Services from '../../Container/Services/Services'
import Gallery from '../../Container/Gallery/Gallery'
import Footer from '../../Container/Footer/Footer'


const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <Nav />
      <Home />
      <Text />
      <About />
      <Services />
      <Gallery />
      <Footer />
    </div>
  )
}

export default LandingPage
