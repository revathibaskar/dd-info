import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Form from '../Form/Form'
import './CareersPage.css'
import  MouseIcon from '../MouseIcon/MouseIcon'
import CareerForm from '../CareerForm/CareerForm'
const CareersPage = () => {
  return (
   <>
      <Header />
     <div className='career-page-container'>
      <div className='career-page-head-container'>
       <h1>Work At The Heart <br/> Of Change</h1>
       <h3>This is a place to grow, learn and connect. <br />
       Everything that makes you who you are is welcome here. </h3>
       <div className='mouse-logo'>
       <MouseIcon />
       </div>
      </div>
      <CareerForm />
      </div>  
      <Footer />
   </> 
  )
}

export default CareersPage