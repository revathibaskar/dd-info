import React from 'react'
import './index.css'
import Slider from '../Slider'

const PortfolioSection = () => {
  return (
    <div className='porttfolio-bg-container'>
      <div className='portfolio-head-container'>
        <h1 className='portfolio-head'>Our <span>Portfolio</span></h1>
        <hr className='hr-line'/>
      </div>
      <h3>Mobile UI Screen</h3>
      < Slider />
    </div>
  )
}

export default PortfolioSection