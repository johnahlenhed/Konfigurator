import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Model } from './Model'

// OrbitControls only during development, remove for production.
import { Center, OrbitControls } from '@react-three/drei'

export function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Center>
          <Model />
        </Center>
      </Suspense>
      {/* OrbitControls only during development, remove for production. */}
      <OrbitControls />
    </Canvas>
  )
}