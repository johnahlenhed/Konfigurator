import * as THREE from "three";

// Returns anchor.position as-is, i.e. local to the anchor's immediate parent.
// That's only correct if `anchorNodeName` is a direct child of `root` (the
// part's GLB scene root) — true for every current _final.glb export, where
// all nodes sit flat at the scene root with no intermediate group/collection
// nodes. If a future re-export nests the anchor under a group, this would
// need to accumulate the offset through that group instead of reading the
// anchor's raw local position.
export function getAnchorOffset(root: THREE.Object3D, anchorNodeName: string): THREE.Vector3 | null {
    const anchor = root.getObjectByName(anchorNodeName);

    // If no node with this name exists — likely a naming mismatch between the code and the exported GLB, or the model hasn't been updated yet.
    if (!anchor) {
        console.warn(`Anchor ${anchorNodeName} not found in part.`);
        return null;
    }

    return anchor.position.clone();
}