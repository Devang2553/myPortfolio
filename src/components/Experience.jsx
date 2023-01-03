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
    },
    {
        id:2,
        src:<Css className="work"/>,
        title: 'CSS',
    },
    {
        id:3,
        src:<Js className="work"/>,
        title: 'JS',
    },
    {
        id:4,
        src:<Node className="work"/>,
        title: 'Node',
    },
    {
        id:5,
        src:<Rct className="work"/>,
        title: 'react',
    },
    {
        id:6,
        src:<Tailwind className="work"/>,
        title: 'Tailwind',
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
                    techs.map(({id,src,title})=>(
                        <div key={id} className="card">
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