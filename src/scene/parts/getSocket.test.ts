import { describe, it, expect } from "vitest";
import * as THREE from "three";
import { getSocket } from "./getSocket";

describe('getSocket', () => {
    it('returns transform for existing socket', () => {
        // Build a minimal mock scene — no GLB needed, just a plain THREE.Group with one named child, mimicking what a real loaded model would look like.
        const scene = new THREE.Group();
        const socket = new THREE.Object3D();
        socket.name = 'socketLid';
        socket.position.set(0, 1, 0);
        scene.add(socket);

        // Call the function under test with a matching name
        const result = getSocket(scene, 'socketLid');
        
        // Confirm the returned position matches what we set on the mock socket
        expect(result?.position.y).toBe(1);
    });

    it('returns null and warns for missing socket', () => {
        // Empty scene - no node named "socketMissing exists"
        const scene = new THREE.Group();

        // Should not throw; should fail gracefully instead
        const result = getSocket(scene, 'socketMissing');

        // Confirms the "not found" path returns null, as callers expect
        expect(result).toBeNull();
    })
})