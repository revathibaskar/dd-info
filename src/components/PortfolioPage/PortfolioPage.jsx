import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PortfolioSection from '../PortfolioSection/PortfolioSection'

const PortfolioPage = () => {
  return (
      <>
        <Header/>
        <div className='portfolio-section-head-container'>
        <h1>Our <span>Portfolio</span></h1>
        <hr/>
      </div>
        <PortfolioSection />
        <Footer />
    </>
    
  )
}

export default PortfolioPage