import { useGLTF, Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { getMaterials, traverseMeshes } from "../utils/modelHelpers";
import type { ThreeEvent } from "@react-three/fiber";
import { Mesh } from "three";

const model = "/models/Mixer_firstDraft.glb";

export function Model() {
    const { scene } = useGLTF(model);

    // State to track hovered mesh name for debugging and part tracking purposes
    const [hovered, setHovered] = useState<string | null>(null);

    // Dev logging of mesh names and material names
    useEffect(() => {
        traverseMeshes(scene, (mesh) => {
            // Log array, or single material name
            getMaterials(mesh).forEach((mat) => console.log(mesh.name, mat.name));

            mesh.onBeforeRender = () => {}
        });
    }, [scene]);

    return (
        <>
            <primitive
                object={scene}
                onPointerOver={(e: ThreeEvent<PointerEvent>) => {
                    e.stopPropagation()
                    if (e.object instanceof Mesh) setHovered(e.object.name)
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
    )
}

// Preload to start fetch when model is imported
useGLTF.preload(model);