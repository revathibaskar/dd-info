import React from 'react'
import './Footer.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  return (
   <>
   <footer className='small-sec-footer-bg'>
    <div className='small-sec-footer'>
      <div className='footer-div-sec'>
        <h1>Quick Links</h1>
        <ul>
            <Link to="/" className='remove-line'><li>Home</li></Link>
            <Link to="/services" className='remove-line'><li>Services</li></Link>
            <Link to="/portfolio" className='remove-line'><li>Portfolio</li></Link>
            <Link to="/careers" className='remove-line'><li>Careers</li></Link>
            <Link to="/about" className='remove-line'><li>About</li></Link>
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
        <h3>Follow Us</h3>
        <div className='apps-icon-container'>
            <FaLinkedinIn className='app-icon'/>
            <FaFacebookSquare className='app-icon' />
            <IoLogoInstagram className='app-icon' />
            <FaXTwitter className='app-icon' />
        </div>
        </div>
        <div>
        <h3>Write For Us</h3>
        </div>  
        </div>
        <div className='footer-btn-container'>
        <a className='project-enquiry-btn' href={location.pathname === '/' ? '#project-enquiry-form' : '/#project-enquiry-form'} >Project Enquiry <FaAngleRight className='angle-right-icon' /> </a>
        </div>
    </footer>
    <footer className='medium-sec-footer'>
      <div className='footer-div-sec'>
        <h1>Quick Links</h1>
        <ul>
            <Link to="/" className='remove-line'><li>Home</li></Link>
            <Link to="/services" className='remove-line'><li>Services</li></Link>
            <Link to="/portfolio" className='remove-line'><li>Portfolio</li></Link>
            <Link to="/careers" className='remove-line'><li>Careers</li></Link>
            <Link to="/about" className='remove-line'><li>About</li></Link>
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
     
       <a className='project-enquiry-btn' href={location.pathname === '/' ? '#project-enquiry-form' : '/#project-enquiry-form'} >Project Enquiry <FaAngleRight className='angle-right-icon' /> </a>
        <h3>Follow Us</h3>
        <div className='apps-icon-container'>
            <FaLinkedinIn className='app-icon'/>
            <FaFacebookSquare className='app-icon' />
            <IoLogoInstagram className='app-icon' />
            <FaXTwitter className='app-icon' />
        </div>
      </div>
    </footer>
    </>  
  )
}

export default Footer