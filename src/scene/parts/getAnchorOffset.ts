import * as THREE from "three";

export function getAnchorOffset(root: THREE.Object3D, anchorNodeName: string): THREE.Vector3 | null {
    const anchor = root.getObjectByName(anchorNodeName);
    return anchor ? anchor.position.clone() : null;
}