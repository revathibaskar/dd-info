import React from 'react'
import './TimeLine.css'

const TimeLine = () => {
  return (
   <div className='ver-time'>
    <div className='timeline'>
        <div className='container left-container'>
            <div className='number-container'>
                 01
            </div>
            <div className='text-box'>
               <h1>Proven Expertise</h1>
               <p>With years of experience in [your industry], we deliver exceptional results tailored to
               your needs.</p>
               <span className='left-container-arrow'></span>
            </div>
        </div>
        <div className='container right-container'>
            <div className='number-container'>
                02
            </div>
            <div className='text-box'>
               <h1>Client-Centric Approach</h1>
               <p>We prioritize your goals, crafting solutions that resonate with your unique challenges.
               </p>
               <span className='right-container-arrow'></span>
            </div>
        </div>
        <div className='container left-container'>
            <div className='number-container'>
                03
            </div>   
            <div className='text-box'>
               <h1>Commitment to Quality</h1>
               <p> We adhere to industry best practices, ensuring our deliverables meet the highest
               standards.</p>
               <span className='left-container-arrow'></span>
            </div>
        </div>
        <div className='container right-container'>
            <div className='number-container'>
                04
            </div>
            <div className='text-box'>
               <h1>Results-Driven Focus</h1>
               <p>Our strategies are designed for measurable results, with performance metricstracked and reported.</p>
               <span className='right-container-arrow'></span>
            </div>
        </div>
        <div className='container left-container'>
            <div className='number-container'>
                05
            </div>   
            <div className='text-box'>
               <h1>Satisfaction Guarantee</h1>
               <p>Your satisfaction is our priority; we’ll work tirelessly to make it right if needed. This
               concise version focuses on the key reasons clients should choose your services!</p>
               <span className='left-container-arrow'></span>
            </div>
        </div>
        <div className='container right-container'>
            <div className='number-container'>
                06
            </div>
            <div className='text-box'>
               <h1>Financial Secure</h1>
               <p> We Complete the project of the planned cost without any hidden fees and give their client.</p>
               <span className='right-container-arrow'></span>
            </div>
        </div>
    </div>
    </div> 
  )
}

export default TimeLine