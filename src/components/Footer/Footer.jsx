import React from 'react'
import "../Footer/Footer.css"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"


export default function Footer() {
  

  return (
    <footer>
      <a href='#' className='footer_logo'>Aris Andrikopoulos</a>
      <ul className="permalinks">
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#experience">Experience</a></li>
        <li> <a href="#portofolio">Portofolio</a></li>
        <li> <a href="#contacts">Contact</a></li>
      </ul>

      <div className='socials'>
       <a href="https://github.com/AristeidisA" target="_blank"><BsGithub/></a>
       <a href="https://www.linkedin.com/in/aristeidis-andrikopoulos-535900229/" target="_blank"><BsLinkedin/></a>
      </div>

      <div className='footer_copyright'>
       <p>A.A. {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
