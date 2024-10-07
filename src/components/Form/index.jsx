import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import './index.css'

const Form = () => {
  return (
    <div className='form-container'>
        <div className='form-head-container'>
        <h1 className='form-head'>Get in Touch</h1>
        <hr className='form-line' />
        <div className='para-container'>
        <p>Have a Great Idea! </p>
        <p>let's convert them into action and commit to make it possible. </p>
        </div>
      
        </div>
        <form>
          <div className='name-phne-container'>
            <div className='name-phne-container-frst-div'>
                <label className='label'>Name</label> 
                <div className='input-container '>
                    <IoPersonOutline className='form-icon' />
                    <input type="text" className='input-style' placeholder='Enter your Name'/>
                </div>
                
            </div>
           <div className='name-phne-container-scnd-div'>
                <label>Phone</label> 
                <div className='input-container'>
                <span className='form-icon'>+91</span>
                 <input type="text"  className='input-style' placeholder="Enter your Phone Number" />
                </div>
           </div>
           </div>   
           <div>
                <label>Email</label>
                <div className='input-container'>
                <TfiEmail className='form-icon'/>
                 <input type="email" placeholder='Enter your Email' />
                </div>
                
           </div>
           <div>
                <label>Message</label>
                <div className='input-container'>
                <textarea cols={30} rows={3}></textarea>
                </div>
               
           </div>
          <div className='form-btn-container'> 
           <button type='submit'>Submit</button>    
          </div>
        </form>
    </div>
  )
}

export default Form