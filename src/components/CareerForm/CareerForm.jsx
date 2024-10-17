import React, { useState } from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { BsLink45Deg } from "react-icons/bs";
import Cookies from 'js-cookie';
import './CareerForm.css';

const CareerForm = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: 'Ui Ux Designer',
    email: '',
    resume: null,
    message: ''
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
    document.getElementById('file-name').textContent = e.target.files.length > 0 ? e.target.files[0].name : 'Attach Your Resume';
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to cookies
    Cookies.set('careerForm', JSON.stringify(formData), { expires: 7 }); // 7 days expiration

    console.log('Form data saved to cookies:', formData);

    // Reset form after submission
    setFormData({
      name: '',
      phone: '',
      role: 'Ui Ux Designer',
      email: '',
      resume: null,
      message: ''
    });
    document.getElementById('file-name').textContent = 'Attach Your Resume';
  };

  return (
    <div className='form-container'>
      <div className='form-head-container'>
        <h1 className='form-head'>Join Our Team</h1>
        <hr className='form-line' />
        <div className='para-container'>
          <p>Have a Great Idea!</p>
          <p>Let's convert them into action and commit to making it possible.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='name-phne-container'>
          <div className='name-container'>
            <label className='label'>Name</label> 
            <div className='input-container '>
              <IoPersonOutline className='form-icon' />
              <input 
                type="text" 
                name="name" 
                className='input-style' 
                placeholder='Enter your Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='phone-container'>
            <label>Phone</label> 
            <div className='input-container'>
              <span className='form-icon'>+91</span>
              <input 
                type="text" 
                name="phone" 
                className='input-style' 
                placeholder="Enter your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div> 
        <div className='role-email-container'>
          <div className='role-container'>
            <label>Role</label>
            <select 
              name="role"
              className='input-container select-con'
              value={formData.role}
              onChange={handleChange}
            >
              <option>Ui Ux Designer</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Graphic Designer</option>
            </select>
          </div>
          <div className='email-container'>
            <label>Email</label>
            <div className='input-container'>
              <TfiEmail className='form-icon'/>
              <input 
                type="email" 
                name="email" 
                placeholder='Enter your Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>    
        <div className='resume-container'>
          <label>Resume</label>
          <div className="input-container">
            <BsLink45Deg className="form-icon" />
            <label htmlFor="file-upload" className="custom-file-upload">
              <span id="file-name">Attach Your Resume</span>
            </label>
            <input 
              id="file-upload"
              type="file" 
              name="resume" 
              style={{ display: 'none' }} 
              onChange={handleFileChange}
              required
            />
          </div>
        </div>
        <div className='message-container'>
          <label>Message</label>
          <div className='input-container'>
            <textarea 
              cols={30} 
              rows={3} 
              name="message" 
              placeholder="Enter your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <div className='form-btn-container'> 
          <button type='submit'>Submit</button>    
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
