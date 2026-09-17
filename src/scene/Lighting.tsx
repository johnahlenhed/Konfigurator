import { Environment } from "@react-three/drei";

type LightingProps = {
  ambientIntensity?: number;
  directionalPosition?: [number, number, number];
  directionalIntensity?: number;
};

export function Lighting({
  ambientIntensity = 0.3,
  directionalPosition = [10, 10, 7],
  directionalIntensity = 2,
}: LightingProps) {
  return (
    <>
      <ambientLight intensity={ambientIntensity} />
      <directionalLight
        castShadow
        position={directionalPosition}
        intensity={directionalIntensity}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <Environment preset="city" environmentIntensity={1} />
    </>
  );
}
