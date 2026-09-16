type LightingProps = {
  ambientIntensity?: number;
  directionalPosition?: [number, number, number];
  directionalIntensity?: number;
};

export function Lighting({
  ambientIntensity = 0.6,
  directionalPosition = [5, 5, 5],
  directionalIntensity = 1,
}: LightingProps) {
  return (
    <>
      <ambientLight intensity={ambientIntensity} />
      <directionalLight position={directionalPosition} intensity={directionalIntensity} />
    </>
  );
}