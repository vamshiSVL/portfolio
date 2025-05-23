import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contacts = () => {
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 1500, once: true, easing: 'ease' })
  }, [])

  const handleContactClick = () => {
    setShowForm(true)
  }

  return (
    <div
      data-aos="fade-up"
      className="flex h-[700px] w-full max-w-5xl mx-auto mt-20 border-2 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative w-1/2 flex justify-center items-center bg-gray-100">
        <AnimatePresence>
          {!showForm && (
            <motion.img
              key="image"
              src="/img/boy.png"
              alt="Contact"
              className="rounded-lg max-w-full max-h-full object-cover"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showForm && (
            <motion.div
              key="contact-info"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
            >
              <p className="text-lg font-semibold mb-4 cursor-pointer">
                <a
                  href="mailto:vamshigowniv26@gmail.com"
                  className="text-yellow-400 hover:underline"
                >
                  Email: <span className="text-yellow-500">vamshigowniv26@gmail.com</span>
                </a>
              </p>
              <p className="text-lg font-semibold cursor-pointer">
                Phone: <span className="text-yellow-500">+91 6301675616</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10 gap-6">
        {!showForm ? (
          <motion.button
            onClick={handleContactClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full bg-yellow-500 text-white font-bold shadow-lg shadow-yellow-300"
          >
            Contact Me
          </motion.button>
        ) : (
          <motion.form
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-md flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-yellow-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border-2 border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 text-white rounded-md py-2 font-semibold hover:bg-yellow-600 transition-colors"
            >
              Send
            </button>
          </motion.form>
        )}
      </div>
    </div>
  )
}

export default Contacts
