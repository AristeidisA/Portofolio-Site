import React from 'react'
import "../Nav/Nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {SlWallet} from "react-icons/sl"
import {TbMessages} from "react-icons/tb"



function Nav() {
  return (
    <nav>
      <a href='#' className='active'><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUser/> </a>
      <a href='#experience'><BiBook/> </a>
      <a href='#portofolio'><SlWallet/> </a>
      <a href='#contacts'><TbMessages/></a>
    </nav>
  )
}


export default Nav