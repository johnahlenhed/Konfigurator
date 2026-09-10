import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei'
import { Suspense } from 'react'
import { Model } from './Model'
import { Lighting } from './Lighting'
import { CameraSetup } from './CameraSetup'

export function Scene() {
  return (
     <Canvas style={{ width: '100%', height: '100%' }}>
      <Lighting ambientIntensity={1}/>
      <CameraSetup position={[0, 0, 10]} /> {/* Remove position for production */}
      <Suspense fallback={null}>
        <Center>
          <Model />
        </Center>
      </Suspense>
    </Canvas>
  )
}