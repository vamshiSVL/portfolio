import React, { useEffect } from 'react'
import Services from './Services'
import Circle from './Circle'
import Projects from './Projects'
import Contacts from './Contacts'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'

const Home = ({ visible }) => {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      once: false,
      easing: 'ease',
    })
  }, [])

  return (
    <motion.div 
      className='w-full px-6 md:w-[81%] md:mx-[200px] overflow-hidden'
      style={{ minHeight: '120vh', paddingBottom: '150px' }}
    >
      {/* Landing */}
      <section id="landing" className='h-[800px] flex flex-col md:flex-row justify-around items-center relative'>

        <motion.div
          initial={{ x: -500 }}
          animate={{ x: [-500, 1300] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeIn" }}
          className='absolute text-6xl md:text-9xl left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 top-[50%] text-slate-200 z-[-1] whitespace-nowrap'
        >
          <h1>GOWNI VAMSHI</h1>
        </motion.div>

        <div data-aos="fade-left" className={`${visible ? 'opacity-0' : 'opacity-100'} hover:opacity-100 space-y-4 z-10`}>
          <span className='block text-3xl font-bold'>Hy!</span>
          <span className='text-3xl font-bold'>I'm </span>
          <span data-aos="fade-down" className='text-3xl font-extrabold font-serif text-[#EBBA18]'>
            <h1 className='inline'>Vamshi</h1>
          </span>
          <span className='block text-3xl font-extrabold text-[#EBBA18]'>Web developer.</span>
          <p className='mt-2'>FULL STACK WEB DEVELOPER</p>
          <button className='border-2 px-3 pb-1 bg-[#EBBA18] text-white rounded-3xl shadow-xl shadow-[#EBBA18] border-[#EBBA18] hover:text-[#EBBA18] hover:bg-white transition-colors duration-700'>Contact</button>
        </div>

        <div className='relative hidden md:block'>
          <img data-aos='fade-down' src="img/Vector1.png" alt="" className='w-96' />
          <img data-aos='fade-down' src="img/Vector2.png" alt="" className='w-96 absolute top-0 left-5' />
          <img data-aos='fade-down' src="img/boy.png" alt="" className='absolute top-[-40px] left-9 z-0' />
          <img data-aos='fade-right' src="img/glassesimoji.png" alt="" className='absolute top-[-100px] left-[-130px] w-36' />
          <button data-aos='fade-right' className='rounded-xl px-6 py-3 absolute left-[-60px] mt-2 bg-gray-100'>
            <img src="img/thumbup.png" alt="" className='w-10 inline mr-2' />
            FULL STACK
          </button>
          <button data-aos='fade-left' className='rounded-xl px-6 py-3 absolute top-[-40px] right-[-100px] mt-2 bg-gray-100'>
            <img src="img/crown.png" alt="" className='w-10 inline mr-2' />
            WEB DEVELOPER
          </button>
        </div>
      </section>

      {/* Services */}
      <section id="services" data-aos="fade-up">
        <Services />
      </section>

      {/* Circle */}
      <section id="circle" data-aos="fade-up">
        <Circle />
      </section>

      {/* Projects */}
      <section id="projects" data-aos="fade-up">
        <Projects />
      </section>

      {/* Contacts */}
      <section id="contacts" data-aos="fade-up">
        <Contacts />
      </section>
    </motion.div>
  )
}

export default Home