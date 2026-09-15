import * as THREE from "three"

export function getSocket(scene: THREE.Object3D, socketName: string): THREE.Object3D {
    // Search the entire scene graph for a node with a matching name.
    // Returns the first match, or null if none is found.
    let socket = scene.getObjectByName(socketName);

    // If no node with this name exists — likely a naming mismatch between the code and the exported GLB, or the model hasn't been updated yet.
    if (!socket) {
        throw new Error(`Socket ${socketName} not found in scene.`);
    }
    return socket;
}