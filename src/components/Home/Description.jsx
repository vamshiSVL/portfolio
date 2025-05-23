import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Description = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true, easing: 'ease' })
  }, [])

  return (
    <div
      data-aos="fade-up"
      className="max-w-4xl mx-auto my-48 px-6 text-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-yellow-500">About My Portfolio</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Welcome to my personal portfolio—a showcase of my skills, creativity, and dedication in web development and design.
        Through this project, I demonstrate my ability to craft responsive, user-friendly interfaces with modern technologies like React, Tailwind CSS, and animation libraries such as Framer Motion and AOS.
        My portfolio highlights my passion for clean design, smooth user experiences, and continuous learning.
        I invite you to explore my projects, skills, and contact information to see how I can contribute effectively to your team or next exciting project.
      </p>
    </div>
  )
}

export default Description
