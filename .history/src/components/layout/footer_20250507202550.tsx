'use client'

import Link from 'next/link'

export function Footer() {
	return (
		<footer className="bg-black/70 backdrop-blur-sm py-12 mt-24">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">Portfolio3D</h3>
						<p className="text-white/70 mb-4">
							A showcase of creative 3D web experiences built with Three.js and React.
						</p>
						<div className="flex gap-4">
							<Link 
								href="https://github.com" 
								target="_blank"
								className="text-white/70 hover:text-white transition-colors"
							>
								GitHub
							</Link>
							<Link 
								href="https://linkedin.com" 
								target="_blank"
								className="text-white/70 hover:text-white transition-colors"
							>
								LinkedIn
							</Link>
							<Link 
								href="https://twitter.com" 
								target="_blank"
								className="text-white/70 hover:text-white transition-colors"
							>
								Twitter
							</Link>
						</div>
					</div>
					
					<div>
						<h3 className="text-xl font-bold mb-4">Navigation</h3>
						<ul className="space-y-2">
							<li>
								<Link 
									href="/" 
									className="text-white/70 hover:text-white transition-colors"
								>
									Home
								</Link>
							</li>
							<li>
								<Link 
									href="/about" 
									className="text-white/70 hover:text-white transition-colors"
								>
									About
								</Link>
							</li>
							<li>
								<Link 
									href="/projects" 
									className="text-white/70 hover:text-white transition-colors"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link 
									href="/contact" 
									className="text-white/70 hover:text-white transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					
					<div>
						<h3 className="text-xl font-bold mb-4">Contact</h3>
						<p className="text-white/70 mb-2">example@example.com</p>
						<p className="text-white/70">+1 (555) 123-4567</p>
					</div>
				</div>
				
				<div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
					<p>&copy; {new Date().getFullYear()} Portfolio3D. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
} 