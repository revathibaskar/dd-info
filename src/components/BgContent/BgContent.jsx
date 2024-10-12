import React from 'react'
import './BgContent.css'
import main3dVideo from '../../assets/main3dVideo.mp4'
import  MouseIcon from '../MouseIcon/MouseIcon'

const BgContent = () => {
  return (
    <div className='bg-content'>
       {/* mobile view */}

       <div className='mobile-content-video-container'> 
       <video className='mobile-main-bg-video'  autoPlay muted loop >
        <source src={main3dVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>  
      <div className='mobile-content-container' >
        <h1>Develoment Of <span>Mobile Applications</span> <br />
        And <span>Web Services</span> Of Any Complexity
        </h1>
        <p>We create mobile applications for iOS, Android that transfer your business to mobile applications of your customers devices</p>
        <button>Talk to Consultant</button>
      </div>
      </div>

      {/* desktop and laptop view */}
      <div className='content-video-container'>   
      <div className='content-container' >
        <h1>Develoment Of <span>Mobile Applications</span> <br />
        And <span>Web Services</span> Of Any Complexity
        </h1>
        <p>We create mobile applications for iOS, Android that transfer your business to mobile applications of your customers devices</p>
        <button>Talk to Consultant</button>
      </div>
     
      <video className='main-bg-video'  autoPlay muted loop >
        <source src={main3dVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <div className='mouse-logo-container'>
        <MouseIcon />
      </div>
      
     
    </div>
  )
}

export default BgContent