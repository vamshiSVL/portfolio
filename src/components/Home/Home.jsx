import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Home = () => {

  const [imghover,setimghover] = useState(false)
useEffect(()=>{
  console.log(imghover)
},[imghover])
  return (
  <>
      <div className='flex justify-between'>
        <div className='font-bold text-xl font-mono'>Vamshi</div>
      <div>{imghover} hi</div>
        <div className='flex justify-around gap-5'>
            <div className='hover:text-[#EBBA18] cursor-pointer font-semibold'>Home</div>
            <div className='hover:text-[#EBBA18] cursor-pointer font-semibold'>Services</div>
            <div className='hover:text-[#EBBA18] cursor-pointer font-semibold'>Experience</div>
            <div className='hover:text-[#EBBA18] cursor-pointer font-semibold'>Portfolio</div>
            <div className='hover:text-[#EBBA18] cursor-pointer font-semibold'>Testimonial</div>
            <button className='border-2 px-3 pb-1 bg-[#EBBA18] text-white rounded-3xl shadow-xl shadow-[#EBBA18] border-[#EBBA18] hover:text-[#EBBA18] hover:bg-white transition-colors'>Contact</button>
        </div>
      </div>
      <div className='flex justify-between mt-5'>
        <div className='bg-orange-400 w-1/2'>left</div>
        <div className='bg-red-400 w-1/2'>
          <motion.div whileInView={{x:0}} initial={{x:100}} transition={{type:"tween",duration:imghover ? 1 : 0.3}} className='w-24 rounded-xl cursor-pointer' onClick={()=>setimghover(prev=>!prev)}>
            <img src="img/vs.jpeg" alt="men" className='rounded-full scale-90'/>
          </motion.div>
        </div>
      </div>
  </>
  )
}

export default Home
