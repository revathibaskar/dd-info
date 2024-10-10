import React from 'react'
import tick from '../../assets/tick.png'
import './index.css'
const ServiceCard = (props) => {
    const {servicesArrayItem} = props
    const {fieldName,fieldItems,img} = servicesArrayItem
  return (
   <>
    <li className='service-card'>
            <div>
                <h2 className='field-head'>{fieldName}</h2>
                <ul className='field-card'>
                    {fieldItems.map(each =>
                    <li className='field-item'>  
                        <img src={tick} className='field-item-icon' />
                        <p className='field-item-head'>{each}</p>
                    </li> )}
                </ul>
            </div>
            <div>
                <img src={img} className='field-img' />
            </div>
        </li>
        <li className='mobile-service-card'>
            <h2 className='mobile-field-head'>{fieldName}</h2>
          <div className='mobile-service-container'>    
            <ul className='field-card'>
                {fieldItems.map(each =>
                <li className='field-item'>  
                    <img src={tick} className='field-item-icon' />
                    <p className='field-item-head'>{each}</p>
                </li> )}
            </ul>
            <div>
                <img src={img} className='field-img' />
            </div>
            </div> 
    </li>
    </> 
  )
}

export default ServiceCard