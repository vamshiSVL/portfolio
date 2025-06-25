import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('landing')

  const sections = [
    { id: 'landing', label: 'Home', icon: 'home.svg' },
    { id: 'services', label: 'Services', icon: 'home.svg' },
    { id: 'circle', label: 'Circle', icon: 'home.svg' },
    { id: 'projects', label: 'Projects', icon: 'home.svg' },
    { id: 'contacts', label: 'Contacts', icon: 'home.svg' },
    { id: 'description', label: 'About', icon: 'home.svg' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  useEffect(() => {
const handleScroll = () => {
  let current = sections[0].id

  for (const section of sections) {
    const elem = document.getElementById(section.id)
    if (elem) {
      const rect = elem.getBoundingClientRect()
      if (rect.top <= 150) {
        current = section.id
      }
    }
  }

  if (current !== activeSection) {
    setActiveSection(current)
  }
}

    window.addEventListener('scroll', handleScroll)
    handleScroll() // initial check on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection, sections])

  return (
    <motion.div
      className="hidden md:flex w-[200px] p-5 border-r-8 border-yellow-400 flex-col justify-around fixed bottom-1 top-2 bg-blue-600"
    >
      {/* Profile Picture */}
      <div className="flex flex-col items-center border-b border-gray-700 pb-6">
        <motion.img
          animate={{ rotateY: 0 }}
          initial={{ rotateY: 360 }}
          transition={{ type: 'tween', delay: 4, duration: 0.5 }}
          src="img/vs.jpeg"
          alt="Profile"
          className="rounded-full w-28 h-28 object-cover border-4 border-yellow-500"
        />
        <p className="mt-3 text-white font-bold text-lg">Gowni Vamshi</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4 mt-8">
        {sections.map(({ id, label, icon }) => (
          <div
            key={id}
            onClick={
              () => 
                {scrollToSection(id)
                setActiveSection(id)} 
            }
            className={`
              flex items-center gap-3 cursor-pointer
              text-white transition duration-300 px-4 py-3 rounded
              ${activeSection === id ? 'bg-slate-400 text-white font-semibold' : 'hover:text-white hover:bg-yellow-300'}
            `}
          >
            <img src={`icons/${icon}`} alt={label} className="w-5" />
            <span className="text-base">{label}</span>
          </div>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-6 border-t border-gray-700 pt-4">
        {['instagram.png', 'linkedin.png', 'github.png'].map((icon) => (
          <img
            key={icon}
            src={`img/${icon}`}
            alt={icon.split('.')[0]}
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Sidebar