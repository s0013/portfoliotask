import React from 'react'
import html from "../assets/html.png"
import react from "../assets/React.png"
import angular from "../assets/Angular.png"
import css from "../assets/css.png"
import sql from "../assets/sql.png"
import git from "../assets/git.png"
import power from "../assets/Microsoft-Power-BI-Symbol.png"
import javas from "../assets/JavaScript-logo.png"
import tailw from "../assets/png-transparent-tailwind-css-hd-logo.png"


const Experience = () => {


const techs = [
    {
        id:1,
        src:html,
        title:'HTML',
        style: 'shadow-orange-500'
    },
    {
        id:2,
        src: css,
        title:'CSS',
        style: 'shadow-orange-500'
    },
    {
        id:3,
        src: javas,
        title:'JavaScriptL',
        style: 'shadow-orange-500'
    },
    {
        id:4,
        src: react,
        title:'ReactJS',
        style: 'shadow-orange-500'
    },
    {
        id:5,
        src: angular,
        title:'AngularJS',
        style: 'shadow-orange-500'
    },
    {
        id:6,
        src:sql,
        title:'SQL',
        style: 'shadow-orange-500'
    },
    {
        id:7,
        src:power,
        title:'PowerBI',
        style: 'shadow-orange-500'
    },
    {
        id:8,
        src:git,
        title:'Git',
        style: 'shadow-orange-500'
    },
    {
        id:9,
        src:tailw,
        title:'Tailwind',
        style:'shadow-orange-500'
    },
]

  return (
    <div name='experience' className=' bg-gradient-to-b from-gray-800 to to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

            {
                techs.map(({id,src,title,style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 rounded-lg ${style}`}>
    <img src={src} alt='' className='w-20 mx-auto'/>
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