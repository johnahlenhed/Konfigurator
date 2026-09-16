import { Object3D, Mesh, Material } from 'three'

export function traverseMeshes(root: Object3D, callback: (mesh: Mesh) => void) {
    root.traverse((child) => {
        if (child instanceof Mesh) {
            callback(child);
        }
    });
}

export function getMaterials(mesh: Mesh): Material[] {
    return Array.isArray(mesh.material) ? mesh.material : [mesh.material];
}