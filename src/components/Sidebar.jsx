import React from 'react'
import { motion } from 'framer-motion'

const Sidebar = () => {
  return (
    <div className='w-[180px] p-5 bg-red-400 flex flex-col justify-between fixed bottom-1 top-2'>
      <div>
        <motion.img animate={{rotateY:0}} initial={{rotateY:360}} transition={{type:"tween",delay:4,duration:0.5}} src="img/vs.jpeg" alt="men" className='rounded-full scale-90'/>
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
        <button className='border-2 px-3 pb-1 bg-[#EBBA18] text-white rounded-3xl shadow-xl shadow-[#EBBA18] border-[#EBBA18] hover:text-[#EBBA18] hover:bg-white transition-colors'>Contact</button>
      </div>
      <div className='mx-[-15px]'>
        <img src="img/instagram.png" alt="" className='w-10 mx-2 inline cursor-pointer'/>
        <img src="img/linkedin.png" alt="" className='w-10 mx-2 inline cursor-pointer'/>
        <img src="img/github.png" alt="" className='w-10 mx-1 inline cursor-pointer'/>
      </div>
    </div>
  ) 
}

export default Sidebar
