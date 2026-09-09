import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { getMaterials, traverseMeshes } from "../utils/modelHelpers";

const model = "/models/Mixer_firstDraft.glb";

export function Model() {
    const { scene } = useGLTF(model);

    // Dev logging of mesh names and material names
    useEffect(() => {
        traverseMeshes(scene, (mesh) => {
            // Log array, or single material name
            getMaterials(mesh).forEach((mat) => console.log(mesh.name, mat.name));
        });
    }, [scene]);

    return <primitive object={scene} />

}

// Preload to start fetch when model is imported
useGLTF.preload(model);