import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div name="contact" className='contact-page'>
        <div className='contact'>
            <div className='contact-heading'>
                <p className='contact-title'>Contact</p>
                <p className='py-6'> Contact me</p>
            </div>
            <div className='form'>
                <form action="" >
                    <input type="text" name="name"  className='name'  placeholder='Enter your name'  id="" />
                    <input type="email" name="name" className='email' placeholder='Enter your email' id="" />
                    <textarea name="message" rows="10" className='type-box'  ></textarea>
                    <button className='talk'>Let's talk</button>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Contact