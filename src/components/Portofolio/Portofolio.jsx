import React from 'react'
import "../Portofolio/Portofolio.css"
import IMG1 from "../../Assets/kit.png"
import IMG2 from "../../Assets/vg.png"
import IMG3 from "../../Assets/tin.png"
import IMG4 from "../../Assets/netflix.png"

const data = [
  {
    id: 1,
    image: IMG4,
    title:"Netflix clone project with Api requests to dynamically show movies.",
    github: 'https://github.com/AristeidisA',
    demo: 'https://aristeidisa.github.io/Netflix_Clone_With_Api_Requests/ '
  },
  
  {
    id: 2 ,
    image: IMG2,
    title: 'This is my bands web project, it is updated regurarly.',
    github: 'https://github.com/AristeidisA',
    demo: 'https://aristeidisa.github.io/Vg-Website-Project/'
  }, 
  
  {
    id: 3,
    image: IMG3,
    title: 'This project was made with Bootstrap,Css & HTML.',
    github: 'https://github.com/AristeidisA',
    demo: 'https://aristeidisa.github.io/Web-Dev-Course-Project/'
  },
  
  {
    id: 4,
    image: IMG1,
    title: 'A simple drum-kit project.',
    github: 'https://github.com/AristeidisA',
    demo: 'https://aristeidisa.github.io/Drum-Kit-Game-Project/'
  }
   ]
function Portofolio() {
  return (
    <section id="portofolio">
    <h5>My Recent Work</h5>
    <h2>Portofolio</h2>

    <div className='container portofolio_container'>
     {
       data.map(({id,image,title,github,demo}) => {
        return(
          <article key={id} className='portofolio_items'>
            <div className='portofolio_item_img'>
             <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <a href={github} className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
            <a href={demo} className='btn btn-primary' target="_blank" rel='noopener noreferrer'>Live Demo</a>
          </article>
        )
       }

       )
     }
    </div>
    </section>
  )
}

export default Portofolio 

