import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Sidebar = ({ hand }) => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
      easing: 'ease',
    })
  }, [])

  return (
    <motion.div
      className="hidden md:flex w-[200px] p-5 border-r-8 border-yellow-400 flex-col justify-around fixed bottom-1 top-2 bg-gray-700"
    >
      <div className="mt-[-55px] border-b-2 pb-6">
        <motion.img
          animate={{ rotateY: 0 }}
          initial={{ rotateY: 360 }}
          transition={{ type: 'tween', delay: 4, duration: 0.5 }}
          src="img/vs.jpeg"
          alt="Profile"
          className="rounded-full mx-[-8px] scale-90"
        />
      </div>
      <div className="flex flex-col gap-6">
        {['Home', 'About', 'Projects', 'Skills', 'Contacts'].map((item) => (
          <div
            key={item}
            className="hover:text-yellow-400 cursor-pointer font-semibold flex items-center gap-2"
          >
            <img src="icons/home.svg" alt={item} className="w-5" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="mx-[-10px] flex gap-4">
        {['instagram.png', 'linkedin.png', 'github.png'].map((icon) => (
          <img
            key={icon}
            src={`img/${icon}`}
            alt={icon.split('.')[0]}
            className="w-10 cursor-pointer hover:bg-gray-600 rounded"
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Sidebar