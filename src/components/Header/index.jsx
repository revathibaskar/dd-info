import React, { useState } from 'react'
import ddLogo from "../../assets/ddLogo.png"
import { Link } from 'react-router-dom';
import "./index.css"

const Header = () => {
  const [isActive,setActive] = useState(false)

  const onchange = ()=> {
     setActive(prevState => !prevState)
  }

  return (
    <div className='header-main-container'>
     <header>
        <img src={ddLogo} className='dd-logo' />
        <ul className='header-ul-con'>
            <Link to="/" className={isActive ? 'active-class' :'remove-line'}  ><li  onClick={onchange} className={isActive && 'color'}>Home</li></Link>
            <Link to="/services" className='remove-line'><li>Services</li></Link>
            <Link to="/portfolio" className='remove-line'><li>Portfolio</li></Link>
            <Link to="/careers" className='remove-line'><li>Careers</li></Link>
            <Link to="/about" className='remove-line'><li>About</li></Link>
        </ul>
        <div  >
            <button className='btn-style-header'>Client Area</button>
            <button className='btn-style-header'>Enquire Now</button>
        </div>
    </header> 
    </div>
  )
}

export default Header