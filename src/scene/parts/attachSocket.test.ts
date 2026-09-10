import { describe, it, expect } from "vitest";
import * as THREE from "three";
import { attachSocket } from "./attachSocket";

describe("attachSocket", () => {
    it("copies socket postition and rotation onto the part", () => {
        const part = new THREE.Object3D();
        const socket = {
            position: new THREE.Vector3(1, 2, 3),
            rotation: new THREE.Euler(0, Math.PI / 2, 0),
        };

        attachSocket(part, socket);

        expect(part.position.x).toBe(1);
        expect(part.position.y).toBe(2);
        expect(part.position.z).toBe(3);
        expect(part.rotation.y).toBe(Math.PI / 2);
    })

    it("does not share the same Vector3 instance as the socket", () => {
        const part = new THREE.Object3D();
        const socket = {
            position: new THREE.Vector3(1, 2, 3),
            rotation: new THREE.Euler(0, 0, 0),
        };

        attachSocket(part, socket);
        socket.position.set(9, 9, 9); // mutate original after attach

        expect(part.position.x).toBe(1); // part should be unaffected
    })
})