import { Environment } from "@react-three/drei";
import { Component, Suspense, type ReactNode } from "react";

// Environment's HDR fetch throws a real error (not just a loading promise)
// when it fails, so Suspense alone can't stop that from crashing the scene —
// this catches it and drops the environment map instead.
class EnvironmentErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? null : this.props.children;
  }
}

type LightingProps = {
  ambientIntensity?: number;
  directionalPosition?: [number, number, number];
  directionalIntensity?: number;
};

export function Lighting({
  ambientIntensity = 0.3,
  directionalPosition = [5, 6, 18],
  directionalIntensity = 1,
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

      {/* Environment fetches its HDR from drei's CDN — isolate it so a
          slow/blocked/offline request only costs reflections, not the
          ambient/directional lights above or the rest of the scene. */}
      <EnvironmentErrorBoundary>
        <Suspense fallback={null}>
          <Environment preset="city" environmentIntensity={1} />
        </Suspense>
      </EnvironmentErrorBoundary>
    </>
  );
}
