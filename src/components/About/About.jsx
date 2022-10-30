import React from 'react'
import "./About.css"
import {FaAward} from "react-icons/fa"
import {RiFoldersFill} from "react-icons/ri"
import coding from "../../Assets/coding.png"
function About() {
  return (
  <section id="about">
    <h5>Get To Know Me</h5>
    <h2>About Me</h2>

    <div className='container about_container'>
      <div className='about_me'>
        <div className='about_image'>
         <img src={coding} alt="tagImg"/>
        </div>
      </div>
      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h4>Experience</h4>
            <small>No work experience yet</small>
          </article>

          <article className='about_card'>
            <RiFoldersFill className='about_icon'/>
            <h4>Projects</h4>
            <small>At least 5 completed and some ongoing</small>
          </article>
        </div>
          <p> Looking forward to deepen my knowledge on Front-End Development,
              engage with challenging projects and develop best practices for Web
              applications.
              Technical and customer support background, collaborative work ethic
              and teamwork spirit. Excellent communication, organization and time
              management skills.
              Have worked in busy, pressurized environments where high standards
              are expected.
              Always looking to learn new skills and grow professionally.
          </p>
          <a href='#contacts' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  </section>
  )
}

export default About