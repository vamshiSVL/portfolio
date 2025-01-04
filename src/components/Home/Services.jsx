import React from 'react'

const Services = () => {
  return (
    <div className='flex justify-around h-[700px]'>
      <div>
        <h3 className='font-extrabold text-2xl'>My Awesome</h3>
        <span className='block text-3xl font-bold text-[#EBBA18]'>Services.</span>
        <p className='w-[500px] my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam error minus quas
           modi sunt rerum aliquid libero, soluta dicta fugit possimus tenetur mollitia iusto
           autem tempore, magni ex eaque!
        </p>
        <button className='border-2 px-3 pb-1 mt-5 bg-[#EBBA18] text-white rounded-3xl shadow-xl shadow-[#EBBA18] border-[#EBBA18] hover:text-[#EBBA18] hover:bg-white transition-colors'>Download CV</button>
      </div>
      <div className='relative'>
        <div className='w-56 h-64 bg-slate-100 border-4 rounded-lg border-[#EBBA18] absolute left-[-150px] flex flex-col justify-center items-center gap-2 p-5'>
          <img src="img/glasses.png" alt="" className='w-24 h-24'/>
          <p className='font-bold'>Developer</p>
          <p>
            Html,Css,javaScript,React, Nodejs, Express etc..
          </p>
          <button className='border-2 bg-white px-2 py-1 rounded-lg text-blue-400 hover:text-white hover:bg-[#EBBA18]'>LEARN MORE</button>
        </div>
        <div className='w-56 h-64 border-4 bg-slate-100 rounded-lg border-[#EBBA18] absolute left-[-500px] top-60 flex flex-col justify-center items-center gap-2 p-5'>
          <img src="img/heartemoji.png" alt="" className='w-24 h-24'/>
          <p className='font-bold'>Design</p>
          <p>
            YouTube,Amazon,RPS etc..
          </p>
          <button className='border-2 bg-white px-2 py-1 rounded-lg text-blue-400 hover:text-white hover:bg-[#EBBA18]'>LEARN MORE</button>
        </div>
        <div className='w-56 h-64 border-4 bg-slate-100 rounded-lg border-[#EBBA18] absolute top-96 left-[-200px] flex flex-col justify-center items-center gap-2 p-5'>
          <img src="img/humble.png" alt="" className='w-24 h-24'/>
          <p className='font-bold'>UI/UX</p>
          <p>
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className='border-2 bg-white px-2 py-1 rounded-lg text-blue-400 hover:text-white hover:bg-[#EBBA18]'>LEARN MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Services
