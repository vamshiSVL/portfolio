import React from 'react'
import { motion } from 'framer-motion'

const Sidebar = () => {
  return (
    <div className='w-[200px] p-5 border-r-8 border-[#EBBA18] flex flex-col justify-around fixed bottom-1 top-2 bg-gray-500'>
      <div className='mt-[-55px] border-b-2 pb-6'>
        <motion.img animate={{rotateY:0}} initial={{rotateY:360}} transition={{type:"tween",delay:4,duration:0.5}} src="img/vs.jpeg" alt="men" className='rounded-full mx-[-8px] scale-90'/>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='hover:text-[#EBBA18] cursor-pointer font-semibold'>
          <img src="icons/home.svg" alt="home" className='w-5 inline mb-2'/><span>Home</span>
        </div>
        <div className='hover:text-[#EBBA18] cursor-pointer font-semibold'>
          <img src="icons/home.svg" alt="home" className='w-5 inline mb-2'/><span>About</span>
        </div>
        <div className='hover:text-[#EBBA18] cursor-pointer font-semibold'>
          <img src="icons/home.svg" alt="home" className='w-5 inline mb-2'/><span>Projects</span>
        </div>
        <div className='hover:text-[#EBBA18] cursor-pointer font-semibold'>
          <img src="icons/home.svg" alt="home" className='w-5 inline mb-2'/><span>Contacts</span>
        </div>
        <div className='hover:text-[#EBBA18] cursor-pointer font-semibold'>
          <img src="icons/home.svg" alt="home" className='w-5 inline mb-2'/><span>Testimonial</span>
        </div>
      </div>
      <div className='mx-[-15px]'>
        <img src="img/instagram.png" alt="" className='w-10 mx-2 inline cursor-pointer hover:bg-gray-400'/>
        <img src="img/linkedin.png" alt="" className='w-10 mx-2 inline cursor-pointer hover:bg-gray-400'/>
        <img src="img/github.png" alt="" className='w-10 mx-1 inline cursor-pointer hover:bg-gray-400'/>
      </div>
    </div>
  ) 
}

export default Sidebar
