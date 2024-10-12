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
               <h1>Fast Executions</h1>
               <p> We Complete The Project Very Short Time With Best Quality.</p>
               <span className='left-container-arrow'></span>
            </div>
        </div>
        <div className='container right-container'>
            <div className='number-container'>
                02
            </div>
            <div className='text-box'>
               <h1>Guide & Support</h1>
               <p> We Complete the project of the planned cost without any hidden fees and give their client.</p>
               <span className='right-container-arrow'></span>
            </div>
        </div>
        <div className='container left-container'>
            <div className='number-container'>
                03
            </div>   
            <div className='text-box'>
               <h1>Financial Secure</h1>
               <p> We Complete The Project At The Planned Cost Without Any Hidden Fees And Give Their Client.</p>
               <span className='left-container-arrow'></span>
            </div>
        </div>
    </div>
    </div> 
  )
}

export default TimeLine