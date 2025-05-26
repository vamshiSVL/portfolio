import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Contacts = () => {
  const [showForm, setShowForm] = useState(false)

  const handleContactClick = () => {
    setShowForm(true)
  }

  return (
    <div
      className="flex flex-col md:flex-row h-auto md:h-[700px] max-w-5xl mx-auto mt-20 border-2 rounded-lg overflow-hidden shadow-lg"
      data-aos="fade-up"
    >
      {/* Left side - Contact info */}
      <div className="md:w-1/2 flex flex-col justify-center items-start bg-gray-100 p-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left px-6 w-full"
        >
          <p className="text-lg font-semibold mb-4 cursor-pointer">
            <a
              href="mailto:vamshigowniv26@gmail.com"
              className="text-lg font-semibold border-b-2 border-transparent hover:border-yellow-500 transition-colors duration-300"
            >
              Email: <span className="text-yellow-500">vamshigowniv26@gmail.com</span>
            </a>
          </p>
          <p className="text-lg font-semibold cursor-pointer">
            Phone: <span className="text-yellow-500">+91 6301675616</span>
          </p>
        </motion.div>
      </div>

      {/* Right side - Image + form/button */}
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-white p-6 gap-6 relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {!showForm && (
            <motion.img
              key="image"
              src="/img/boy.png"
              alt="Contact"
              className="rounded-lg max-w-full max-h-96 object-cover mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7 }}
            />
          )}

          {showForm ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
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
          ) : (
            <motion.button
              key="button"
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="px-10 py-3 rounded-full bg-yellow-500 text-white font-bold shadow-lg shadow-yellow-300"
            >
              Contact Me
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Contacts