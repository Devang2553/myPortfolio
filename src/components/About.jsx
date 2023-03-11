import React from 'react'
import './about.css'

const About = ({data,info}) => {
  return (
    <div id="about" className='about'>
        <div className='about-data '>
            <div className='about-title'>
                <p>{data}</p>
            </div>
            <p className='about-me '>{info}</p>
            
            <p className='about-me2'>{info}</p>
            p
        </div>
    </div>
  )
}

export default About