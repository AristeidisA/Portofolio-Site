import React from 'react'
import "../Header/Header.css"
import CTA from "./CTA"
import HeaderSocials from "./HeaderSocials"
import IMG1 from "../../Assets/topImg.png"


function Header() {
  return (
    <header className='container header__container'>
      <h1>Aris Andrikopoulos</h1>
      <h5 className='text-light'>Entry Level Web Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div className='headImg'>
       <img src={IMG1} alt='ProfileImg'></img>
      </div>

      <a href='#contacts' className='scroll_down'>Scroll Down</a>
    </header>
  )
}

export default Header