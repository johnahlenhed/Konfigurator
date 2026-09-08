import { Canvas } from '@react-three/fiber'

export function Scene() {
    return (
        <Canvas>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1}  />
            <mesh>
            <boxGeometry />
            <meshStandardMaterial />
            </mesh>
        </Canvas>
    )
}