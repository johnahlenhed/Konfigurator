import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import { getMaterials, traverseMeshes } from "../utils/modelHelpers";
import type { ThreeEvent } from "@react-three/fiber";
import { Mesh, Texture } from "three";
import { animationGroups } from "./animations/animationGroups";
import { useThree } from "@react-three/fiber";
import { setSlotTexture, applyColorScheme } from "./materials/applyMaterial";
import { createKTX2Loader } from "./textures/ktx2Loader";
import { baseColorSchemes } from "./materials/colorSchemes";

const model = "/models/Mixer_preview.glb";

export function Model() {
  const { scene, animations } = useGLTF(model);
  const { actions } = useAnimations(animations, scene);

  // KTX2 texture loading setup
  const { gl } = useThree();
  const loader = useMemo(() => createKTX2Loader(gl), [gl]);
  const [texture, setTexture] = useState<Texture | null>(null);

  // State to track hovered mesh name for debugging and part tracking purposes
  const [hovered, setHovered] = useState<string | null>(null);

  // Load the KTX2 texture when the component mounts
  useEffect(() => {
    loader.load('/textures/placeholder.ktx2', (tex) => {
      console.log('Texture loaded:', tex, 'size:', tex.image?.width, tex.image?.height);
      setTexture(tex);
    });
  }, [loader]);

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

      <Html fullscreen style={{ pointerEvents: "none" }}>
        <button
          style={{ position: 'absolute', bottom: 50, left: 200, width: 150, height: 40, backgroundColor: '#ff1500', color: 'white', border: 'none', borderRadius: 4, pointerEvents: 'auto' }}
          onClick={() => applyColorScheme(scene, baseColorSchemes.monochrome)}
        >
          Test: Monochrome
        </button>

        <button
          style={{ position: 'absolute', bottom: 100, left: 200, width: 150, height: 40, backgroundColor: '#2980B9', color: 'white', border: 'none', borderRadius: 4, pointerEvents: 'auto' }}
          onClick={() => texture && setSlotTexture(scene, 'gain', texture)}
        >
          Test: Set Texture
        </button>

        <button
          style={{ position: 'absolute', bottom: 150, left: 200, width: 150, height: 40, backgroundColor: '#1aff00', color: 'white', border: 'none', borderRadius: 4, pointerEvents: 'auto' }}
          onClick={() => applyColorScheme(scene, baseColorSchemes.classic)}
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

useGLTF.preload(model);