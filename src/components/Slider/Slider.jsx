import React, { useRef } from 'react';
import './Slider.css';
import mobileImg1 from '../../assets/mobile1.png'
import mobileImg2 from '../../assets/mobile2.png'
import mobileImg3 from '../../assets/mobile3.png'
import mobileImg4 from '../../assets/mobile4.png'
import mobileImg5 from '../../assets/mobile5.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Slider = () => {
  const slideRef = useRef(null);

  const handleNext = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.appendChild(items[0]);
  };

  const handlePrev = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.prepend(items[items.length - 1]);
  };

  return (
   <div className='slide-container'>
    <div className="container">
      <div className="slide" ref={slideRef}>
        <div className="item" style={{ backgroundImage:`url(${mobileImg1})`}}>
        </div>

        <div className="item" style={{ backgroundImage: `url(${mobileImg2})` }}>
        </div>

        <div className="item" style={{ backgroundImage: `url(${mobileImg3})` }}>   
        </div>

        <div className="item" style={{ backgroundImage: `url(${mobileImg4})` }}>
        </div>

        <div className="item" style={{ backgroundImage: `url(${mobileImg5})`}}>
        </div>
      </div>
      <div className="button">
        <button className="prev" onClick={handlePrev}><IoIosArrowBack  className='arrow-icon' /></button>
        <button className="next" onClick={handleNext}><IoIosArrowForward  className='arrow-icon'/></button>
      </div>
    </div>
    </div> 
  );
};

export default Slider;
