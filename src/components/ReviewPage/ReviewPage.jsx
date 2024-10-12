import React from 'react'
import './ReviewPage.css'
import ReviewCard from '../ReviewCard/ReviewCard';
import boyImage1 from '../../assets/cartoonBoy1.avif' 
import boyImage2 from '../../assets/cartoonBoy2.jpg' 
import girlImage1 from '../../assets/cartoonGirl1.avif' 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const reviewsData = [{
    id:0,name:"Athithan",img:boyImage1,review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptatem rem labore similique, recusandae placeat, accusantium omnis temporibus inventore nemo, esse quae architecto repudiandae debitis numquam autem modi eius accusamus!",rating:5
},{
    id:2,name:"Anukeerthana",img:girlImage1,review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptatem rem labore similique, recusandae placeat, accusantium omnis temporibus inventore nemo, esse quae architecto repudiandae debitis numquam autem modi eius accusamus!",rating:4.5
},{
    id:3,name:"Sundar",img:boyImage2,review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptatem rem labore similique, recusandae placeat, accusantium omnis temporibus inventore nemo, esse quae architecto repudiandae debitis numquam autem modi eius accusamus!",rating:5
}]

const ReviewPage = () => {
  return (
   <>
    <Header />
    <div className='review-page-bg-container'>
        <div className='review-sec-head-container'>
            <h2>See What Our Happy Clients Have to Say</h2>
            <p>We are Committed to Superior Quality</p>
            <hr/>
        </div>
        <ul className='review-card-ul'>
          {reviewsData.map(eachItem => <ReviewCard reviewDetail={eachItem} />)}
        </ul>
    </div>
    <Footer />
    </>
  )
}

export default ReviewPage