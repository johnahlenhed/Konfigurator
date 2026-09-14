import * as THREE from "three"

export function getSocket(scene: THREE.Object3D, socketName: string) {
    // Search the entire scene graph for a node with a matching name.
    // Returns the first match, or null if none is found.
    let found = scene.getObjectByName(socketName);

    // If no node with this name exists — likely a naming mismatch between the code and the exported GLB, or the model hasn't been updated yet.
    if (!found) {
        console.warn(`Socket ${socketName} not found in scene.`);
        return null;
    }

    const position = new THREE.Vector3();
    const quaternion = new THREE.Quaternion();

    found.getWorldPosition(position);
    found.getWorldQuaternion(quaternion);

    return { position, quaternion };
}