import React from 'react';
import './index.css';
import mobileImg1 from '../../assets/mobile1.png';
import mobileImg2 from '../../assets/mobile2.png';
import mobileImg3 from '../../assets/mobile3.png';
import mobileImg4 from '../../assets/mobile4.png';
import mobileImg5 from '../../assets/mobile5.png';

const ImageSlider2 = () => {
  return (
   <div className='slider-container'>
    <div className='slider'>
    <span style={{ '--i': '1' }}><img src={mobileImg1} alt="Image 1" /></span>
    <span style={{ '--i': '2' }}><img src={mobileImg2} alt="Image 2" /></span>
    <span style={{ '--i': '3' }}><img src={mobileImg3} alt="Image 3" /></span>
    <span style={{ '--i': '4' }}><img src={mobileImg4} alt="Image 4" /></span>
    <span style={{ '--i': '5' }}><img src={mobileImg5} alt="Image 5" /></span>
    <span style={{ '--i': '6' }}><img src={mobileImg1} alt="Image 6" /></span>
    <span style={{ '--i': '7' }}><img src={mobileImg2} alt="Image 7" /></span>
    <span style={{ '--i': '8' }}><img src={mobileImg3} alt="Image 8" /></span>
  </div>
  </div> 
  ) 
};

export default ImageSlider2;
