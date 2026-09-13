import * as THREE from 'three';

/**
 * Play every animation clip in given actions map.
 * Used for addons GLBs where each mesh has its own "fly into place" clip,
 * all vlips must play together for the whole piece to animate correctly.
 */

export function playAllClips(
    actions: Record<string, THREE.AnimationAction | null | undefined>
) {
    Object.values(actions).forEach((actions) => actions?.play());
}