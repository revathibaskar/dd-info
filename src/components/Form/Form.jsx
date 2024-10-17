import React, { useState, useEffect } from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import Cookies from 'js-cookie';
import './Form.css';

const Form = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  
  // useEffect(() => {
  //   const savedName = Cookies.get('name');
  //   const savedPhone = Cookies.get('phone');
  //   const savedEmail = Cookies.get('email');
  //   const savedMessage = Cookies.get('message');

  //   if (savedName || savedPhone || savedEmail || savedMessage) {
  //     setFormData({
  //       name: savedName || '',
  //       phone: savedPhone || '',
  //       email: savedEmail || '',
  //       message: savedMessage || ''
  //     });
  //   }
  // }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate the phone number (only allow numbers)
  const isValidPhone = (phone) => {
    return /^\d+$/.test(phone); // Regular expression to allow only numbers
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Validate phone number
    if (!isValidPhone(formData.phone)) {
      alert("Please enter a valid phone number (numbers only).");
      return;
    }

    // Set cookies for form data using js-cookie
    Cookies.set('name', formData.name, { path: '/' });
    Cookies.set('phone', formData.phone, { path: '/' });
    Cookies.set('email', formData.email, { path: '/' });
    Cookies.set('message', formData.message, { path: '/' });

    alert("Form submitted and data saved in cookies!");

    // Clear the form after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='form-container'>
      <div className='form-head-container'>
        <h1 className='form-head'>Get in Touch</h1>
        <hr className='form-line' />
        <div className='para-container'>
          <p>Have a Great Idea!</p>
          <p>Let's convert them into action and commit to making it possible.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='name-phne-container'>
          <div className='name-phne-container-frst-div'>
            <label className='label' htmlFor='name'>Name</label> 
            <div className='input-container '>
              <IoPersonOutline className='form-icon' />
              <input 
                id="name"
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
            <label htmlFor='phone'>Phone</label> 
            <div className='input-container'>
              <span className='form-icon'>+91</span>
              <input 
                id="phone"
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
          <label htmlFor='email'>Email</label>
          <div className='input-container'>
            <TfiEmail className='form-icon'/>
            <input 
              id="email"
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
          <label htmlFor='message'>Message</label>
          <div className='input-container'>
            <textarea 
              id='message'
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
