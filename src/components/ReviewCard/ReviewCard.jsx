import React from 'react'
import './ReviewCard.css'
import { FaQuoteRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
const ReviewCard = (props) => {
    const {reviewDetail} = props
    const {name,img,review,rating} = reviewDetail

  return (
    <li className='review-li-container'>
        <FaQuoteRight className='quate-icon'/>
        <p>{review}</p>
        <div className='img-review-container'>
            <img src={img} />
            <div>
                <h4>{name}</h4>
                <div>
                <IoIosStar className='star-icon' />
                <IoIosStar className='star-icon'/>
                <IoIosStar className='star-icon'/>
                <IoIosStar className='star-icon'/>
                <IoIosStar className='star-icon'/>
                </div>
            </div>
        </div>
   </li>
  )
}

export default ReviewCard