import { describe, it, expect } from "vitest";
import * as THREE from "three";
import { getSocket } from "./getSocket";

describe('getSocket', () => {
    it('returns transform for existing socket', () => {
        const scene = new THREE.Group();
        const socket = new THREE.Object3D();
        socket.name = 'socketLid';
        socket.position.set(0, 1, 0);
        scene.add(socket);

        const result = getSocket(scene, 'socketLid');
        expect(result?.position.y).toBe(1);
    });

    it('returns null and warns for missing socket', () => {
        const scene = new THREE.Group();
        const result = getSocket(scene, 'socketMissing');
        expect(result).toBeNull();
    })
})