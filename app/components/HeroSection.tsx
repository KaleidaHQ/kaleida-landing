'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const technologies = [
  { name: 'AI', color: '#FF3366', icon: '🤖' },
  { name: 'Blockchain', color: '#00ff9d', icon: '🔗' },
  { name: 'Open Source', color: '#7B42F6', icon: '🌐' },
  { name: 'IoT', color: '#FFC23C', icon: '📡' },
  { name: 'Quantum', color: '#00b4d8', icon: '⚛️' },
  { name: 'AR/VR', color: '#f72585', icon: '🥽' },
]

export default function HeroSection() {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null)

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative tech-tile cursor-pointer bg-deep-space-light rounded-lg overflow-hidden"
            style={{ borderColor: tech.color }}
            onMouseEnter={() => setHoveredTile(index)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="p-4 h-full flex flex-col items-center justify-center text-center">
              <span className="text-4xl mb-2">{tech.icon}</span>
              <h3 className="text-xl font-bold" style={{ color: tech.color }}>{tech.name}</h3>
              <AnimatePresence>
                {hoveredTile === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 text-sm overflow-hidden"
                  >
                    <p>Exploring cutting-edge {tech.name} solutions</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

