import { Canvas } from '@react-three/fiber'
import { Center, ContactShadows, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import { Model } from './Model'
import { Lighting } from './Lighting'
import { CameraSetup } from './CameraSetup'
import { PartSwap } from './parts/PartSwap'
import { SOCKET_ADDON_1, SOCKET_ADDON_2 } from './parts/socketNames'

const BASE_MODEL_PATH = '/models/Mixer_final.glb';

function SceneContent() {
  const { scene, animations } = useGLTF(BASE_MODEL_PATH)

  return (
    <>
      {/* Only the base model is centered — its bounding box must stay
          stable regardless of what's currently attached at a socket. */}
      <Center rotation={[0, 0.2, 0]}>
        <Model scene={scene} animations={animations} />
      </Center>

      {/* Addons render OUTSIDE Center, as true siblings. If they were
          inside, a distant or misplaced addon would shift Center's
          bounding-box calculation — which would shift the base model,
          and therefore the sockets, under it. */}
      <Suspense fallback={null}>
        <PartSwap scene={scene} socketName={SOCKET_ADDON_1} addonIndex={0} />
      </Suspense>
      <Suspense fallback={null}>
        <PartSwap scene={scene} socketName={SOCKET_ADDON_2} addonIndex={1} />
      </Suspense>
    </>
  )
}

export function Scene() {
  return (
    <Canvas 
      shadows
      gl={{ antialias: true }}
      onCreated={({ gl }) => { 
        gl.toneMappingExposure = 1.1 
      }}
    >
      <ContactShadows position={[0, -1.23, 0]} opacity={0.6} scale={10} blur={2} far={3} />
      <Lighting />
      <CameraSetup />
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  )
}

useGLTF.preload(BASE_MODEL_PATH)