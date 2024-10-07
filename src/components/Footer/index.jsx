import React from 'react'
import './index.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className='footer-div-sec'>
        <h1>Quick Links</h1>
        <ul>
            <li>Home</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Careers</li>
            <li>About</li>
        </ul>
      </div>
      <div className='footer-div-sec'>
        <h1>Service</h1>
        <ul>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Digital Marketing</li>
        </ul>
      </div>
      <div>
        <button>Project Enquiry <FaAngleRight className='angle-right-icon' /> </button>
        <h3>Follow Us</h3>
        <div className='apps-icon-container'>
            <FaLinkedinIn className='app-icon'/>
            <FaFacebookSquare className='app-icon' />
            <IoLogoInstagram className='app-icon' />
            <FaXTwitter className='app-icon' />
        </div>
        <h3>Write For Us</h3>
      </div>
    </footer>
  )
}

export default Footer