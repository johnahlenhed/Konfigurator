import * as THREE from "three"

export function getSocket(scene: THREE.Object3D, socketName: string) {
    // Search the entire scene graph for a node with a matching name.
    // Returns the first match, or undefined if none is found.
    let found = scene.getObjectByName(socketName);

    scene.traverse((node) => {
        if (node.name === socketName) {
            found = node;
        }
    });

    // If no node with this name exists — likely a naming mismatch between the code and the exported GLB, or the model hasn't been updated yet.
    if (!found) {
        console.warn(`Socket ${socketName} not found in scene.`);
        return null;
    }

    // Return a copy of the transform, not the live object itself.
    // Prevents callers from accidentally mutating the original socket node.
    return {
        position: found.position.clone(),
        rotation: found.rotation.clone(),
    };
}