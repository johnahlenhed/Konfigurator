import { PerspectiveCamera } from "@react-three/drei";

type CameraSetupProps = {
  position?: [number, number, number];
  fov?: number;
};

export function CameraSetup({
  position = [0, 0, 10],
  fov = 20,
}: CameraSetupProps) {
  return (
    <>
      {/* Default camera used instead of Canvas built in camera */}
      <PerspectiveCamera makeDefault position={position} fov={fov} />
    </>
  );
}
