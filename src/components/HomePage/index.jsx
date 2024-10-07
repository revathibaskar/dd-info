import React from 'react'
import Header from '../Header'
import backgroundVideo from '../../assets/backgroundVideo.mp4'
import './index.css'
import BgContent from '../BgContent'
import ChooseUs from '../ChooseUs'
import ServiceSection from '../ServiceSection'
import TechnologiesPlatformSection from '../TechnologiesPlatformSection'
import ProjectSection from '../ProjectSection'
import ReviewSection from '../ReviewSection'
import Footer from '../Footer'
import PortfolioSection from '../PortfolioSection'

const HomePage = () => {
  return (
  <div>  
   <div className='video-container'>   
        <video className="video-background" autoPlay muted loop >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className='content'>
        <Header />
        <BgContent />
        </div>
    </div> 
   <ChooseUs />
   <ServiceSection />
   <TechnologiesPlatformSection />
   <PortfolioSection />
   <ProjectSection />
   <ReviewSection />
   <Footer />
  </div>    
  )
}

export default HomePage