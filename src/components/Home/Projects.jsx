import React, { useState } from 'react'
import { animate, motion } from 'framer-motion'

const Projects = () => {

    const [click,setclick] = useState(false)
    const [click2,setclick2] = useState(0)

    const change = ()=>{
        setclick(pre=>!pre)
        console.log("hi")
    }
   
    const change2 = ()=>{
        setclick2(pre=>!pre)
        setclick(pre=>!pre)
        console.log("hello")
    }

  return (
    <div className='h-[700px] flex justify-around items-center'>
      <div>
        <p className='font-extrabold text-2xl'>Projects</p>
        <p className='block text-3xl font-bold text-[#EBBA18]'>I MADE</p>
        <p className='w-[450px] my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium dolorem cumque delectus excepturi eveniet mollitia quos enim ratione, ab qui?</p>
        <button className='border-2 px-3 pb-1 mt-5 bg-[#EBBA18] text-white rounded-3xl shadow-xl shadow-[#EBBA18] border-[#EBBA18] hover:text-[#EBBA18] hover:bg-white transition-colors duration-700'>Hire Me</button>
      </div>
      <motion.div className={`${click?'relative h-[650px] w-[400px]':'relative'}`} animate={click2?{rotate:360}:''} transition={{duration:2}}>
        <div className={`${click?"":'w-64 h-64 bg-slate-200 rounded-full'}`}></div>
        <div className={`${click?'w-56 h-64 bg-slate-100 border-4 rounded-lg border-[#EBBA18] absolute right-[-20px] duration-1000 top-14':'w-20 h-20 bg-white border-4 border-slate-200 absolute top-[-30px] right-[90px] rounded-full overflow-hidden hover:scale-125 duration-1000'}`}>
            <img src="img/musicapp.png" alt="" className='object-cover w-full h-full cursor-pointer'/>
        </div>
        <div className={`${click?'w-56 h-64 bg-slate-100 border-4 rounded-lg border-[#EBBA18] absolute right-[-20px] duration-1000 bottom-16':'w-20 h-20 bg-white border-4 border-slate-200 absolute top-24 left-[-30px] rounded-full overflow-hidden hover:scale-125 duration-1000'}`}>
            <img src="img/hoc.png" alt="" className='object-cover w-full h-full cursor-pointer'/>
        </div>
        <div className={`${click?'w-56 h-64 bg-slate-100 border-4 rounded-lg border-[#EBBA18] absolute left-[-80px] duration-1000 top-14':'w-20 h-20 bg-white border-4 border-slate-200 absolute right-[90px] bottom-[-30px] rounded-full overflow-hidden hover:scale-125 duration-1000'}`}>
            <img src="img/ecommerce.png" alt="" className='object-cover w-full h-full cursor-pointer'/>
        </div>
        <div className={`${click?'w-56 h-64 bg-slate-100 border-4 rounded-lg border-[#EBBA18] absolute bottom-16 duration-1000 left-[-80px]':'w-20 h-20 bg-white border-4 border-slate-200 absolute right-[-30px] top-24 rounded-full overflow-hidden hover:scale-125 duration-1000'}`}>
            <img src="img/sidebar.png" alt="" className='object-cover w-full h-full cursor-pointer'/>
        </div>
        {
        click?
        <div className='border-2 border-slate-200 right-52 rounded-xl absolute bottom-0 overflow-hidden bg-[#EBBA18] text-white cursor-pointer hover:bg-white hover:text-[#EBBA18] hover:border-[#EBBA18]'>
          <p className='object-cover text-center p-1 px-3' onClick={change2}>Click</p>
        </div>:
        <div className='w-20 h-20 border-2 border-slate-200 absolute right-[90px] top-24 rounded-full overflow-hidden bg-[#EBBA18] text-white cursor-pointer hover:bg-white hover:text-[#EBBA18] hover:border-[#EBBA18] duration-700'>
          <p className='object-cover text-center p-1 px-3 mt-5' onClick={change}>Click</p>
        </div>
        }
      </motion.div>
    </div>
  )
}

export default Projects