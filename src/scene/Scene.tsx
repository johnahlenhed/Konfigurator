import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Model } from './Model'
import { Lighting } from './Lighting'

// OrbitControls only during development, remove for production.
import { Center, OrbitControls } from '@react-three/drei'

export function Scene() {
  return (
    <Canvas>
      <Lighting ambientIntensity={1}/>
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