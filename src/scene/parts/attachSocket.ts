import * as THREE from "three";

/**
 * Positions and rotates a swappable part to match a socket's transform.
 * Mutates `part` directly — does not add it to the scene, that's the
 * caller's responsibility (e.g. via scene.add(part) beforehand).
 *
 * @param part - The Object3D (typically a loaded GLB's root) to place
 * @param socket - The target transform, as returned by getSocket()
 */

export function attachSocket(part: THREE.Object3D, socket: { position: THREE.Vector3; rotation: THREE.Euler }) {

    // Copy rather than assign, so we don't accidentally share the same Vector3/Euler instance between socket and part
    part.position.copy(socket.position);
    part.rotation.copy(socket.rotation)
}