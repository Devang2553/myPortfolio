
import React from 'react'
import './contact.css'
import Basic from './FormDetail'

const Contact = () => {
  return (
    <div id="contact" className='contact-page'>
        <div className='contact'>
            <div className='contact-heading'>
                <p className='contact-title'>Contact</p>
                <p className='py-6'> Contact me</p>
            </div>
            <div className='form'>
                {/* <form action="https://getform.io/f/d602b2b4-57ec-40ff-b766-9c43e95f9d98" method='POST'>
                    <input type="text" name="name"  className='name'  placeholder='Enter your name'  id="" />
                    <input type="email" name="name" className='email' placeholder='Enter your email' id="" />
                    <textarea name="message" rows="10" className='type-box' placeholder='Enter your text'  ></textarea>
                    <button className='talk'>Let's talk</button>
                    </form> */}
                    <Basic />
            </div>
        </div>
    </div>
  )
}

export default Contact