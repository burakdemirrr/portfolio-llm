'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function HeroSection() {
	return (
		<section className="min-h-screen flex items-center justify-center relative">
			<div className="container mx-auto px-4 py-32 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-3xl mx-auto text-center"
				>
					<motion.h1 
						className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.8 }}
					>
						Creative 
						<span className="text-blue-500"> 3D </span> 
						Web Developer
					</motion.h1>
					
					<motion.p
						className="text-lg md:text-xl text-white/80 mb-8"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
					>
						Building immersive digital experiences with cutting-edge web technologies.
						Specializing in Three.js, React, and interactive 3D web animations.
					</motion.p>
					
					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6, duration: 0.8 }}
					>
						<Link 
							href="/projects"
							className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
						>
							View Projects
						</Link>
						
						<Link 
							href="/contact"
							className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3 rounded-full font-medium transition-colors"
						>
							Contact Me
						</Link>
					</motion.div>
				</motion.div>
			</div>
			
			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
				<motion.div 
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2, duration: 0.8 }}
					className="flex flex-col items-center"
				>
					<p className="text-sm text-white/60 mb-2">Scroll to explore</p>
					<div className="w-0.5 h-10 bg-white/20 animate-pulse"></div>
				</motion.div>
			</div>
		</section>
	)
} 