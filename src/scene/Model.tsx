import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { getMaterials, traverseMeshes } from "../utils/modelHelpers";
import type { ThreeEvent } from "@react-three/fiber";
import { Mesh } from "three";
import { animationGroups } from "./animations/animationGroups";
import { applyColorScheme } from "./materials/applyMaterial";
import { baseColorSchemes } from "./materials/colorSchemes";
import { getMaterialName } from "./materials/materialSlots";
import { useConfiguratorStore } from "../store/configuratorStore";

const model = "/models/Mixer_fixad.glb";

export function Model() {
  const { scene, animations } = useGLTF(model);
  const { actions } = useAnimations(animations, scene);

  // State to track hovered mesh name for debugging and part tracking purposes
  const [hovered, setHovered] = useState<string | null>(null);

  const baseColor = useConfiguratorStore((state) => state.selection.baseColor);

  // Dev logging of mesh names and material names
  useEffect(() => {
    traverseMeshes(scene, (mesh) => {
      getMaterials(mesh).forEach((mat) => console.log(mesh.name, mat.name));
    });

    console.log("Available animations: ", Object.keys(actions));
  }, [scene, actions]);

  // Play animations automatically
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
          if (e.object instanceof Mesh) setHovered(e.object.name);
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

useGLTF.preload(model);