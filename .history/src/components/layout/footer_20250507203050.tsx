'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Footer() {
	return (
		<footer className="bg-gradient-to-t from-black/90 to-black/70 backdrop-blur-md py-16 mt-24 relative">
			<div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
			
			<div className="container mx-auto px-4 relative">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<h3 className="text-2xl font-bold mb-5 flex items-center">
							<span className="text-blue-500 mr-1">Portfolio</span>
							<span className="text-glow">3D</span>
						</h3>
						<p className="text-white/70 mb-6 text-lg">
							A showcase of creative 3D web experiences built with Three.js and React.
						</p>
						<div className="flex gap-6">
							<Link 
								href="https://github.com" 
								target="_blank"
								className="text-white/70 hover:text-white transition-colors"
								aria-label="GitHub"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
							</Link>
							<Link 
								href="https://linkedin.com" 
								target="_blank"
								className="text-white/70 hover:text-white transition-colors"
								aria-label="LinkedIn"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
							</Link>
							<Link 
								href="https://twitter.com" 
								target="_blank"
								className="text-white/70 hover:text-white transition-colors"
								aria-label="Twitter"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
							</Link>
						</div>
					</motion.div>
					
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
						className="md:mx-auto"
					>
						<h3 className="text-xl font-bold mb-5">Navigation</h3>
						<ul className="space-y-3">
							<li>
								<Link 
									href="/" 
									className="text-white/70 hover:text-white transition-colors group inline-flex items-center"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
									Home
								</Link>
							</li>
							<li>
								<Link 
									href="/about" 
									className="text-white/70 hover:text-white transition-colors group inline-flex items-center"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
									About
								</Link>
							</li>
							<li>
								<Link 
									href="/projects" 
									className="text-white/70 hover:text-white transition-colors group inline-flex items-center"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
									Projects
								</Link>
							</li>
							<li>
								<Link 
									href="/contact" 
									className="text-white/70 hover:text-white transition-colors group inline-flex items-center"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
									Contact
								</Link>
							</li>
						</ul>
					</motion.div>
					
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<h3 className="text-xl font-bold mb-5">Contact</h3>
						<p className="text-white/70 mb-3 flex items-center">
							<svg className="mr-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
							example@example.com
						</p>
						<p className="text-white/70 flex items-center">
							<svg className="mr-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
							+1 (555) 123-4567
						</p>
					</motion.div>
				</div>
				
				<div className="border-t border-white/10 mt-16 pt-8 text-center text-white/50">
					<p>&copy; {new Date().getFullYear()} Portfolio3D. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
} 