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

    it("does not dispose geometry or material on meshes", () => {
        // A real Mesh (not just Object3D) is needed here, since geometry/material only exist on THREE.Mesh instances.
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial();
        const mesh = new THREE.Mesh(geometry, material);

        // Spies that check whether .dispose() was called, without needing to inspect internal GPU/memory state directly.
        const disposeGeoSpy = vi.spyOn(geometry, 'dispose');
        const disposeMatSpy = vi.spyOn(material, 'dispose');

        detachPart(mesh);

        // Geometry and materials are commonly shared with useGLTF's cached original
        // (Object3D.clone() doesn't deep-clone them), so disposing either here would
        // corrupt that shared cache. See the NOTE in detachPart.ts.
        expect(disposeGeoSpy).not.toHaveBeenCalled();
        expect(disposeMatSpy).not.toHaveBeenCalled();
    })
})