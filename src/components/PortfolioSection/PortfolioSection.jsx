import React from 'react'
import './PortfolioSection.css'
import Slider2 from '../Slider2/Slider2'

const PortfolioSection = () => {
  return (
    <div className='porttfolio-section-bg-container'>
      <div className='portfolio-section-head-container'>
        <h1>Our <span>Portfolio</span></h1>
        <hr/>
      </div>
      <h3>Mobile UI Screen</h3>
      < Slider2 />
    </div>
  )
}

export default PortfolioSection