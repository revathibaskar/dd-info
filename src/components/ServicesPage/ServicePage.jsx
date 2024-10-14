import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ServiceSection from '../ServiceSection/ServiceSecion'
import './ServicePage.css'
const ServicePage = () => {
  return (
   <div className='service-page-bg'>
    <Header />
    <ServiceSection />
    <Footer />
   </div>
  )
}

export default ServicePage