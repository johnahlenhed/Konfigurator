import * as THREE from "three";

/**
 * Removes a previously attached part from its parent and frees
 * GPU/memory resources (geometry, materials, textures) to avoid
 * leaks when parts are swapped repeatedly.
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
            node.geometry?.dispose();

            // A mesh can have either a single material or an array of materials (multi-slot meshes) — normalize to an array so both cases are handled the same way below.
            // If node.material is an array, keep as it is. If not, convert to array
            const materials = Array.isArray(node.material)
                ? node.material
                : [node.material]

            materials.forEach((mat) => {
                // Textures aren't automatically freed when a material is disposed, so dispose any texture properties on it first.
                Object.values(mat).forEach((value) => {
                    if (value instanceof THREE.Texture) {
                        value.dispose();
                    }
                });
                // Free the material itself
                mat.dispose();
            });
        }
    })
}