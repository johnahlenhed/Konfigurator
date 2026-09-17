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

    it("does not dispose geometry on meshes", () => {
        // A real Mesh (not just Object3D) is needed here, since geometry only exists on THREE.Mesh instances.
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial();
        const mesh = new THREE.Mesh(geometry, material);

        // Spy that checks whether .dispose() was called, without needing to inspect internal GPU/memory state directly.
        const disposeGeoSpy = vi.spyOn(geometry, 'dispose');

        detachPart(mesh);

        // Geometry is still shared with useGLTF's cached original (Object3D.clone()
        // doesn't deep-clone it), so disposing it here would corrupt that shared
        // cache. See the NOTE in detachPart.ts.
        expect(disposeGeoSpy).not.toHaveBeenCalled();
    })

    it("disposes materials on meshes", () => {
        // cloneWithMaterials (getAnchorOffset.ts) gives every attached clone its
        // own independent material instances, so disposing them here is safe and
        // expected — unlike geometry, which stays shared.
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial();
        const mesh = new THREE.Mesh(geometry, material);

        const disposeMatSpy = vi.spyOn(material, 'dispose');

        detachPart(mesh);

        expect(disposeMatSpy).toHaveBeenCalled();
    })

    it("disposes every material in a multi-material mesh", () => {
        const geometry = new THREE.BoxGeometry();
        const materials = [new THREE.MeshStandardMaterial(), new THREE.MeshStandardMaterial()];
        const mesh = new THREE.Mesh(geometry, materials);

        const disposeSpies = materials.map((m) => vi.spyOn(m, 'dispose'));

        detachPart(mesh);

        disposeSpies.forEach((spy) => expect(spy).toHaveBeenCalled());
    })
})