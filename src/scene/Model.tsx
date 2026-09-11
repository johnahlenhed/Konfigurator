import { useGLTF, Html } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import { getMaterials, traverseMeshes } from "../utils/modelHelpers";
import type { ThreeEvent } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { Mesh, Texture } from "three";
import { setSlotColor, setSlotTexture, applyColorScheme } from "./materials/applyMaterial";
import { createKTX2Loader } from "./textures/ktx2Loader";
import { baseColorSchemes } from "./materials/colorSchemes";

const model = "/models/Mixer_firstDraft.glb";

export function Model() {
    const { scene } = useGLTF(model);

    // Create a KTX2 loader instance using the WebGL context from useThree
    const { gl } = useThree()
    const loader = useMemo(() => createKTX2Loader(gl), [gl]);
    const [texture, setTexture] = useState<Texture | null>(null);

    // State to track hovered mesh name for debugging and part tracking purposes
    const [hovered, setHovered] = useState<string | null>(null);

    // Load the KTX2 texture when the component mounts
    useEffect(() => {
        loader.load('/textures/placeholder.ktx2', (tex) => {
            // Log the loaded texture and its size for debugging purposes
            console.log('Texture loaded:', tex, 'size:', tex.image?.width, tex.image?.height);
            setTexture(tex);
        });
    }, [loader]);

    // Dev logging of mesh names and material names
    useEffect(() => {
        traverseMeshes(scene, (mesh) => {
            // Log array, or single material name
            getMaterials(mesh).forEach((mat) => console.log(mesh.name, mat.name));
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
            
            { /* Test button to change color of a specific material slot */ }
            <Html fullscreen style={{ pointerEvents: 'none' }}>
                { /* Remove the Html comment below whenever needed */ }
                Hover over parts to see their names in the top left corner. Click the button below to test changing the color of the 'bodyRed' material slot. More info in Model.tsx comments.

                { /*With first draft model naming issues, only part KO_3 will change color with test button */ }
                { /* Expected behavior is that all parts with the same material slot name will change color. */ }
                <button
                    style={{ position: 'absolute', bottom: 50, left: 200, width: 150, height: 40, backgroundColor: '#ff1500', color: 'white', border: 'none', borderRadius: 4, pointerEvents: 'auto' }}
                    onClick={() => setSlotColor(scene, 'bodyRed', '#c33527')}
                >
                    Test: Set Red
                </button>

                { /* Test button to change texture of a specific material slot */ }
                <button
                    style={{ position: 'absolute', bottom: 100, left: 200, width: 150, height: 40, backgroundColor: '#2980B9', color: 'white', border: 'none', borderRadius: 4, pointerEvents: 'auto' }}
                    onClick={() => texture && setSlotTexture(scene, 'bodyRed', texture)}
                >
                    Test: Set Texture
                </button>

                { /* Test button to apply a color scheme */ }
                <button 
                    style={{ position: 'absolute', bottom: 150, left: 200, width: 150, height: 40, backgroundColor: '#1aff00', color: 'white', border: 'none', borderRadius: 4, pointerEvents: 'auto' }}
                    onClick={() => applyColorScheme(scene, baseColorSchemes.ocean)}
                >
                    Test: Ocean Scheme
                </button>
                <button 
                    style={{ position: 'absolute', bottom: 200, left: 200, width: 150, height: 40, backgroundColor: '#00ffea', color: 'white', border: 'none', borderRadius: 4, pointerEvents: 'auto' }}
                    onClick={() => applyColorScheme(scene, baseColorSchemes.sunset)}
                >
                    Test: Sunset Scheme
                </button>
            </Html>

            {/* Display hovered mesh name for debugging and part tracking purposes */}
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
