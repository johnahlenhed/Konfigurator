import { describe, it, expect } from "vitest";
import * as THREE from "three";
import { getSocket } from "./getSocket";

describe('getSocket', () => {
    it('returns the node for an existing socket', () => {
        // Build a minimal mock scene — no GLB needed, just a plain THREE.Group with one named child, mimicking what a real loaded model would look like.
        const scene = new THREE.Group();
        const socket = new THREE.Object3D();
        socket.name = 'socketAddon1';
        socket.position.set(5.27, 0.6, 0.02);
        scene.add(socket);

        // Call the function under test with a matching name
        const result = getSocket(scene, 'socketAddon1');
        
        // Confirm the returned position matches what we set on the mock socket
        expect(result.position.x).toBe(5.27);
        expect(result.position.y).toBe(0.6);
        expect(result.position.z).toBe(0.02);
    });

    it('throws for missing socket', () => {
        // Empty scene - no node named "socketMissing" exists
        const scene = new THREE.Group();

        // Should throw a descriptive error rather than failing silently
        expect(() => getSocket(scene, 'socketMissing')).toThrow('Socket socketMissing not found in scene');
    })
})