import * as THREE from "three";

/**
 * Removes a previously attached part from its parent and frees
 * GPU/memory resources (geometry) to avoid leaks when parts are
 * swapped repeatedly.
 *
 * NOTE: Materials and textures are intentionally NOT disposed here.
 * GLTF assets commonly share textures/materials between the base
 * model and swappable parts (per our shared materialSlot convention),
 * so disposing them here could invalidate resources still in use
 * elsewhere in the scene. This means we accept a small memory leak
 * on materials/textures for now. Revisit once we have reference
 * counting or a way to know a resource is exclusive to this part.
 */
export function detachPart(part: THREE.Object3D) {
    // Unlink the part from its parent in the scene graph.
    // Optional chaining handles the case where the part was never added, (e.g. already detached, or attach failed silently).
    part.parent?.remove(part);

    // Walk every node under this part — a swappable GLB can contain multiple meshes (e.g. a lid with separate hinge/handle geometry).
    part.traverse((node) => {
        if (node instanceof THREE.Mesh) {
            // Free GPU memory used by the vertex/index buffers.
            // Without this, repeated swaps leak memory over time.
            // Geometry is generally not shared across parts, so this is safe.
            node.geometry?.dispose();
        }
    });
}