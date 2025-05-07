import { Scene } from '@/components/3d/scene'
import { HeroSection } from '@/components/ui/hero-section'

export default function Home() {
	return (
		<>
			<Scene />
			<div className="content-container">
				<HeroSection />
				
				<section className="py-24 container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
							Featured Projects
						</h2>
						
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{[1, 2, 3, 4].map((item) => (
								<div 
									key={item} 
									className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transition-transform hover:scale-[1.02]"
								>
									<div className="h-64 bg-gradient-to-r from-blue-500/30 to-purple-500/30 flex items-center justify-center">
										<span className="text-lg font-medium">Project Preview {item}</span>
									</div>
									<div className="p-6">
										<h3 className="text-xl font-bold mb-2">
											3D Project {item}
										</h3>
										<p className="text-white/70 mb-4">
											A creative 3D web experience showcasing interactive animations and immersive environments.
										</p>
										<button className="text-blue-400 hover:text-blue-300 font-medium">
											View Project →
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
				
				<section className="py-24 bg-blue-900/20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center">
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								Let's Build Something Amazing Together
							</h2>
							<p className="text-white/80 mb-8">
								I'm always open to discussing new projects or partnership opportunities.
							</p>
							<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
								Get In Touch
							</button>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
