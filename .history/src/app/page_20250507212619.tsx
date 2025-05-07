'use client'

import { motion, useInView } from 'framer-motion'
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

const FloatingLabels = dynamic(() => import('@/components/ui/floating-labels'), {
	ssr: false
})

const projects = [
	{
		id: 1,
		title: '3D Product Viewer',
		description: 'Interactive 3D product visualization with custom controls and animations.',
		gradient: 'from-blue-500 to-purple-500',
		link: '/projects/3d-product-viewer'
	},
	{
		id: 2,
		title: 'AR Experience',
		description: 'Augmented reality experience for mobile devices using WebXR.',
		gradient: 'from-green-500 to-teal-500',
		link: '/projects/ar-experience'
	},
	{
		id: 3,
		title: '3D Portfolio',
		description: 'Personal portfolio website with 3D elements and animations.',
		gradient: 'from-orange-500 to-red-500',
		link: '/projects/3d-portfolio'
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

export default function Home() {
	const projectsRef = useRef(null)
	const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px" })

	return (
		<div className="relative">
			<Scene />
			<FloatingLabels />
			<HeroSection />
			
			<section ref={projectsRef} className="relative z-10 py-20 px-4">
				<div className="container mx-auto">
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={isProjectsInView ? "visible" : "hidden"}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					>
						{projects.map((project) => (
							<motion.div
								key={project.id}
								variants={itemVariants}
								className={`group relative overflow-hidden rounded-lg bg-gradient-to-br p-[1px] hover:scale-[1.02] transition-transform duration-300 ${project.gradient}`}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<div className="relative h-full rounded-lg bg-black p-6">
									<h3 className="text-xl font-bold mb-2">{project.title}</h3>
									<p className="text-gray-400 mb-4">{project.description}</p>
									<Link
										href={project.link}
										className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
									>
										View Project
										<svg
											className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</Link>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>
		</div>
	)
}
