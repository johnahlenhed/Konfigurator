import * as THREE from "three";

/**
 * Removes a previously attached part from its parent and frees its materials.
 *
 * Materials only: cloneWithMaterials() (see getAnchorOffset.ts) gives every
 * attached instance its own independent material objects specifically so
 * they can be safely disposed here without affecting anything else. If
 * cloneWithMaterials is ever removed or bypassed for a given clone, this
 * function must not be used on it as-is.
 *
 * Geometry is NOT disposed — Object3D.clone() (used for partScene.clone()
 * inside cloneWithMaterials) does not deep-clone geometry, so a clone's
 * meshes still reference the same BufferGeometry instances as useGLTF's
 * cached original (and any other clone of the same GLB). Disposing them
 * here would corrupt that shared cache.
 */
export function detachPart(part: THREE.Object3D) {
    part.parent?.remove(part);
    part.traverse((node) => {
        if (node instanceof THREE.Mesh) {
            const materials = Array.isArray(node.material) ? node.material : [node.material];
            materials.forEach((m) => m?.dispose());
        }
    });
}