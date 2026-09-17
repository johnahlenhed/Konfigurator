import { Environment } from "@react-three/drei";

type LightingProps = {
  ambientIntensity?: number;
  directionalPosition?: [number, number, number];
  directionalIntensity?: number;
};

export function Lighting({
  ambientIntensity = 0.3,
  directionalPosition = [6, 8, 5],
  directionalIntensity = 1.5,
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
        shadow-bias={-0.0001}
      />

      <Environment preset="city" environmentIntensity={1.4} />
    </>
  );
}
