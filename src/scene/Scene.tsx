import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei'
import { Suspense } from 'react'
import { Model } from './Model'
import { Lighting } from './Lighting'
import { CameraSetup } from './CameraSetup'

export function Scene() {
  return (
    <Canvas>
      <Lighting ambientIntensity={1.5} directionalIntensity={3} directionalPosition={[7, 7, 9]}/>
      <CameraSetup position={[0, 6, 10]} />
      <Suspense fallback={null}>
        <Center>
          <Model />
        </Center>
      </Suspense>
    </Canvas>
  )
}