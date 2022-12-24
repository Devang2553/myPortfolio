import React from 'react'
import './experience.css'
import   html  from '../assets/html.svg';
import   css  from '../assets/css.svg';
import   js  from '../assets/js.svg';
import   Node  from '../assets/Node.svg';
import   react  from '../assets/react.svg';
import   Tailwind  from '../assets/Tailwind.svg';
// import   github  from '../assets/github-mark.svg';


const Experience = () => {
    const techs =[
    {
        id:1,
        src:html,
        title: 'HTML',
        style: 'shadow-orange-500 '
    },
    {
        id:2,
        src:css,
        title: 'CSS',
        style: 'shadow-blue-500'
    },
    {
        id:3,
        src:js,
        title: 'JS',
        style: 'shadow-yellow-500'
    },
    {
        id:4,
        src:Node,
        title: 'Node',
        style: 'shadow-green-600'
    },
    {
        id:5,
        src:react,
        title: 'react',
        style: 'shadow-blue-600'
    },
    {
        id:6,
        src:Tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-400'
    },
    // {
    //     id:7,
    //     src:github-mark,
    //     title: 'github',
    //     style: 'shadow-sky-400'
    // },
    ]
  return (
    <div name="experience" className='experience-card'>
        <div className='experience'>
            <div>
                <p className='title'>Experience</p>
                <p className='py-6'>These are the technology i have worked with</p>
            </div>
            <div className='card-section'>
                {
                    techs.map(({id,src,title,style})=>(
                        <div key={id} className={"card"}>
                    <img src={src} alt="" className='work' />

                    <p className='mt-4'>{title}</p>
                </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Experience