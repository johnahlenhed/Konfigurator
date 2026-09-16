import { useAnimations, Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { getMaterials, traverseMeshes } from "../utils/modelHelpers";
import type { ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";
import { animationGroups } from "./animations/animationGroups";
import { applyColorScheme } from "./materials/applyMaterial";
import { getMaterialName } from "./materials/materialConfig";
import { baseColorSchemes } from "./materials/colorSchemes";
import { useConfiguratorStore } from "../store/configuratorStore";

type ModelProps = {
  scene: THREE.Object3D;
  animations: THREE.AnimationClip[];
};

export function Model({ scene, animations }: ModelProps) {
  const { actions } = useAnimations(animations, scene);
  const [hovered, setHovered] = useState<string | null>(null);
  const baseColor = useConfiguratorStore((state) => state.selection.baseColor);

  useEffect(() => {
      if (import.meta.env.DEV) {
          traverseMeshes(scene, (mesh) => {
              getMaterials(mesh).forEach((mat) => console.log(mesh.name, mat.name));
          });
          console.log("Available animations: ", Object.keys(actions));
      }
  }, [scene, actions]);

  useEffect(() => {
    Object.values(animationGroups).flat().forEach((clipName) => {
      actions[clipName]?.play();
    });
  }, [actions]);

  useEffect(() => {
    if (!baseColor) return;
    const scheme = baseColorSchemes[baseColor];
    if (!scheme) return;
    applyColorScheme(scene, scheme, getMaterialName);
  }, [scene, baseColor]);

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