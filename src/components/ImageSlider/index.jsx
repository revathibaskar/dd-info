import React from 'react';
import './index.css';
import mobileImg1 from '../../assets/mobile1.png';
import mobileImg2 from '../../assets/mobile2.png';
import mobileImg3 from '../../assets/mobile3.png';
import mobileImg4 from '../../assets/mobile4.png';
import mobileImg5 from '../../assets/mobile5.png';

const ImageSlider = () => {
  return (
    <div className="banner">
      <div className="slider" style={{ '--quantity': '5' }}>
        <div className="item" style={{ '--position': '1' }}>
          <img src={mobileImg1} alt="" />
        </div>
        <div className="item" style={{ '--position': '2' }}>
          <img src={mobileImg2} alt="" />
        </div>
        <div className="item" style={{ '--position': '3' }}>
          <img src={mobileImg3} alt="" />
        </div>
        <div className="item" style={{ '--position': '4' }}>
          <img src={mobileImg4} alt="" />
        </div>
        <div className="item" style={{ '--position': '5' }}>
          <img src={mobileImg5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
