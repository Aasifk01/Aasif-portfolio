/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'

const Scene = () => {
    const texture = useTexture('/hero-3d-avatar.png')
    const meshRef = useRef()

    // Removing auto-animation as per user request
    useFrame(() => {
        // Keeping it static or we could add very subtle mouse follow if desired, 
        // but user specifically said "remove extra animation".
    })

    return (
        <>
            {/* Brighten the scene significantly */}
            <ambientLight intensity={1.5} /> 
            <pointLight position={[10, 10, 10]} intensity={2.7} />
            <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} intensity={3} />
            
            {/* Simple, bright circular portrait without extra surrounding effects */}
            <mesh ref={meshRef} position={[0, 0, 0.5]}>
                <circleGeometry args={[2.0, 64]} />
                <meshStandardMaterial 
                    map={texture} 
                    side={THREE.DoubleSide} 
                    roughness={0.2}
                    metalness={0.1}
                    emissive="#ffffff"
                    emissiveIntensity={0.05} 
                />
            </mesh>

            <OrbitControls 
                enableZoom={false} 
                enablePan={false} 
                minPolarAngle={Math.PI / 2.5} 
                maxPolarAngle={Math.PI / 1.5} 
            />
        </>
    )
}

const ThreeDModel = () => {
    return (
        <div className="w-full h-[250px] md:h-[500px] relative cursor-grab active:cursor-grabbing">
            <Canvas>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={35} />
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default ThreeDModel
