import React, { useState } from 'react'
import ddLogo from "../../assets/ddLogo.png"
import { Link } from 'react-router-dom';
import { CgMenuRight } from "react-icons/cg";
import { BsXLg } from "react-icons/bs";
import "./Header.css"

const Header = () => {
  const [isCliked,setClick] = useState(false)

  const handleClick = () => {
      setClick(prevState => !prevState)
  }

  return (
    <header>
     <div className='header-main-container'>
        <Link  to="/"><img src={ddLogo} className='dd-logo' /> </Link> 
        <nav className={isCliked && 'active-nav'}> 
        <ul className='mobile-header-ul-con'>
            <Link to="/" className='remove-line'><li>Home</li></Link>
            <Link to="/services" className='remove-line'><li>Services</li></Link>
            <Link to="/portfolio" className='remove-line'><li>Portfolio</li></Link>
            <Link to="/careers" className='remove-line'><li>Careers</li></Link>
            <Link to="/about" className='remove-line'><li>About</li></Link>
        </ul>
        <div className='mobile-header-btn-container'>
            <button className='mobile-btn-style-header'>Client Area</button>
            <button className='mobile-btn-style-header'>Enquire Now</button>
        </div>
        </nav>
        <ul className='header-ul-con'>
            <Link to="/" className='remove-line'><li>Home</li></Link>
            <Link to="/services" className='remove-line'><li>Services</li></Link>
            <Link to="/portfolio" className='remove-line'><li>Portfolio</li></Link>
            <Link to="/careers" className='remove-line'><li>Careers</li></Link>
            <Link to="/about" className='remove-line'><li>About</li></Link>
        </ul>
        <div className='header-btn-container'>
            <button className='btn-style-header'>Client Area</button>
            <button className='btn-style-header'>Enquire Now</button>
        </div>
        <div className='header-menu-container'>{
           isCliked ?<BsXLg onClick={handleClick} className='header-menu-icon'/> : <CgMenuRight onClick={handleClick} className='header-menu-icon' />
          }
        </div>
    </div> 
    </header>
  )
}

export default Header