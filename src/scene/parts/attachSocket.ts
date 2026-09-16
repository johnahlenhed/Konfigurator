import * as THREE from "three";

/**
 * Positions and rotates a swappable part to match a socket's transform.
 * Mutates `part` directly — does not add it to the scene, that's the
 * caller's responsibility (e.g. via scene.add(part) beforehand).
 *
 * @param part - The Object3D (typically a loaded GLB's root) to place
 * @param socket - The target transform, as returned by getSocket()
 */

export function attachSocket(
    part: THREE.Object3D,
    socket: { position: THREE.Vector3; quaternion: THREE.Quaternion; scale: THREE.Vector3 }) {

    // Intentionally does NOT apply socket.scale to X/Y. Empties in the
    // source files have non-uniform baked scale (e.g. [0.64, 0.60, 0.06])
    // that reflects how large the artist drew the Empty in Blender — not
    // a scale factor meant to stretch attached geometry.
    part.position.copy(socket.position);
    part.quaternion.copy(socket.quaternion);

    // Z is different: socket.position.z is consistently ~equal to
    // socket.scale.z (verified on emptyUp/emptyDown in Mixer_final.glb),
    // meaning the empty's origin sits at mid-depth of the socket recess,
    // not on its back/mounting face. Parts are authored with their
    // anchor node flush at local Z=0, so shift back by scale.z to land
    // parts on that back face instead of floating scale.z units proud of it.
    // Shifted along the socket's own local Z axis (via its quaternion),
    // not world Z, so this still holds if a socket is ever non-axis-aligned.
    const backFaceOffset = new THREE.Vector3(0, 0, socket.scale.z).applyQuaternion(socket.quaternion);
    part.position.sub(backFaceOffset);
}