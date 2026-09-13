import * as THREE from 'three';

/** 
 * Adds a clone of an addon's root scene into the given parent group.
 * No positioning applied, since addon nodes are already correctly placed.
*/

export function attachAddon(parent: THREE.Object3D, addonScene: THREE.Object3D) {
    const clone = addonScene.clone();
    parent.add(clone);
    return clone;
}