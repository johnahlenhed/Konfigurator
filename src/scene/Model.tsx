import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { getMaterials, traverseMeshes } from "../utils/modelHelpers";
import * as THREE from "three";
import { animationGroups } from "./animations/animationGroups";
import { applyColorScheme } from "./materials/applyMaterial";
import { baseColorSchemes } from "./materials/colorSchemes";
import { getMaterialName } from "./materials/materialSlots";
import { useConfiguratorStore } from "../store/configuratorStore";

type ModelProps = {
  scene: THREE.Object3D;
  animations: THREE.AnimationClip[];
};

export function Model({ scene, animations }: ModelProps) {
  const { actions } = useAnimations(animations, scene);
  const baseColor = useConfiguratorStore((state) => state.selection.baseColor);

  // ONLY IN DEV: Log mesh, materials and animations
  useEffect(() => {
    if (import.meta.env.DEV) {
      traverseMeshes(scene, (mesh) => {
        getMaterials(mesh).forEach((mat) => console.log(mesh.name, mat.name));
      });
      console.log("Available animations: ", Object.keys(actions));
    }
  }, [scene, actions]);

  // Enable cast- and receiveShadow for every mesh
  useEffect(() => {
    traverseMeshes(scene, (mesh) => {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    });
  }, [scene]);

  // Play all animations to animate buttons
  useEffect(() => {
    Object.values(animationGroups)
      .flat()
      .forEach((clipName) => {
        actions[clipName]?.play();
      });
  }, [actions]);

  // Apply selected base color scheme to the model's materials
  useEffect(() => {
    if (!baseColor) return;
    const scheme = baseColorSchemes[baseColor];
    if (!scheme) return;
    applyColorScheme(scene, scheme, getMaterialName);
  }, [scene, baseColor]);

  return (
      <primitive object={scene} />
  );
}
