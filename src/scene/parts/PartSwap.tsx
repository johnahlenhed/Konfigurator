import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { getSocket } from "./getSocket";
import { detachPart } from "./detachPart";
import { attachSocket } from "./attachSocket";
import { getAnchorOffset } from "./getAnchorOffset";

const ADDON_PARTS: Record<string, string> = {
    option1: '/models/Mixer_option1_final.glb',
    option2: '/models/Mixer_option2_final.glb',
    speaker: '/models/Mixer_speaker_final.glb',
    speaker2: '/models/Mixer_speaker2_final.glb',
};

const ADDON_KEYS = Object.keys(ADDON_PARTS);

const ANCHOR_NODES: Record<string, string> = {
    option1: 'baseOption1', 
    option2: 'baseOption2',
    speaker: 'baseSpeaker',
    speaker2: 'baseSpeaker2',
}

type PartSwapProps = {
    scene: THREE.Object3D; // The loaded base model's scene, to find sockets in
    socketName: string; // Example: SOCKET_ADDON_1 or SOCKET_ADDON_2, to find the correct socket in the base model
    debugCubePosition?: [number, number, number]; // Dev-only: lets multiple PartSwap instances render non-overlapping test cubes
};

export function PartSwap({ scene, socketName, debugCubePosition = [0, 3, 0] }: PartSwapProps) {
    // Which part is currently selected — temporary local state until Zustand store exists to drive this instead.
    // TODO: replace with Zustand store once finished
    const [selectedPart, setSelectedPart] = useState<string>('option1');

    // A persistent container that holds whichever part is currently
    // attached. Using a ref (not state) because we're mutating the
    // 3D scene graph directly, not triggering React re-renders.
    const groupRef = useRef(new THREE.Group());

    // Tracks the currently attached part so it can be found and removed before attaching a new one.
    const currentPartRef = useRef<THREE.Object3D | null>(null);

    // Loads the GLB for whichever part is currently selected.
    // Automatically re-loads when `selectedPart` changes.
    const { scene: partScene } = useGLTF(ADDON_PARTS[selectedPart]);

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
        const anchorName = ANCHOR_NODES[selectedPart];
        const anchorOffset = anchorName ? getAnchorOffset(clone, anchorName) : null;

        // Position and rotate the clone to match the socket's transform.
        attachSocket(clone, socket);
        if (anchorOffset) {
            // anchorOffset is in the clone's local space, but clone.position is a world-space
            // value — rotate the offset into world space (via the rotation attachSocket just
            // applied) before subtracting, so this still centers correctly on a rotated socket.
            const worldAnchorOffset = anchorOffset.clone().applyQuaternion(clone.quaternion);
            clone.position.sub(worldAnchorOffset); // re-center the whole clone to local origin first
        }

        // Add the newly positioned part into the persistent group, and remember it so it can be removed on the next swap.
        groupRef.current.add(clone);
        currentPartRef.current = clone;


        // Debug: verify the anchor's actual world position after attaching
        if (anchorName) {
            const anchorNode = clone.getObjectByName(anchorName);
            if (anchorNode) {
                const actualWorldPos = new THREE.Vector3();
                anchorNode.getWorldPosition(actualWorldPos);
                console.log('anchor actual world position:', actualWorldPos, 'vs socket:', socket.position);
            }
        }

    }, [selectedPart, partScene, scene, socketName])

    return (
        <>
            {/* Renders the group (and whatever part is currently inside it) */}
            <primitive object={groupRef.current} />

            {/* Temporary dev controls, remove once wired to real UI/state */}
            <mesh
                position={debugCubePosition}
                onClick={() =>
                    setSelectedPart((prev) => {
                        const currentIndex = ADDON_KEYS.indexOf(prev);
                        return ADDON_KEYS[(currentIndex + 1) % ADDON_KEYS.length];
                    })
                }
            >
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial color={"orange"} />
            </mesh>
        </>
    )
}
