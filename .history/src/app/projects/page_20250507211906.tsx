'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Interactive Globe Visualization',
    description: 'An interactive 3D globe visualization with custom data points and animations.',
    gradient: 'from-blue-500/30 to-purple-500/30',
    link: '/projects/interactive-globe',
    technologies: ['Three.js', 'React', 'WebGL', 'GSAP']
  },
  {
    id: 2,
    title: 'Space Exploration Game',
    description: 'WebGL-powered 3D space exploration game with realistic physics and controls.',
    gradient: 'from-indigo-500/30 to-pink-500/30',
    link: '/projects/space-exploration',
    technologies: ['Three.js', 'Cannon.js', 'React', 'TypeScript']
  },
  {
    id: 3,
    title: '3D Product Configurator',
    description: 'Real-time 3D product configurator with customizable materials and lighting.',
    gradient: 'from-emerald-500/30 to-blue-500/30',
    link: '/projects/product-configurator',
    technologies: ['Three.js', 'React', 'Tailwind CSS', 'WebGL']
  },
  {
    id: 4,
    title: 'Virtual Art Gallery',
    description: 'Immersive virtual art gallery with interactive exhibits and spatial audio.',
    gradient: 'from-orange-500/30 to-red-500/30',
    link: '/projects/virtual-gallery',
    technologies: ['Three.js', 'React', 'Web Audio API', 'GSAP']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function ProjectsPage() {
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
            Featured Projects
          </h1>
          <p className="text-lg text-white/70">
            Explore my latest work in 3D web development and interactive experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass-card rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center p-8`}>
                <span className="text-2xl font-medium text-white/90">{project.title}</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-white/70 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group"
                >
                  View Project
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 