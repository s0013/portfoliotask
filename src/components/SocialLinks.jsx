import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {

    const links = [
        {
            id: 0,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} className='w-6' />
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 1,
            child: (
                <>
                    Github <FaGithub size={30} className='w-6' />
                </>
            ),
            href: 'https://github.com',

        },
        {
            id: 2,
            child: (
                <>
                    Mail <HiOutlineMail size={30} className='w-6' />
                </>
            ),
            href: 'mailto:shrusonawane7@gmail.com',
            
        },
        {
            id: 3,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} className='w-6' />
                </>
            ),
            href: '/Resume1.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ];

    return (
        <div className='flex flex-col items-end lg:items-start fixed top-[30rem] left-[-15px] lg:left-auto lg:top-[40%] lg:pt-0 sm:pt-10'>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
                        <a href={href}
                            className='flex justify-between items-center w-full text-white'
                            download={download}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
