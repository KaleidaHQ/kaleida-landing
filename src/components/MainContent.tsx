import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function MainContent() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: 'Our Projects',
      content: (
        <>
          <p className="mb-4">Discover our groundbreaking projects pushing the boundaries of technology.</p>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="/projects/project-a" className="text-neon-pink hover:underline">Project A: AI-driven data analysis</a></li>
            <li><a href="/projects/project-b" className="text-neon-pink hover:underline">Project B: Blockchain for supply chain</a></li>
            <li><a href="/projects/project-c" className="text-neon-pink hover:underline">Project C: IoT ecosystem for smart cities</a></li>
          </ul>
        </>
      ),
      icon: '🚀',
    },
    {
      title: 'Virtual Innovation Hub',
      content: 'Explore our cutting-edge virtual collaboration spaces and digital tools that drive innovation across distributed teams.',
      icon: '💡',
    },
    {
      title: 'Open Source Impact',
      content: (
        <>
          <p className="mb-4">See how our contributions are shaping the future of open source.</p>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="https://github.com/kaleida/project-x" className="text-neon-blue hover:underline">Project X: Distributed computing framework</a></li>
            <li><a href="https://github.com/kaleida/library-y" className="text-neon-blue hover:underline">Library Y: Machine learning toolkit</a></li>
            <li><a href="https://github.com/kaleida/tool-z" className="text-neon-blue hover:underline">Tool Z: Developer productivity suite</a></li>
          </ul>
        </>
      ),
      icon: '🌟',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          {sections.map((section, index) => (
            <motion.button
              key={section.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(index)}
              className={`mx-2 px-4 py-2 rounded-full ${
                activeSection === index
                  ? 'bg-neon-pink text-deep-space font-bold'
                  : 'bg-deep-space-light text-neon-green'
              }`}
            >
              {section.icon} {section.title}
            </motion.button>
          ))}
        </div>
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-deep-space-light p-8 rounded-lg shadow-neon"
        >
          <h2 className="font-['Chakra_Petch'] text-3xl font-bold mb-4 glow-text-pink">
            {sections[activeSection].title}
          </h2>
          <div className="retro-divider mb-4"></div>
          <div className="text-neon-blue">{sections[activeSection].content}</div>
        </motion.div>
      </div>
    </div>
  );
}
