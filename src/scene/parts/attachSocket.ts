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
    socket: { position: THREE.Vector3; quaternion: THREE.Quaternion }) {

    // Intentionally does NOT copy socket.scale. Empties in the source
    // files have non-uniform baked scale (e.g. [0.64, 0.60, 0.06]) that
    // reflects how large the artist drew the Empty in Blender — not a
    // scale factor meant to apply to attached geometry. Copying it would
    // squash/stretch the part unevenly per axis.
    part.position.copy(socket.position);
    part.quaternion.copy(socket.quaternion)
}