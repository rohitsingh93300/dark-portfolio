import React from 'react'
import Profile from '../assets/profile.png'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {motion} from 'framer-motion'
// import BG from '../assets/bg.png'
// import Navbar from './Navbar';

const Hero = () => {
    return (
        <section 
        // style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
        id="hero" className="h-screen bg-gradient-to-l from-gray-950 to-gray-950 text-white flex flex-col justify-center items-center relative z-10 ">
            {/* <Navbar/> */}
            {/* <div className='bg-black inset-0 opacity-65 absolute '></div> */}
            <div className='max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between'>
                <div className='space-y-6 px-4'>
                    <motion.h1 
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1, delay:0.2}}
                    className="md:text-6xl text-4xl font-bold mb-4">Hi, I'm <span className='text-blue-400 '>Rohit Singh</span></motion.h1>
                    <motion.p 
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1.2, delay:0.4}}
                    className="md:text-2xl text-lg mb-6">Full-Stack Developer | MERN Stack Enthusiast</motion.p>
                    <motion.p 
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1.4, delay:0.5}}
                    className='lg:w-[600px] text-sm text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam iste ipsa dolores? Voluptas et quae eveniet obcaecati voluptatibus eaque dolorem fugiat labore cumque esse.</motion.p>
                    <motion.button
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1.4, delay:0.5}}
                        href="#projects"
                        className="px-6 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600  shadow-blue-500 border-2  border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]"
                    >
                        Download CV
                    </motion.button>
                    <div className='flex gap-3 text-2xl transition-all'>
                        <FaFacebook className='hover:text-blue-400' />
                        <FaInstagram className='hover:text-blue-400' />
                        <FaLinkedin className='hover:text-blue-400' />
                        <FaSquareXTwitter className='hover:text-blue-400' />
                    </div>
                </div>
                <div className='relative group'>
                    <motion.div 
                    initial={{opacity:0, scale:0.5}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:1.4, delay:0.2}}
                    className='bg-blue-500 md:w-[500px] w-[350px] h-[350px] md:h-[500px] absolute rounded-full blur-lg '></motion.div>
                    <motion.img 
                    initial={{opacity:0, scale:0.5}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:1.4, delay:0}}
                    src={Profile} alt="" className='md:w-[500px] w-[350px]   drop-shadow-2xl ' />
                </div>
            </div>
        </section>
    )
}

export default Hero
