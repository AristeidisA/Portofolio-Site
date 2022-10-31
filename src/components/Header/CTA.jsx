import React from 'react'
import ArisCv from "../../Assets/ArisCv.pdf"

function CTA() {
  return (
    <div className='cta'>
        <a href={ArisCv} className="btn">Download my CV</a>
        <a href='#contacts' className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA