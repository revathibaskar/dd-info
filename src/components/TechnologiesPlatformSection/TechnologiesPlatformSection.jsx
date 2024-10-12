import React from 'react'
import Ui from '../../assets/Ui.png'
import FrontEnd from '../../assets/FrontEnd.png'
import BackEnd from  '../../assets/BackEnd.png'
import Mble from '../../assets/Mble.png'
import DB from '../../assets/DB.png' 
import './TechnologiesPlatformSection.css'


const TechnologiesPlatformSection= () => {
  const imagesData = [Ui,FrontEnd,BackEnd,DB,Mble]  
return (
   <div className='tech-plat-main-bg'>
    <div className='head-line-container'>
        <h1 className='tech-head'>Technologies & Platforms <span>We Work With</span></h1>
        <hr className='hr-line'/>
    </div>
    <ul className='tech-plat-ul-container'>
        {imagesData.map(each =>  <li>
            <img src={each} className='tech-img'/>
        </li> )}
       
    </ul>
   </div>
  )
}

export default TechnologiesPlatformSection
