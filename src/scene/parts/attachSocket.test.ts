import { describe, it, expect } from "vitest";
import * as THREE from "three";
import { attachSocket } from "./attachSocket";

describe("attachSocket", () => {
    it("copies socket position and rotation onto the part", () => {
        // A bare Object3D stands in for a loaded part's root node
        const part = new THREE.Object3D();

        // Mimics the shape returned by getSocket(); scale.z of 0 keeps this test focused on the base position/rotation copy.
        const socket = {
            position: new THREE.Vector3(1, 2, 3),
            quaternion: new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI / 2, 0)),
            scale: new THREE.Vector3(1, 1, 0),
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
            quaternion: new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI / 2, 0)),
            scale: new THREE.Vector3(1, 1, 0),
        };

        attachSocket(part, socket);

        // Mutate the original socket AFTER attaching, to check whether part.position was a reference to it or an independent copy.
        socket.position.set(9, 9, 9);

         // If .copy() worked correctly, the part is unaffected by this later mutation — catches a regression to `part.position = socket.position`.
        expect(part.position.x).toBe(1);
    })

    it("offsets Z by socket.scale.z, to land on the socket's back face instead of its mid-depth origin", () => {
        const part = new THREE.Object3D();
        const socket = {
            position: new THREE.Vector3(1, 2, 0.0634),
            quaternion: new THREE.Quaternion(),
            scale: new THREE.Vector3(0.64, 0.6, 0.0634),
        };

        attachSocket(part, socket);

        // X/Y are untouched by the scale correction — only Z shifts.
        expect(part.position.x).toBe(1);
        expect(part.position.y).toBe(2);
        expect(part.position.z).toBeCloseTo(0);
    })

    it("applies the back-face offset along the socket's own local Z axis, not world Z", () => {
        const part = new THREE.Object3D();

        // A 90-degree rotation about Y turns the socket's local Z axis into world +X.
        const socket = {
            position: new THREE.Vector3(1, 2, 3),
            quaternion: new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI / 2, 0)),
            scale: new THREE.Vector3(1, 1, 0.5),
        };

        attachSocket(part, socket);

        // The offset shows up on X (the socket's rotated local-Z direction), not Z.
        expect(part.position.x).toBeCloseTo(0.5);
        expect(part.position.y).toBeCloseTo(2);
        expect(part.position.z).toBeCloseTo(3);
    })
})