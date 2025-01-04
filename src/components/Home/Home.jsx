import React from 'react'
import Services from './Services'
import Circle from './Circle'

const Home = () => {
  return (
    <div className='w-[87%] mx-[200px]'>
      <div className='h-[800px] flex justify-around items-center'>
        <div className='space-y-4'>
          <span className='block text-3xl font-bold'>Hy!</span>
          <span className='text-3xl font-bold'>I'm </span>
          <span className='text-3xl font-extrabold font-serif text-[#EBBA18]'><h1 className='inline'>Vamshi</h1></span>
          <span className='block text-3xl font-extrabold text-[#EBBA18]'>Web developer.</span>
          <p className='mt-2'>FULL STACK WEB DEVELOPER</p>
          <button className='border-2 px-3 pb-1 bg-[#EBBA18] text-white rounded-3xl shadow-xl shadow-[#EBBA18] border-[#EBBA18] hover:text-[#EBBA18] hover:bg-white transition-colors'>Contact</button>
        </div>
        <div className='relative'>
          <img src="img/Vector1.png" alt="" className='w-96'/>
          <img src="img/Vector2.png" alt="" className='w-96 absolute top-0 left-5'/>
          <img src="img/boy.png" alt="" className='absolute top-[-40px] left-9 z-0'/>
          <img src="img/glassesimoji.png" alt="" className='absolute top-[-100px] left-[-130px] w-36'/>
          <button className='rounded-xl px-6 py-3 absolute left-[-60px] mt-2 bg-gray-100'>
            <img src="img/thumbup.png" alt="" className='w-10 inline mr-2'/>
            FULL STACK
          </button>
          <button className='rounded-xl px-6 py-3 absolute top-[-40px] right-[-100px] mt-2 bg-gray-100'>
            <img src="img/crown.png" alt="" className='w-10 inline mr-2'/>
            WEB DEVELOPER
          </button>
        </div>
      </div>
      
      <Services/>

      <Circle/>

    </div>
  )
}
export default Home
