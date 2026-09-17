import * as THREE from "three";
import { traverseMeshes, getMaterials } from "../../utils/modelHelpers";

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

/**
 * Deep-clones each mesh's material(s) on top of Object3D.clone()'s shallow
 * clone, so this instance's materials are independent and safe to mutate
 * via setSlotColor without affecting other clones or the cached original.
*/

export function cloneWithMaterials(root: THREE.Object3D): THREE.Object3D {
    const clone = root.clone();
    traverseMeshes(clone, (mesh) => {
        const materials = getMaterials(mesh);
        if (materials.length === 0) return;
        mesh.material = materials.length > 1
            ? materials.map((m) => m.clone())
            : materials[0].clone();
    });
    return clone;
}