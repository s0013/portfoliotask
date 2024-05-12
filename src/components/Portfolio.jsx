import React from 'react';
import project1 from '../assets/pro1.png';
import project2 from '../assets/pro2.png';
import project3 from '../assets/pro3.png';
import project4 from '../assets/pro4.png';
import project5 from '../assets/pro5.png';
import project6 from '../assets/pro6.png';
import project7 from '../assets/pro7.png'

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: project1, 
            demo: 'https://taskt-shraddhasonawane.vercel.app/',
            code: 'https://github.com/s0013/taskt'
        },
        {
            id: 2,
            src: project2,
            demo: 'https://taske.vercel.app/',
            code: 'https://github.com/s0013/taske'
        },
        {
            id: 3,
            src: project3,
            demo: 'https://shraddhasonawane-expense-tracker.vercel.app/',
            code: 'https://github.com/s0013/Expense-Tracker'
        },
        {
            id: 4,
            src: project4,
            demo: 'https://invoice1-nine.vercel.app/',
            code: 'https://github.com/s0013/invoice1'
        },
        {
            id: 5,
            src: project5,
            demo: ' https://s0013.github.io/ecom/',
            code: 'https://github.com/s0013/ecom'
        },
        {
            id: 6,
            src: project6,
            demo: 'https://shraddhasonawane-progresss.vercel.app/',
            code: 'https://github.com/s0013/progresss'
        },
        
        {
            id: 7,
            src: project7, 
            demo: ' https://travel-tech-site.netlify.app/',
            code: 'https://github.com/s0013/Travel-Tech-Site'
        },
    ];

    return (
        <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Projects
                    </p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, demo, code }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt='' className="rounded-md duration-200 hover:scale-105" />
                            <div className='flex items-center justify-center'>
                                <a href={demo} target='_blank' rel='noopener noreferrer' className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                                <a href={code} target='_blank' rel='noopener noreferrer' className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
