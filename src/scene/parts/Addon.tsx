import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

/**
 * Loads the scene from the GLB at the given path.
 * The scene is cloned, and all animation clips are bound to the clone.
 *
 * Each animation clip plays once independently and holds at its final frame.
 *
 * @param path - Path to the GLB file
 * @returns the rendered addon as a Three.js primitive
 */

export function Addon({ path }: { path: string }) {
  // Load scene and animation clips from the GLB at the given path.
  const { scene, animations } = useGLTF(path);

  // Clone scene
  const cloneRef = useRef<THREE.Object3D | null>(null);
  if (!cloneRef.current) {
    cloneRef.current = scene.clone();
  }

  // Bind all animation clips to the cloned object.
  const { actions } = useAnimations(animations, cloneRef.current);

  // Play each animation once and hold at the final frame
  useEffect(() => {
    Object.values(actions).forEach((action) => {
      if (!action) return;
      action?.reset();
      action?.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      action?.play();
    });
  }, [actions]);

  return <primitive object={cloneRef.current} />;
}
