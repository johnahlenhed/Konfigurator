import * as THREE from "three"

export function getSocket(scene: THREE.Object3D, socketName: string) {
    let found = scene.getObjectByName(socketName);

    scene.traverse((node) => {
        if (node.name === socketName) {
            found = node;
        }
    });

    if (!found) {
        console.warn(`Socket ${socketName} not found in scene.`);
        return null;
    }

    return {
        position: found.position.clone(),
        rotation: found.rotation.clone(),
    };
}