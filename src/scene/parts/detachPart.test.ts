import { describe, it, expect, vi } from 'vitest';
import * as THREE from 'three';
import { detachPart } from './detachPart';

describe("detachPart", () => {
    it("removes the part from its parent", () => {
        // A minimal parent-child relationship, like a part attached inside the scene via attachSocket + scene.add().
        const scene = new THREE.Group();
        const part = new THREE.Object3D();
        scene.add(part);

        detachPart(part);

        // Confirms the part is no longer among the scene's children — i.e. it won't render or be traversed anymore.
        expect(scene.children.includes(part)).toBe(false);
    });

    it("disposes geometry and material on meshes", () => {
        // A real Mesh (not just Object3D) is needed here, since disposal logic only runs on nodes that are instances of THREE.Mesh.
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial();
        const mesh = new THREE.Mesh(geometry, material);

        // Spies that check whether .dispose() was actually called, without needing to inspect internal GPU/memory state directly.
        const disposeGeoSpy = vi.spyOn(geometry, 'dispose');
        const disposeMatSpy = vi.spyOn(material, 'dispose');

        detachPart(mesh);

        // Confirms both geometry and material cleanup ran — the core guarantee this function exists to provide (no memory leaks).
        expect(disposeGeoSpy).toHaveBeenCalled();
        expect(disposeMatSpy).toHaveBeenCalled();
    })
})