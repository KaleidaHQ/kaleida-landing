import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [glitchEffect, setGlitchEffect] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <header className="text-center py-8 relative">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block"
      >
        <svg
          width="180"
          height="180"
          viewBox="0 0 800 800"
          className={`mx-auto ${glitchEffect ? 'animate-glitch' : ''}`}
        >
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((rotation, index) => (
            <polygon
              key={rotation}
              fill={['#00FFFF', '#FF69B4', '#4169E1'][index % 3]}
              points="400,200 450,400 350,400"
              transform={`rotate(${rotation}, 400, 400)`}
            />
          ))}
        </svg>
      </motion.div>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="font-['Chakra_Petch'] text-4xl mt-4 glow-text-green relative z-10"
      >
        Kaleida
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-xl mt-2 text-neon-blue"
      >
        Technology Incubator & R&D Lab
      </motion.p>
    </header>
  );
}
