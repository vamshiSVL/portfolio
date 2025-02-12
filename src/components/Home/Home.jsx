import React, { useEffect } from 'react'
import Services from './Services'
import Circle from './Circle'
import Projects from './Projects'
import Contacts from './Contacts'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = ({visible}) => {

      useEffect(() => {
        Aos.init({
          duration: 2500,
          once: false, // Allow animations to trigger every time they come into view
          easing: 'ease',
        });
      }, []);

      const handleScroll = () => {
        Aos.refresh(); // Refresh the AOS animations when user scrolls
      };
  
      // Attach scroll event listener
      window.addEventListener('scroll', handleScroll);

  return (
    <div className='w-[81%] mx-[200px]'>
      <div className='h-[800px] flex justify-around items-center relative'>
        <div className='i absolute text-9xl left-0 top-[50%] text-slate-200 z-[-1]'><h1>GOWNI VAMSHI</h1></div>
        <div className={`${visible?'opacity-0':'opacity-100'} hover:opacity-100 space-y-4`}>
          <span data-aos="fade-left" className='block text-3xl font-bold'>Hy!</span>
          <span className='text-3xl font-bold'>I'm </span>
          <span className='text-3xl font-extrabold font-serif text-[#EBBA18]'><h1 className='inline'>Vamshi</h1></span>
          <span className='block text-3xl font-extrabold text-[#EBBA18]'>Web developer.</span>
          <p className='mt-2'>FULL STACK WEB DEVELOPER</p>
          <button className='border-2 px-3 pb-1 bg-[#EBBA18] text-white rounded-3xl shadow-xl shadow-[#EBBA18] border-[#EBBA18] hover:text-[#EBBA18] hover:bg-white transition-colors duration-700'>Contact</button>
        </div>
        <div className='relative'>
          <img src="img/Vector1.png" alt="" className='w-96'/>
          <img src="img/Vector2.png" alt="" className='w-96 absolute top-0 left-5'/>
          <img src="img/boy.png" alt="" className='absolute top-[-40px] left-9 z-0'/>
          <img data-aos='fade-right' src="img/glassesimoji.png" alt="" className='absolute top-[-100px] left-[-130px] w-36'/>
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

      <Projects/>

      <Contacts/>

    </div>
  )
}
export default Home
