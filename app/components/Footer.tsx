'use client'

import { motion } from 'framer-motion'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 retro-wave-footer">
      <div className="max-w-4xl mx-auto text-center relative z-10 bg-deep-space bg-opacity-50 p-8 rounded-lg">
        <div className="flex justify-center space-x-6 mb-6">
          {[FaTwitter, FaGithub, FaLinkedin].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.2, rotate: 15 }}
              className="text-3xl text-neon-blue hover:text-neon-pink transition-colors duration-200"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-neon-green text-deep-space font-bold rounded-full hover:bg-neon-pink hover:text-white transition-colors duration-200 shadow-neon"
        >
          Join Our Mission
        </motion.button>
      </div>
    </footer>
  )
}

