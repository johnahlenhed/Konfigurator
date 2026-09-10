import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { getSocket } from "./getSocket";
import { detachPart } from "./detachPart";
import { attachSocket } from "./attachSocket";

// TEMPORARY: hardcoded test parts until real assets + naming convention land
const TEST_PARTS: Record<string, string> = {
    lidWood: '/models/lidWood.glb',
    lidMetal: '/models/lidMetal.glb'
};

type PartSwapProps = {
    scene: THREE.Object3D; // The loaded base model's scene, to find sockets in
    socketName: string; // Example: socketLid
};

export function PartSwap({ scene, socketName }: PartSwapProps) {
    // Which part is currently selected — temporary local state until Zustand store exists to drive this instead.
    // TODO: replace with Zustand store once finished
    const [selectedPart, setSelectedPart] = useState<string>('lidWood');

    // A persistent container that holds whichever part is currently
    // attached. Using a ref (not state) because we're mutating the
    // 3D scene graph directly, not triggering React re-renders.
    const groupRef = useRef(new THREE.Group());

    // Tracks the currently attached part so it can be found and removed before attaching a new one.
    const currentPartRef = useRef<THREE.Object3D | null>(null);

    // Loads the GLB for whichever part is currently selected.
    // Automatically re-loads when `selectedPart` changes.
    const { scene: partScene } = useGLTF(TEST_PARTS[selectedPart]);

    useEffect(() => {
        // Find where this part should be positioned in the base model.
        const socket = getSocket(scene, socketName);
        if(!socket) return;

        // Remove whatever was attached before
        if(currentPartRef.current) {
            detachPart(currentPartRef.current);
            currentPartRef.current = null;
        }

        // Clone the loaded part so each instance is independent — avoids sharing geometry/transform with the cached GLB.
        const clone = partScene.clone();

        // Position and rotate the clone to match the socket's transform.
        attachSocket(clone, socket);

        // Add the newly positioned part into the persistent group, and remember it so it can be removed on the next swap.
        groupRef.current.add(clone);
        currentPartRef.current = clone;

    }, [selectedPart, partScene, scene, socketName])

    return (
        <>
            {/* Renders the group (and whatever part is currently inside it) */}
            <primitive object={groupRef.current} />

            {/* Temporary dev controls, remove once wired to real UI/state */}
            <mesh
                position={[0, 3, 0]}
                onClick={() => 
                    setSelectedPart((prev) => (prev === 'lidWood' ? 'lidMetal' : 'lidWood'))
                }
            >
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial color={"orange"} />
            </mesh>
        </>
    )
}
