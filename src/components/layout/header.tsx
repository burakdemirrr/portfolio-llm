'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface NavItem {
	label: string
	href: string
}

const navItems: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Contact', href: '/contact' }
]

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	
	return (
		<header 
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				isScrolled 
					? 'bg-black/60 backdrop-blur-md py-4 shadow-lg shadow-black/10' 
					: 'bg-transparent py-6'
			}`}
		>
			<div className="container mx-auto px-4 flex justify-between items-center">
				<Link 
					href="/" 
					className="text-2xl font-bold tracking-tighter hover:text-blue-400 transition-colors"
				>
					<motion.span
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center"
					>
						<span className="text-blue-500 mr-1">Portfolio</span>
						<span className="text-glow">3D</span>
					</motion.span>
				</Link>
				
				{/* Desktop Navigation */}
				<motion.nav 
					className="hidden md:flex gap-8"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{navItems.map((item, index) => (
						<motion.div
							key={item.href}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
						>
							<Link
								href={item.href}
								className="text-base text-white/80 hover:text-white transition-colors relative group"
							>
								{item.label}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
							</Link>
						</motion.div>
					))}
				</motion.nav>
				
				{/* Mobile menu button */}
				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					className="md:hidden flex flex-col gap-1.5 p-2"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					<span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
					<span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
					<span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
				</motion.button>
			</div>
			
			{/* Mobile Navigation */}
			<motion.div 
				className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
				initial={{ opacity: 0, height: 0 }}
				animate={{ 
					opacity: isMobileMenuOpen ? 1 : 0,
					height: isMobileMenuOpen ? 'auto' : 0
				}}
				transition={{ duration: 0.3 }}
			>
				<div className="container mx-auto px-4 py-5 bg-black/60 backdrop-blur-md">
					<nav className="flex flex-col gap-4">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-lg text-white/80 hover:text-white py-2 transition-colors"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>
			</motion.div>
		</header>
	)
} 