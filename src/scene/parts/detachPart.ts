// src/scene/parts/detachPart.ts
import * as THREE from "three";

/**
 * Removes a previously attached part from its parent.
 *
 * NOTE: Does NOT dispose geometry or materials. Both are commonly
 * shared with the cached original from useGLTF (Object3D.clone()
 * does not deep-clone geometry/material — only new transform nodes
 * are created, referencing the same underlying data). Disposing here
 * would corrupt the shared cache for any other/future use of the
 * same GLB. Since useGLTF's cache is meant to live for the app's
 * lifetime, no manual disposal is needed for GLTF-sourced content.
 */
export function detachPart(part: THREE.Object3D) {
    part.parent?.remove(part);
}