import React from 'react'
import "../Experience/Experience.css"
import {BsFillPatchCheckFill} from "react-icons/bs"
import skills from "../../Assets/skills.png"


function Experience() {
  return (
     
    <section id="experience">
      <hr/>
      <h4>What Skills I Have</h4>
      <h2>My Experience</h2>
      <div className="experience_container">
        <img src={skills} className='skills_image' alt='skillsImg'/>
        <div className='experience_content'>
          <article className='experience_details'>
            <BsFillPatchCheckFill className="experience_icons"/>
              <div>
                <h4>HTML</h4>
                <small className='text_align'>Intermediate</small>
              </div>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className="experience_icons"/>
              <div>
                <h4>CSS</h4>
                <small className='text_align'>Basics</small>
              </div>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className="experience_icons"/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text_align'>Basics</small>
              </div>
          </article>
          <article className='experience_details'>
           <BsFillPatchCheckFill className="experience_icons"/>
              <div>
                <h4>BOOTSTRAP</h4>
                <small className='text_align'>Familiar</small>
              </div>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className="experience_icons"/>
              <div>
                <h4>REACT</h4>
                <small className='text_align'>Beginner</small> 
                </div>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className="experience_icons"/>
              <div>
                <h4>SQL</h4>
                <small className='text_align'>Familiar</small>
              </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience