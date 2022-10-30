import React from 'react';
import "../Contact/Contact.css";
import {MdAlternateEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {SiViber} from  "react-icons/si";
import { useRef } from 'react';
import emailjs from "emailjs-com";




function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ypoppdh', 'template_r2vd83e', form.current, 'eOshAkvj1fJY9wFKU')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
    e.target.reset()

    alert("Email sent")
  };
 
  return (
    
    <section id='contacts'>

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdAlternateEmail className='icons'/>
            <h3>Email</h3>
            <h5>aristeidis.andrikopoulos@gmail.com</h5>
            <a href='mailto:aristeidis.andrikopoulos@gmail.com' target="_blank" rel='noopener noreferrer'>Send an Email</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='icons'/>
            <h3>Messenger</h3>
            <h5>Direct Message</h5>
            <a href='https://m.me/arisverm' target="_blank" rel='noopener noreferrer'>Send a DM</a>
          </article>

          <article className='contact_option'>
            <SiViber className='icons'/>
            <h3>Phone</h3>
            <a href="tel:694 812 5663" target="_blank">Call Me</a>
          </article>
        </div>
         
          {/* END OF CONTACT OPTIONS  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required/>
          <input type="email" name="email" placeholder="E-mail"  required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

