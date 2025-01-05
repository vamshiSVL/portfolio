import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {

    const [click,setclick] = useState(false)
    
    const [cla,setcla] = useState("")

    const change = ()=>{
        setclick(pre=>!pre)
        console.log("hi")
        setcla('bg-red-300')
    }

  return (
    <div className='h-[700px] flex justify-around items-center'>
      <div>
        <p className='font-extrabold text-2xl'>Projects</p>
        <p className='block text-3xl font-bold text-[#EBBA18]'>I MADE</p>
        <p className='w-[450px] my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium dolorem cumque delectus excepturi eveniet mollitia quos enim ratione, ab qui?</p>
        <button className='border-2 px-3 pb-1 mt-5 bg-[#EBBA18] text-white rounded-3xl shadow-xl shadow-[#EBBA18] border-[#EBBA18] hover:text-[#EBBA18] hover:bg-white transition-colors'>Hire Me</button>
      </div>
      <motion.div className='relative' initial={{rotate:180}} whileInView={{rotate:0}} transition={{duration:2}}>
        <div className='w-64 h-64 bg-slate-200 rounded-full'></div>
        <div className='w-20 h-20 bg-white border-4 border-slate-200 absolute top-[-30px] right-[90px] rounded-full overflow-hidden hover:scale-125'>
            <img src="img/musicapp.png" alt="" className='object-cover w-full h-full cursor-pointer'/>
        </div>
        <div className='w-20 h-20 bg-white border-4 border-slate-200 absolute top-24 left-[-30px] rounded-full overflow-hidden hover:scale-125'>
            <img src="img/hoc.png" alt="" className='object-cover w-full h-full cursor-pointer'/>
        </div>
        <div className='w-20 h-20 bg-white border-4 border-slate-200 absolute right-[90px] bottom-[-30px] rounded-full overflow-hidden hover:scale-125'>
            <img src="img/ecommerce.png" alt="" className='object-cover w-full h-full cursor-pointer'/>
        </div>
        <div className='w-20 h-20 bg-white border-4 border-slate-200 absolute right-[-30px] top-24 rounded-full overflow-hidden hover:scale-125'>
            <img src="img/sidebar.png" alt="" className='object-cover w-full h-full cursor-pointer'/>
        </div>
        <div className='w-20 h-20 border-2 border-slate-200 absolute right-[90px] top-24 rounded-full overflow-hidden bg-[#EBBA18] text-white cursor-pointer hover:bg-white hover:text-[#EBBA18] hover:border-[#EBBA18]'>
            <p className='object-cover text-center mt-6' onClick={change}>Click</p>
        </div>
        <p className={cla}>hello</p>
      </motion.div>
    </div>
  )
}

export default Projects