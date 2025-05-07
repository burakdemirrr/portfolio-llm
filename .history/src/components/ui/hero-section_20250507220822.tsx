'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
	return (
		<section className="min-h-screen flex items-center justify-center relative">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
			
			<div className="container mx-auto px-4 py-32 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-3xl mx-auto text-center"
				>
					<motion.h1 
						className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-glow"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.8 }}
					>
						Creative 
						<span className="text-blue-500"> 3D </span> 
						Web Developer
					</motion.h1>
					
					<motion.p
						className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
					>
						Building immersive digital experiences with cutting-edge web technologies.
						Specializing in Three.js, React, and interactive 3D web animations.
					</motion.p>
					
					<motion.div
						className="flex flex-col sm:flex-row gap-5 justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6, duration: 0.8 }}
					>
						<Link 
							href="/projects"
							className="btn bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors shadow-md shadow-blue-600/20"
						>
							View Projects
						</Link>
						
						<Link 
							href="/contact"
							className="btn bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-medium transition-colors shadow-md"
						>
							Contact Me
						</Link>
					</motion.div>
				</motion.div>
			</div>
			
			{/* Tech tags floating in background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{['React', 'Three.js', 'WebGL', 'GSAP', 'Tailwind', 'TypeScript', 'Next.js'].map((tech) => (
					<motion.div
						key={tech}
						className="absolute text-white/20 font-bold text-xl"
						initial={{ 
							x: Math.random() * 100 - 50 + '%', 
							y: Math.random() * 100 - 50 + '%' 
						}}
						animate={{
							x: [
								Math.random() * 80 - 40 + '%', 
								Math.random() * 80 - 40 + '%', 
								Math.random() * 80 - 40 + '%'
							],
							y: [
								Math.random() * 80 - 40 + '%', 
								Math.random() * 80 - 40 + '%', 
								Math.random() * 80 - 40 + '%'
							]
						}}
						transition={{
							repeat: Infinity,
							repeatType: 'reverse',
							duration: 20 + Math.random() * 10,
							times: [0, 0.5, 1],
							ease: 'easeInOut'
						}}
					>
						{tech}
					</motion.div>
				))}
			</div>
			
			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
				<motion.div 
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2, duration: 0.8 }}
					className="flex flex-col items-center"
				>
					<p className="text-sm text-white/60 mb-2">Scroll to explore</p>
					<div className="w-0.5 h-10 bg-white/20 animate-pulse-slow"></div>
				</motion.div>
			</div>
		</section>
	)
} 