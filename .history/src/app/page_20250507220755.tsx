'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRef } from 'react'

// Dynamically import heavy components with loading states
const Scene = dynamic(() => import('@/components/3d/scene'), {
	ssr: false,
	loading: () => (
		<div className="h-screen w-full flex items-center justify-center bg-black/50 backdrop-blur-sm">
			<div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
		</div>
	)
})

const HeroSection = dynamic(() => import('@/components/ui/hero-section'), {
	ssr: false,
	loading: () => (
		<div className="h-screen w-full flex items-center justify-center">
			<div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
		</div>
	)
})

const projects = [
	{
		id: 1,
		title: '3D Product Viewer',
		description: 'Interactive 3D product visualization with custom controls and animations.',
		gradient: 'from-blue-500 to-purple-500',
		link: '/projects/3d-product-viewer',
		technologies: ['Three.js', 'React', 'WebGL']
	},
	{
		id: 2,
		title: 'AR Experience',
		description: 'Augmented reality experience for mobile devices using WebXR.',
		gradient: 'from-green-500 to-teal-500',
		link: '/projects/ar-experience',
		technologies: ['WebXR', 'Three.js', 'GSAP']
	},
	{
		id: 3,
		title: '3D Portfolio',
		description: 'Personal portfolio website with 3D elements and animations.',
		gradient: 'from-orange-500 to-red-500',
		link: '/projects/3d-portfolio',
		technologies: ['Next.js', 'Three.js', 'Framer Motion']
	}
]

const skills = [
	{ name: 'Frontend Development', level: 90 },
	{ name: '3D Web Development', level: 85 },
	{ name: 'UI/UX Design', level: 80 },
	{ name: 'Backend Development', level: 75 }
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

const fadeInUpVariants = {
	hidden: { opacity: 0, y: 60 },
	visible: { 
		opacity: 1, 
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.22, 1, 0.36, 1]
		}
	}
}

export default function Home() {
	const projectsRef = useRef(null)
	const skillsRef = useRef(null)
	const ctaRef = useRef(null)
	const { scrollYProgress } = useScroll()
	
	const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px" })
	const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" })
	const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" })

	const projectsY = useTransform(scrollYProgress, [0, 0.3], [0, -100])
	const skillsY = useTransform(scrollYProgress, [0.3, 0.6], [0, -100])
	const ctaY = useTransform(scrollYProgress, [0.6, 0.9], [0, -100])

	return (
		<div className="relative">
			<Scene />
			<HeroSection />
			
			{/* Featured Projects Section */}
			<motion.section 
				ref={projectsRef} 
				className="relative z-10 py-20 px-4"
				style={{ y: projectsY }}
			>
				<div className="container mx-auto">
					<motion.div
						variants={fadeInUpVariants}
						initial="hidden"
						animate={isProjectsInView ? "visible" : "hidden"}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Featured Projects</h2>
						<p className="text-white/70 text-lg max-w-2xl mx-auto">
							Explore my latest work in 3D web development and interactive experiences
						</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={isProjectsInView ? "visible" : "hidden"}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					>
						{projects.map((project, index) => (
							<motion.div
								key={project.id}
								variants={itemVariants}
								className={`group relative overflow-hidden rounded-lg bg-gradient-to-br p-[1px] hover:scale-[1.02] transition-transform duration-300 ${project.gradient}`}
								whileHover={{ 
									scale: 1.02,
									transition: { duration: 0.2 }
								}}
								whileTap={{ scale: 0.98 }}
								custom={index}
							>
								<div className="relative h-full rounded-lg bg-black p-6">
									<motion.h3 
										className="text-xl font-bold mb-2"
										whileHover={{ color: "#60A5FA" }}
									>
										{project.title}
									</motion.h3>
									<p className="text-gray-400 mb-4">{project.description}</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.technologies.map((tech) => (
											<motion.span
												key={tech}
												className="px-2 py-1 text-xs font-medium bg-white/10 rounded-full"
												whileHover={{ 
													scale: 1.05,
													backgroundColor: "rgba(255, 255, 255, 0.2)"
												}}
											>
												{tech}
											</motion.span>
										))}
									</div>
									<Link
										href={project.link}
										className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
									>
										View Project
										<motion.svg
											className="ml-2 w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											whileHover={{ x: 5 }}
											transition={{ type: "spring", stiffness: 400, damping: 10 }}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</motion.svg>
									</Link>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.section>

			{/* Skills Section */}
			<motion.section 
				ref={skillsRef} 
				className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent to-blue-900/10"
				style={{ y: skillsY }}
			>
				<div className="container mx-auto">
					<motion.div
						variants={fadeInUpVariants}
						initial="hidden"
						animate={isSkillsInView ? "visible" : "hidden"}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Skills & Expertise</h2>
						<p className="text-white/70 text-lg max-w-2xl mx-auto">
							Specialized in creating immersive web experiences with modern technologies
						</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={isSkillsInView ? "visible" : "hidden"}
						className="max-w-3xl mx-auto"
					>
						{skills.map((skill, index) => (
							<motion.div
								key={skill.name}
								variants={itemVariants}
								className="mb-8"
								custom={index}
							>
								<div className="flex justify-between mb-2">
									<motion.span 
										className="text-white/90 font-medium"
										whileHover={{ color: "#60A5FA" }}
									>
										{skill.name}
									</motion.span>
									<span className="text-blue-400">{skill.level}%</span>
								</div>
								<div className="h-2 bg-white/10 rounded-full overflow-hidden">
									<motion.div
										className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
										initial={{ width: 0 }}
										animate={{ width: `${skill.level}%` }}
										transition={{ 
											duration: 1.5,
											delay: index * 0.2,
											ease: [0.22, 1, 0.36, 1]
										}}
									/>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.section>

			{/* CTA Section */}
			<motion.section 
				ref={ctaRef} 
				className="relative z-10 py-20 px-4"
				style={{ y: ctaY }}
			>
				<div className="container mx-auto">
					<motion.div
						variants={fadeInUpVariants}
						initial="hidden"
						animate={isCtaInView ? "visible" : "hidden"}
						className="max-w-3xl mx-auto text-center"
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
							Lets Build Something Amazing Together
						</h2>
						<p className="text-white/80 mb-10 text-lg">
							Im always open to discussing new projects, creative ideas or opportunities to be part of your vision.
						</p>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
						>
							<Link
								href="/contact"
								className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all"
							>
								Get In Touch
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</motion.section>
		</div>
	)
}
