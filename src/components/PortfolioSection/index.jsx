import React from 'react'
import './index.css'
import ImageSlider from '../ImageSlider'

const PortfolioSection = () => {
  return (
    <div className='porttfolio-bg-container'>
      <div className='portfolio-head-container'>
        <h1 className='portfolio-head'>Our <span>Portfolio</span></h1>
        <hr className='hr-line'/>
    </div>
      <h3>Mobile UI Screen</h3>
      <ImageSlider />
        {/* <div className='img-card-animation-container'>
            <div className='image-1'>
            </div>
            <div className='image-2'>
            </div>
            <div className='image-3'>
            </div>
            <div className='image-4'>
            </div>
            <div className='image-5'>
            </div>
        </div> */}
    </div>
  )
}

export default PortfolioSection