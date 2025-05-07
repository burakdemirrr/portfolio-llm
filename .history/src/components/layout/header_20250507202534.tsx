'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
					? 'bg-black/80 backdrop-blur-sm py-4' 
					: 'bg-transparent py-6'
			}`}
		>
			<div className="container mx-auto px-4 flex justify-between items-center">
				<Link 
					href="/" 
					className="text-2xl font-bold tracking-tighter hover:text-blue-400 transition-colors"
				>
					Portfolio3D
				</Link>
				
				<nav className="flex gap-8">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-base text-white/80 hover:text-white transition-colors"
						>
							{item.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	)
} 