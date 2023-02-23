import React, { useState, useEffect } from 'react'
// import Data from '../Data'
import Frame1 from '../../Assets/Frame 35.png'
import Frame2 from '../../Assets/Frame 36.png'
import Frame3 from '../../Assets/Frame 37.png'
import Frame4 from '../../Assets/Frame 38.png'
import Frame5 from '../../Assets/Frame 39.png'
import Frame6 from '../../Assets/Frame 40.png'
import Frame7 from '../../Assets/Frame 41.png'
import Frame8 from '../../Assets/Frame 42.png'
import Frame9 from '../../Assets/Frame 43.png'
import Frame10 from '../../Assets/Frame 44.png'
import Frame11 from '../../Assets/Frame 45.png'
import Frame12 from '../../Assets/Ellipse 2.png'
import Frame13 from '../../Assets/Ellipse 3.png'
import Frame14 from '../../Assets/Ellipse 7.png'
import Logo from '../../Assets/Home.jpg'

import './Gallery.css'

const Gallery = () => {

    const[currentState, setCurrentState]= useState(0)
    
    // with useEffect, we move through each slides automatically

  useEffect(() => {
    const timer = setTimeout(() => {
      
      if (currentState===13) {
        setCurrentState(0)
      }
      else{
        setCurrentState(currentState + 1)
      }
    }, 5000)

    return () => clearTimeout(timer)

  
  }, [currentState])


  const data = [Frame1, Frame2, Frame3, Frame4, Frame5,
  Frame6, Frame7, Frame8, Frame9, Frame10, Frame11,
   Frame12, Frame13, Frame14]


  // const sliderStyle= {
  //   backgroundImage: `url(${Logo})`

  // }

  // A function to move to the next slide

  const goToNext = currentState => {
    setCurrentState(currentState)
  }

  return (
    <div className='Gallery'>
      <h1>Gallery</h1>
      <div className='Content'>
        <img src={data[currentState]} alt="" />
      </div>

      <div className='Slide-Icon'>
          {
            data.map((data, currentState)=> {
               return <span
                key={currentState}
                onClick={() => goToNext(currentState)}>
              </span>
            })
        }
        </div> 
    
    </div>
  )
}

export default Gallery


{/* <div>
            {
                data.map((data, currentState)=> {
                  return <span
                    key={currentState}
                    onClick={() => goToNext(currentState)}>
                  </span>
                })
            }
        </div> */}