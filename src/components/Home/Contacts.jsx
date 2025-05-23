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
      {/* Left side - Image on md+, Email + phone on md+ or mobile */}
      <div className="relative md:w-1/2 flex justify-center items-center bg-gray-100 p-6">
        {/* Image visible only on md+ */}
        <AnimatePresence>
          {!showForm && (
            <motion.img
              key="image"
              src="/img/boy.png"
              alt="Contact"
              className="rounded-lg max-w-full max-h-full object-cover hidden md:block"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>

        {/* Email and Phone - centered on small screens, left aligned on md+ */}
        <motion.div
          className={`absolute md:static inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 ${
            showForm ? 'opacity-100' : 'opacity-100 md:opacity-0'
          } transition-opacity duration-500`}
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
      </div>

      {/* Right side - form or button */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-10 gap-6">
        {/* On small screens always show form */}
        {window.innerWidth < 768 ? (
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
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  )
}

export default Contacts