import { useAnimations, Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { getMaterials, traverseMeshes } from "../utils/modelHelpers";
import type { ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";
import { animationGroups } from "./animations/animationGroups";
import { applyColorScheme } from "./materials/applyMaterial";
import { baseColorSchemes } from "./materials/colorSchemes";
import { getMaterialName } from "./materials/materialSlots";

type ModelProps = {
  scene: THREE.Object3D;
  animations: THREE.AnimationClip[];
};

export function Model({ scene, animations }: ModelProps) {
  const { actions } = useAnimations(animations, scene);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    traverseMeshes(scene, (mesh) => {
      getMaterials(mesh).forEach((mat) => console.log(mesh.name, mat.name));
    });
    console.log("Available animations: ", Object.keys(actions));
  }, [scene, actions]);

  useEffect(() => {
    Object.values(animationGroups).flat().forEach((clipName) => {
      actions[clipName]?.play();
    });
  }, [actions]);

  return (
    <>
      <primitive
        object={scene}
        onPointerOver={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          if (e.object instanceof THREE.Mesh) setHovered(e.object.name);
        }}
        onPointerOut={() => setHovered(null)}
      />

      <Html fullscreen style={{ pointerEvents: "none" }}>
        <button
          style={{ position: 'absolute', bottom: 50, left: 200, width: 150, height: 40, backgroundColor: '#ff1500', color: 'white', border: 'none', borderRadius: 4, pointerEvents: 'auto' }}
          onClick={() => applyColorScheme(scene, baseColorSchemes.monochrome, getMaterialName)}
        >
          Test: Monochrome
        </button>

        <button
          style={{ position: 'absolute', bottom: 150, left: 200, width: 150, height: 40, backgroundColor: '#1aff00', color: 'white', border: 'none', borderRadius: 4, pointerEvents: 'auto' }}
          onClick={() => applyColorScheme(scene, baseColorSchemes.classic, getMaterialName)}
        >
          Test: Classic Scheme
        </button>
      </Html>

      {hovered && (
        <Html fullscreen>
          <div style={{ position: 'absolute', top: 40, left: 40, color: 'white', background: 'black', padding: '4px 8px' }}>
            {hovered}
          </div>
        </Html>
      )}
    </>
  );
}