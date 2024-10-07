import React from 'react'
import './index.css'
import UiUxImg from '../../assets/UIUX.svg';
import WebDevImg from '../../assets/WebDev.svg';
import DigMarketImg from '../../assets/DigMarket.svg';
import AppDevImg from '../../assets/AppDev.svg';
import ServiceCard from '../ServiceCard';

const servicesArray = [
    {id:1,fieldName:'UX & UI Design',fieldItems:['Website Design','Prototype','Animation','Wireframes','Case Study'],img:UiUxImg},
    {id:2,fieldName:'Mobile App Development',fieldItems:['Android App Development','iOS App Development','React Native Cross Platform App Develop','Mobile App Support & Maintenance','Flutter Cross Platform App Development'],img:AppDevImg},
    {id:3,fieldName:'Website Development',fieldItems:['Website Development','Software Development','Mobile App Support & Maintenance','Wireframes','ECommerce'],img:WebDevImg},
    {id:4,fieldName:'Digital Marketing Services',fieldItems:['Social Media','Poster & Reels Work','Instagram & Facebook Management','Youtube Videos'],img:DigMarketImg}
]
const ServiceSection = () => {
  return (
   <div className='service-bg'>
    <div class="border-box">
      <h2 class="heading">Our Service</h2>
      <ul className='service-card-ul-container'>
        {servicesArray.map(eachItem => <ServiceCard key={eachItem.id} servicesArrayItem={eachItem} />)}
      </ul>
    </div>
   </div> 
  )
}

export default ServiceSection