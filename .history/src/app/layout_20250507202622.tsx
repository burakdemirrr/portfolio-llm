import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export const metadata = {
	title: 'Portfolio3D - Creative 3D Web Developer',
	description: 'A showcase of creative 3D web experiences built with Three.js and React.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}
