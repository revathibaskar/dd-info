import React from 'react'
import { IoMdPlay } from "react-icons/io";
import { RiPlayReverseLargeFill } from "react-icons/ri";
import Form from '../Form/Form'
import './ProjectSection.css'

const ProjectSection = () => {
  return (
    <div className='project-sec-container'>
      <div className='project-head-container'>
        <h1 className='project-head'>Have a <span>Project</span></h1>
        <hr className='hr-line'/>
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