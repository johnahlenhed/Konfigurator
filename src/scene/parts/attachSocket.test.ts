import { describe, it, expect } from "vitest";
import * as THREE from "three";
import { attachSocket } from "./attachSocket";

describe("attachSocket", () => {
    it("copies socket postition and rotation onto the part", () => {
        // A bare Object3D stands in for a loaded part's root node
        const part = new THREE.Object3D();

        // Mimics the shape returned by getSocket();
        const socket = {
            position: new THREE.Vector3(1, 2, 3),
            rotation: new THREE.Euler(0, Math.PI / 2, 0),
        };

        attachSocket(part, socket);

        // Confirms each axis wass copied correctly
        expect(part.position.x).toBe(1);
        expect(part.position.y).toBe(2);
        expect(part.position.z).toBeCloseTo(3);

        // toBeCloseTo instead of toBe — avoids floating point rounding issues when comparing values involving Math.PI.
        expect(part.rotation.y).toBe(Math.PI / 2);
    })

    it("does not share the same Vector3 instance as the socket", () => {
        const part = new THREE.Object3D();
        const socket = {
            position: new THREE.Vector3(1, 2, 3),
            rotation: new THREE.Euler(0, 0, 0),
        };

        attachSocket(part, socket);

        // Mutate the original socket AFTER attaching, to check whether part.position was a reference to it or an independent copy.
        socket.position.set(9, 9, 9);

         // If .copy() worked correctly, the part is unaffected by this later mutation — catches a regression to `part.position = socket.position`.
        expect(part.position.x).toBe(1);
    })
})