import React from 'react'
import navigationBar from '../assets/navigationBar.png'
import './portfolio.css'
import * as ReactDOM from 'react-dom';
// import Nav from '../project/Nav'

const Portfolio = () => {
const portfolios=[
    {
        id:1,
        src:navigationBar
        
    },
    {
        id:2,
        src:navigationBar
    },
    {
        id:3,
        src:navigationBar
    },
    {
        id:4,
        src:navigationBar
    },
    {
        id:5,
        src:navigationBar
    },
    {
        id:6,
        src:navigationBar
    },

]

  return (
    <div id="portfolio" className='portfolio'>
        <div className='all-data'>
            <div className='portfolio-heading'>
                <p className='title'>Portfolio</p>
                <p className='py-6'>Check my work here</p>
            </div>
           
            <div className='card'>
            {
                portfolios.map(({id,src})=> (
                    <div key={id} className='card-details'>
                    <img src={src} alt="projects"  className='navigationBar'/>
                    <div className='card-btn'>
                        <button>Demo</button>
                        <button>Code</button>
                    </div>
                </div>
                ))
            }

                   

            </div>
        </div>
    </div>
  )
}

export default Portfolio