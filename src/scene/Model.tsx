import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { getMaterials, traverseMeshes } from "../utils/modelHelpers";
import type { ThreeEvent } from "@react-three/fiber";
import { Mesh } from "three";
import { setSlotColor } from "./materials/applyMaterial";
import { animationGroups } from "./animations/animationGroups";

const model = "/models/Mixer_preview.glb";

export function Model() {
  const { scene, animations } = useGLTF(model);
  const { actions } = useAnimations(animations, scene);

  // State to track hovered mesh name for debugging and part tracking purposes
  const [hovered, setHovered] = useState<string | null>(null);

  // Dev logging of mesh names and material names
  useEffect(() => {
    traverseMeshes(scene, (mesh) => {
      // Log array, or single material name
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

      {/* Test button to change color of a specific material slot */}
      <Html fullscreen style={{ pointerEvents: "none" }}>
        {/* Remove the Html comment below whenever needed */}
        {/* Hover over parts to see their names in the top left corner. Click the button below to test changing the color of the 'bodyRed' material slot. More info in Model.tsx comments. */}

        {/*With first draft model naming issues, only part KO_3 will change color with test button */}
        {/* Expected behavior is that all parts with the same material slot name will change color. */}
          <button
            style={{
              position: "absolute",
              bottom: 50,
              left: 200,
              width: 150,
              height: 40,
              backgroundColor: "#ff1500",
              color: "white",
              border: "none",
              borderRadius: 4,
              pointerEvents: "auto",
            }}
            onClick={() => setSlotColor(scene, "bodyRed", "#c33527")}
          >
            Test: Set Red
          </button>
      </Html>

      {/* Display hovered mesh name for debugging and part tracking purposes */}
      {hovered && (
        <Html fullscreen>
          <div
            style={{
              position: "absolute",
              top: 40,
              left: 40,
              color: "white",
              background: "black",
              padding: "4px 8px",
            }}
          >
            {hovered}
          </div>
        </Html>
      )}
    </>
  );
}

// Preload to start fetch when model is imported
useGLTF.preload(model);
