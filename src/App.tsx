import React from 'react'
import { Canvas } from '@react-three/fiber'

export function ConfiguratorCanvas() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  )
}