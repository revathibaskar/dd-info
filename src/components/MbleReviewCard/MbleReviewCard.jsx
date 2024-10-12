import React from 'react'
import boyImage1 from '../../assets/cartoonBoy1.avif'  
import girlImage1 from '../../assets/cartoonGirl1.avif' 
import { FaQuoteRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import {Link} from 'react-router-dom'
import './MbleReviewCard.css'

const MbleReviewCard = () => {
    const reviewsData = [{
        id:0,name:"Athithan",img:boyImage1,review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit... ",rating:5
    },{
        id:1,name:"Anukeerthana",img:girlImage1,review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit...",rating:4.5
    }]
  return (
    <ul className='mble-review-ul'>
       <li className='review-li-container'>
        <FaQuoteRight className='quate-icon'/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit  <Link to="/reviewpage" className='remove-line'><span>See More...</span></Link></p>
        <div className='img-review-container'>
            <img src={boyImage1} />
            <div>
                <h4>Athithan</h4>
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
   <li className='review-li-container'>
        <FaQuoteRight className='quate-icon'/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit <Link to="/reviewpage" className='remove-line'><span>See More...</span></Link></p>
        <div className='img-review-container'>
            <img src={girlImage1} />
            <div>
                <h4>Anu</h4>
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
    </ul>
  )
}

export default MbleReviewCard