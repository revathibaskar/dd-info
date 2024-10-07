import React from 'react'
import { IoMdPlay } from "react-icons/io";
import { RiPlayReverseLargeFill } from "react-icons/ri";
import Form from '../Form'
import './index.css'

const ProjectSection = () => {
  return (
    <div className='project-sec-container'>
      <div className='project-heading-container'>
        <div className='arrow-container'>
        <hr className='heading-hr-line' />
        <IoMdPlay className='arrow-play-icon' />
        </div>
          <h1 className='project-text'>Have a Project</h1>
        <div className='arrow-container'>
          <RiPlayReverseLargeFill className='arrow-play-icon' />
          <hr className='heading-hr-line' />
        </div>
      </div>
      <div className='project-main-container'>
       <div className='project-left-container'>
          <h3>For General Queries Fill This Form Or <br /> Have A Look At 
            End Of The Page For <br /> More Options.
          </h3>
          <div>
          <h2>Start a project</h2>   
          <p>Looking to discuss a project with us?</p>   
         </div>
         <div>
          <h2>Work with us</h2>   
          <p>Do you want to join our Team?</p>   
         </div>
         <h5>Careers</h5>
      </div>
      <Form />
      </div> 
    </div>
 
  )
}

export default ProjectSection