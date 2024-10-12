import React, { useState } from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import Cookies from 'js-cookie'; 
import './Form.css'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Set cookies for form data using js-cookie
    Cookies.set('name', formData.name, { path: '/' });
    Cookies.set('phone', formData.phone, { path: '/' });
    Cookies.set('email', formData.email, { path: '/' });
    Cookies.set('message', formData.message, { path: '/' });

    alert("Form submitted and data saved in cookies!");
  };

  return (
    <div className='form-container'>
        <div className='form-head-container'>
        <h1 className='form-head'>Get in Touch</h1>
        <hr className='form-line' />
        <div className='para-container'>
        <p>Have a Great Idea! </p>
        <p>Let's convert them into action and commit to making it possible. </p>
        </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='name-phne-container'>
            <div className='name-phne-container-frst-div'>
                <label className='label'>Name</label> 
                <div className='input-container '>
                    <IoPersonOutline className='form-icon' />
                    <input 
                      type="text" 
                      name="name" 
                      className='input-style' 
                      placeholder='Enter your Name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                </div>
            </div>
            <div className='name-phne-container-scnd-div'>
                <label>Phone</label> 
                <div className='input-container'>
                <span className='form-icon'>+91</span>
                 <input 
                    type="text" 
                    name="phone" 
                    className='input-style' 
                    placeholder="Enter your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
           </div>
           </div>   
           <div>
                <label>Email</label>
                <div className='input-container'>
                <TfiEmail className='form-icon'/>
                 <input 
                    type="email" 
                    name="email" 
                    placeholder='Enter your Email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
           </div>
           <div>
                <label>Message</label>
                <div className='input-container'>
                <textarea 
                    cols={30} 
                    rows={3} 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange}
                    placeholder="Enter your Message"
                    required
                ></textarea>
                </div>
           </div>
          <div className='form-btn-container'> 
           <button type='submit'>Submit</button>    
          </div>
        </form>
    </div>
  )
}

export default Form;
