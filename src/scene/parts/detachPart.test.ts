import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { detachPart } from './detachPart';

describe("detachPart", () => {
    it('removes the part from its parent, without disposing shared geometry/materials', () => {
    const scene = new THREE.Group();
    const part = new THREE.Object3D();
    scene.add(part);

    detachPart(part);

    expect(scene.children.includes(part)).toBe(false);
    });
})