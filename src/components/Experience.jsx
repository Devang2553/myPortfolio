import React from 'react'
import './experience.css'
import   {ReactComponent as Html}  from '../assets/Html.svg';
import   {ReactComponent as Css}  from '../assets/CSS3.svg';
import   {ReactComponent as Js}  from '../assets/js.svg';
import   {ReactComponent as Node}  from '../assets/Node.svg';
import   {ReactComponent as Rct}  from '../assets/react.svg';
import   {ReactComponent as Tailwind}  from '../assets/Tailwind.svg';


const Experience = () => {
    const techs =[
    {
        id:1,
        src:<Html className="work "/>,
        title: 'HTML',
        style: 'shadow-orange-500 '
    },
    {
        id:2,
        src:<Css className="work"/>,
        title: 'CSS',
        style: 'shadow-blue-500'
    },
    {
        id:3,
        src:<Js className="work"/>,
        title: 'JS',
        style: 'shadow-yellow-500'
    },
    {
        id:4,
        src:<Node className="work"/>,
        title: 'Node',
        style: 'shadow-green-600'
    },
    {
        id:5,
        src:<Rct className="work"/>,
        title: 'react',
        style: 'shadow-blue-600'
    },
    {
        id:6,
        src:<Tailwind className="work"/>,
        title: 'Tailwind',
        style: 'shadow-sky-400'
    },
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
                        <div key={id} className={"card "}>

                                {src}
                    <p className='mt-4'>{title}</p>
                </div>
                
                    ))
                }
                {/* <div className='work'>
                    svg
                    <p className='mt-4'>work</p>
                </div> */}
                
            </div>
        </div>
    </div>
  )
}

export default Experience