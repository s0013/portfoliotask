import React from 'react';
import HeroImage from '../assets/imagenew.png';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Self-motivated individual seeking a position where I can apply my technical expertise and leverage my
            excellent academic background to foster personal growth and gain valuable experience.
          </p>
          <div style={{ width: '110px' }}>
            <Link to='projects' 
            smooth duration={500} 
            className='group text-white px-4 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer'>
              Project <span className='group-hover:rotate-90 duration-300'><RiArrowRightSLine size={25} className='ml-1' /></span></Link>
            
          </div>
          </div>
        <div>
        <img
  src={HeroImage}
  alt='my-profile'
  className='rounded-full mx-auto w-2/3 md:w-full 
             border-4 border-transparent 
             border-blue-500 
             transition duration-500 ease-in-out
             transform hover:-translate-y-1 hover:scale-110
             z-10
             '
/>

        </div>
      </div>
    </div>
  );
};

export default Home;