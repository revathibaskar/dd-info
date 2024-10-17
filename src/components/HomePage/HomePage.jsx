import React,{useEffect} from 'react'
import HeaderNav from '../Header/Header'
import backgroundVideo from '../../assets/backgroundVideo.mp4'
import './HomePage.css'
import BgContent from '../BgContent/BgContent'
import ChooseUs from '../ChooseUs/ChooseUs'
import ServiceSection from '../ServiceSection/ServiceSecion'
import TechnologiesPlatformSection from '../TechnologiesPlatformSection/TechnologiesPlatformSection'
import ProjectSection from '../ProjectSection/ProjectSection'
import ReviewSection from '../ReviewSection/ReviewSection'
import Footer from '../Footer/Footer'
import PortfolioSection from '../PortfolioSection/PortfolioSection'

const HomePage = () => {
  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that section
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
  <div>  
   <div className='video-container'>   
        <video className="video-background" autoPlay muted loop >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className='content'>
        <HeaderNav />
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