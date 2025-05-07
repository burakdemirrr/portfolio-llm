import Scene from '@/components/3d/scene'
import HeroSection from '@/components/ui/hero-section'
import { motion } from 'framer-motion'

const projects = [
	{
		id: 1,
		title: 'Interactive Globe Visualization',
		description: 'An interactive 3D globe visualization with custom data points and animations.',
		gradient: 'from-blue-500/30 to-purple-500/30',
		link: '/projects/interactive-globe'
	},
	{
		id: 2,
		title: 'Space Exploration Game',
		description: 'WebGL-powered 3D space exploration game with realistic physics and controls.',
		gradient: 'from-indigo-500/30 to-pink-500/30',
		link: '/projects/space-exploration'
	},
	{
		id: 3,
		title: '3D Product Configurator',
		description: 'Real-time 3D product configurator with customizable materials and lighting.',
		gradient: 'from-emerald-500/30 to-blue-500/30',
		link: '/projects/product-configurator'
	},
	{
		id: 4,
		title: 'Virtual Art Gallery',
		description: 'Immersive virtual art gallery with interactive exhibits and spatial audio.',
		gradient: 'from-orange-500/30 to-red-500/30',
		link: '/projects/virtual-gallery'
	}
]

export default function Home() {
	return (
		<>
			<Scene />
			<div className="content-container">
				<HeroSection />
				
				<section className="py-28 container mx-auto px-4">
					<motion.div 
						className="max-w-5xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true, margin: "-100px" }}
					>
						<h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-glow">
							Featured Projects
						</h2>
						
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
							{projects.map((project, index) => (
								<motion.div 
									key={project.id}
									className="glass-card rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/10"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true, margin: "-50px" }}
									whileHover={{ 
										scale: 1.03,
										transition: { duration: 0.2 }
									}}
								>
									<div className={`h-64 bg-gradient-to-r ${project.gradient} flex items-center justify-center p-8`}>
										<span className="text-2xl font-medium text-white/90">Project {project.id}</span>
									</div>
									<div className="p-8">
										<h3 className="text-2xl font-bold mb-3">
											{project.title}
										</h3>
										<p className="text-white/70 mb-6 text-lg">
											{project.description}
										</p>
										<a 
											href={project.link} 
											className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group"
										>
											View Project 
											<span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
										</a>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</section>
				
				<section className="py-28 bg-gradient-to-b from-transparent to-blue-900/10">
					<motion.div 
						className="container mx-auto px-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true, margin: "-100px" }}
					>
						<div className="max-w-3xl mx-auto text-center">
							<h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">
								Let's Build Something Amazing Together
							</h2>
							<p className="text-white/80 mb-10 text-lg max-w-2xl mx-auto">
								I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
							</p>
							<motion.button 
								className="btn bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-medium transition-colors shadow-lg shadow-blue-600/20"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Get In Touch
							</motion.button>
						</div>
					</motion.div>
				</section>
			</div>
		</>
	)
}
