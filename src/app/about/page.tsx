'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'Three.js', level: 90 },
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 85 },
  { name: 'WebGL', level: 80 },
  { name: 'GSAP', level: 85 },
  { name: 'Next.js', level: 90 }
]

const experiences = [
  {
    title: 'Senior 3D Web Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading the development of interactive 3D web applications and experiences.'
  },
  {
    title: 'WebGL Developer',
    company: 'Digital Creations',
    period: '2020 - 2022',
    description: 'Developed immersive 3D product visualizations and interactive experiences.'
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Solutions',
    period: '2018 - 2020',
    description: 'Built responsive web applications with modern JavaScript frameworks.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            About Me
          </h1>
          <p className="text-lg text-white/70">
            A passionate 3D web developer focused on creating immersive digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">{skill.name}</span>
                    <span className="text-white/70">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass-card p-6"
                >
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-blue-400 mb-2">{exp.company}</p>
                  <p className="text-white/50 text-sm mb-3">{exp.period}</p>
                  <p className="text-white/70">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 