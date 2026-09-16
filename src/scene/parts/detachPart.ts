import * as THREE from "three";

/**
 * Removes a previously attached part from its parent.
 *
 * NOTE: Does NOT dispose geometry, materials, or textures. Parts are
 * created via `partScene.clone()` on a `useGLTF`-loaded scene — Object3D.clone()
 * duplicates the node hierarchy/transforms only, it does NOT deep-clone
 * geometry or materials, so a clone's meshes still reference the same
 * BufferGeometry/Material instances as useGLTF's cached original (and any
 * other clone of the same GLB). Disposing them here would corrupt that
 * shared cache — e.g. reselecting the same model again would render with
 * disposed/empty geometry. Since useGLTF's cache is meant to live for the
 * app's lifetime, no manual disposal is needed for GLTF-sourced content.
 */
export function detachPart(part: THREE.Object3D) {
    part.parent?.remove(part);
}