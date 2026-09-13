import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const ADDON_PARTS: Record<string, string> = {
  option1: "/models/Mixer_option1.glb",
  speaker: "/models/Mixer_speaker.glb",
};

function Addon({ path }: { path: string }) {
  console.log("Addon rendering with path:", path);
  const { scene, animations } = useGLTF(path);

  const cloneRef = useRef<THREE.Object3D | null>(null);
  if (!cloneRef.current) {
    cloneRef.current = scene.clone();
    console.log("cloneRef.current:", cloneRef.current);
    console.log(
      "cloneRef.current.children.length:",
      cloneRef.current.children.length,
    );
    console.log("cloneRef.current.visible:", cloneRef.current.visible);
    console.log("cloneRef.current.parent:", cloneRef.current.parent);
  }

  const { actions } = useAnimations(animations, cloneRef.current);

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

export function AddonSwap() {
  const [selectedAddon, setSelectedAddon] =
    useState<keyof typeof ADDON_PARTS>("option1");

  return (
    <>

      <Addon key={selectedAddon} path={ADDON_PARTS[selectedAddon]} />

      <mesh
        position={[0, 4, 0]}
        onClick={() =>
          setSelectedAddon((prev) =>
            prev === "option1" ? "speaker" : "option1",
          )
        }
      >
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color={"cyan"} />
      </mesh>
    </>
  );
}
