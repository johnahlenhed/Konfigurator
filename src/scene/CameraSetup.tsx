// OrbitControls only during development, remove for production.
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

type CameraSetupProps = {
  position?: [number, number, number];
  fov?: number;
  minDistance?: number;
  maxDistance?: number;
  enableOrbit?: boolean;
};

export function CameraSetup({
  position = [-5, 1, 10],
  fov = 45,
  minDistance = 2,
  maxDistance = 10,
  enableOrbit = true,
}: CameraSetupProps) {
  return (
    <>
      {/* Default camera used instead of Canvas built in camera */}
      <PerspectiveCamera makeDefault position={position} fov={fov} />

      {/* OrbitControls only during development, remove for production. */}
      {enableOrbit && (
        <OrbitControls
          enablePan={false} // Prevent object from being dragged out of Canvas
          minDistance={minDistance}
          maxDistance={maxDistance}
          maxPolarAngle={Math.PI / 2} // Prevent rotation to see object from below
        />
      )}
    </>
  );
}
