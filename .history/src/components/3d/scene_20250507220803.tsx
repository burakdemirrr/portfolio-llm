'use client'

import { useRef, useEffect, Suspense, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, Float, Preload, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import {  Mesh } from 'three'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

interface SceneProps {
	className?: string
}

function Model() {
	const mesh = useRef<Mesh>(null)
	const [isHovered, setIsHovered] = useState(false)
	
	useFrame((_state, delta) => {
		if (mesh.current) {
			mesh.current.rotation.y += delta * (isHovered ? 0.4 : 0.2)
		}
	})
	
	return (
		<Float 
			speed={1.5} 
			rotationIntensity={0.5} 
			floatIntensity={0.5}
			onPointerOver={() => setIsHovered(true)}
			onPointerOut={() => setIsHovered(false)}
		>
			<mesh ref={mesh} position={[0, 0, 0]}>
				<torusKnotGeometry args={[1, 0.3, 64, 16]} />
				<meshStandardMaterial 
					color="#5686F5"
					roughness={0.1}
					metalness={0.8}
					emissive="#5686F5"
					emissiveIntensity={0.2}
				/>
			</mesh>
		</Float>
	)
}

function CameraController() {
	const { camera } = useThree()
	
	useEffect(() => {
		camera.position.set(0, 0, 5)
	}, [camera])
	
	return null
}

function LoadingFallback() {
	return (
		<div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
			<div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
		</div>
	)
}

export default function Scene({ className }: SceneProps) {
	return (
		<div className={`canvas-container ${className || ''}`}>
			<Canvas
				dpr={[0.5, 1.5]} // More aggressive DPR range for better performance
				performance={{ min: 0.5 }}
				gl={{ 
					antialias: true,
					alpha: true,
					powerPreference: 'high-performance',
					stencil: false,
					depth: true
				}}
			>
				<Suspense fallback={null}>
					<AdaptiveDpr pixelated />
					<AdaptiveEvents />
					<CameraController />
					<OrbitControls 
						enableZoom={false}
						enablePan={false}
						minPolarAngle={Math.PI / 2 - 0.5}
						maxPolarAngle={Math.PI / 2 + 0.5}
						enableDamping={true}
						dampingFactor={0.05}
						rotateSpeed={0.5}
					/>
					<ambientLight intensity={0.5} />
					<spotLight 
						position={[10, 10, 10]} 
						angle={0.15} 
						penumbra={1} 
						intensity={1} 
						castShadow 
					/>
					<pointLight position={[-10, -10, -10]} intensity={1} />
					<Model />
					<Environment preset="city" />
					<EffectComposer enabled={true} multisampling={0}>
						<Bloom 
							luminanceThreshold={0.5}
							luminanceSmoothing={0.9}
							intensity={0.8}
						/>
					</EffectComposer>
					<Preload all />
				</Suspense>
			</Canvas>
		</div>
	)
} 