import React from 'react'
import { useEffect, useRef } from 'react';
import './index.css'
import ReactTimeLine from '../ReactTimeLine'

const ChooseUs = () => {
  const chooseUsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-choose-us'); // Add animation class when in view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (chooseUsRef.current) {
      observer.observe(chooseUsRef.current); // Observe the section
    }

    return () => {
      if (chooseUsRef.current) {
        observer.unobserve(chooseUsRef.current); // Cleanup observer on component unmount
      }
    };
  }, []);

  return (
  <div className='choose-us-bg'>
     <div className='choose-us-head-container' ref={chooseUsRef}>
        <h3>Why Choosing Us</h3>
        <h1>Few Reasons Why People Choosing Us!</h1>
        <h3>To Help You Design And Scale Digital Products That Users Love</h3>
   </div>
   <ReactTimeLine />
   <h1 className='success-stry-head'>Our <span>Success</span> Story</h1>
   <ul className='success-stry-ul-con'>
    <li>
      <h1>50+</h1>
      <h4>Clients</h4>
    </li>
    <li>
      <h1>80+</h1>
      <h4>Projects</h4>
    </li>
    <li>
      <h1>60+</h1>
      <h4>Employees</h4>
    </li>
    <li>
      <h1>5</h1>
      <h4>Awards Achieved</h4>
    </li>
   </ul>
  </div>  
  )
}

export default ChooseUs