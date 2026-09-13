import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { Model } from './Model'
import { Lighting } from './Lighting'
import { CameraSetup } from './CameraSetup'
import { AddonSwap } from './parts/addonSwap'

export function Scene() {
  const [ selectedAddon, setSelectedAddon ] = useState<"option1" | "speaker">("option1");

  const toggleAddon = () => {
    setSelectedAddon((prev) => (prev === "option1" ? "speaker" : "option1"));
  }

  return (
    <Canvas>
      <Lighting ambientIntensity={1.5} directionalIntensity={3} directionalPosition={[7, 7, 9]}/>
      <CameraSetup position={[0, 6, 10]} minDistance={19}/>
      <Suspense fallback={null}>
        <Center>
          <AddonSwap selectedAddon={selectedAddon}/>
          <Model onSwapAddon={toggleAddon}/>
        </Center>
      </Suspense>
    </Canvas>
  )
}