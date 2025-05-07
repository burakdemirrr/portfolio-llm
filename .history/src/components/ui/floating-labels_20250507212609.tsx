'use client'

import { motion } from 'framer-motion'

const technologies = [
  { name: 'React', x: -38.2488, y: 28.0107 },
  { name: 'Three.js', x: 14.1403, y: -27.6245 },
  { name: 'WebGL', x: -26.546, y: 2.20522 },
  { name: 'GSAP', x: -6.35694, y: -20.0262 },
  { name: 'Tailwind', x: 18.3007, y: -25.1539 },
  { name: 'TypeScript', x: 28.5843, y: -22.1875 },
  { name: 'Next.js', x: 18.8164, y: 14.2933 }
]

export default function FloatingLabels() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="absolute text-white/20 font-bold text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
          }}
          style={{
            transform: `translateX(${tech.x}%) translateY(${tech.y}%)`
          }}
        >
          {tech.name}
        </motion.div>
      ))}
    </div>
  )
} 