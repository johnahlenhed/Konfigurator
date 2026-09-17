import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import * as THREE from "three";
import { useConfiguratorStore } from "../../store/configuratorStore";
import type { AddonType, AddonModel } from "../../types/configurator";
import { getSocket } from "./getSocket";
import { detachPart } from "./detachPart";
import { attachSocket } from "./attachSocket";
import { cloneWithMaterials, getAnchorOffset } from "./getAnchorOffset";
import { useFrame } from "@react-three/fiber";
import { getMaterials, traverseMeshes } from "../../utils/modelHelpers";
import { speakerColorSchemes } from "../materials/speakerColorSchemes";
import { getSpeakerMaterialName } from "../materials/speakerMaterialSlots";
import { speaker2ColorSchemes } from "../materials/speaker2ColorSchemes";
import { getSpeaker2MaterialName } from "../materials/speaker2MaterialSlots";
import { applyColorScheme } from "../materials/applyMaterial";
import type { ColorId } from "../materials/colorPalette";
import { option1ColorSchemes } from "../materials/option1ColorSchemes";
import { option2ColorSchemes } from "../materials/option2ColorSchemes";
import { getOption2MaterialName } from "../materials/option2MaterialSlots";
import { getOption1MaterialName } from "../materials/option1MaterialSlots";
import { traverseMeshes } from "../../utils/modelHelpers";

function toGenericResolver<T extends string>(
    getMaterialName: (slot: T) => string[]
): (slot: string) => string[] {
    return (slot: string) => getMaterialName(slot as T);
}

type AddonKey = `${AddonType}-${AddonModel}`;

// speaker/mixer + model-1/model-2 (the store's vocabulary, shown to the user
// as SP-01/SP-02/MX-01/MX-02 — see getAddonModelLabel in configOption.ts) map
// onto the GLB files' own option1/option2/speaker/speaker2 naming.
const ADDON_GLB_PATHS: Record<AddonKey, string> = {
    'speaker-model-1': '/models/Mixer_speaker_color.glb',
    'speaker-model-2': '/models/Mixer_speaker2_color.glb',
    'mixer-model-1': '/models/Mixer_option1_color.glb',
    'mixer-model-2': '/models/Mixer_option2_color.glb',
};

const ANCHOR_NODES: Record<AddonKey, string> = {
    'speaker-model-1': 'baseSpeaker',
    'speaker-model-2': 'baseSpeaker2',
    'mixer-model-1': 'baseOption1',
    'mixer-model-2': 'baseOption2',
};

const ADDON_COLOR_CONFIG: Partial<Record<AddonKey, {
    schemes: Record<ColorId, { label: string; color: string; slots: string[] }>;
    getMaterialName: (slot: string) => string[];
}>> = {
    'speaker-model-1': { schemes: speakerColorSchemes, getMaterialName: toGenericResolver(getSpeakerMaterialName) },
    'speaker-model-2': { schemes: speaker2ColorSchemes, getMaterialName: toGenericResolver(getSpeaker2MaterialName) },
    'mixer-model-1': { schemes: option1ColorSchemes, getMaterialName: toGenericResolver(getOption1MaterialName) },
    'mixer-model-2': { schemes: option2ColorSchemes, getMaterialName: toGenericResolver(getOption2MaterialName) },
}

type PartSwapProps = {
    scene: THREE.Object3D; // The loaded base model's scene, to find sockets in
    socketName: string; // Example: SOCKET_ADDON_1 or SOCKET_ADDON_2, to find the correct socket in the base model
    addonIndex: number; // Which slot in selection.addons[] this socket corresponds to
};

export function PartSwap({ scene, socketName, addonIndex }: PartSwapProps) {
    // A persistent container that holds whichever part is currently
    // attached. Using a ref (not state) because we're mutating the
    // 3D scene graph directly, not triggering React re-renders. Kept here
    // (rather than in AddonPart below) so it survives AddonPart unmounting
    // when the slot has no type/model selected yet.
    const groupRef = useRef(new THREE.Group());

    const addon = useConfiguratorStore((state) => state.selection.addons[addonIndex]);
    const addonKey: AddonKey | null =
        addon?.type && addon.addonModel ? `${addon.type}-${addon.addonModel}` : null;

    return (
        <>
            {/* Renders the group (and whatever part is currently inside it) */}
            <primitive object={groupRef.current} />

            {/* Nothing to attach until both a type and a model are chosen for this slot. */}
            {addonKey && (
                <AddonPart
                    scene={scene}
                    socketName={socketName}
                    groupRef={groupRef}
                    glbPath={ADDON_GLB_PATHS[addonKey]}
                    anchorName={ANCHOR_NODES[addonKey]}
                    addonKey={addonKey}
                    addonIndex={addonIndex}
                />
            )}
        </>
    )
}

type AddonPartProps = {
    scene: THREE.Object3D;
    socketName: string;
    groupRef: RefObject<THREE.Group>;
    glbPath: string;
    anchorName: string;
    addonKey: AddonKey;
    addonIndex: number;
};

// Apply ease to addon animation for smoother transition
function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
}

const FLY_IN_DISTANCE = 1;
const FLY_IN_DURATION = 1.5;

// Loads and attaches one addon GLB at a socket. Split out from PartSwap so it
// can be mounted/unmounted based on whether a type+model is actually selected
// — useGLTF needs a real path, so it can't run when there's nothing to load.
function AddonPart({ scene, socketName, groupRef, glbPath, anchorName, addonKey, addonIndex }: AddonPartProps) {
    // Loads the GLB for whichever part is currently selected.
    // Automatically re-loads when `glbPath` changes.
    const { scene: partScene } = useGLTF(glbPath);
    const addonColor = useConfiguratorStore((state) => state.selection.addons[addonIndex]?.color);

    const hasEnteredRef = useRef(false);
    const introRef = useRef<{
        clone: THREE.Object3D;
        from: THREE.Vector3;
        to: THREE.Vector3;
        elapsed: number;
    } | null>(null);

    const cloneRef = useRef<THREE.Object3D | null>(null);

    useEffect(() => {
        // Find where this part should be positioned in the base model.
        const socket = getSocket(scene, socketName);
        if (!socket) return;

        // Clone the loaded part so each instance is independent — avoids sharing geometry/transform with the cached GLB.
        const clone = cloneWithMaterials(partScene);

        // Enable cast- and receiveShadow for every cloned mesh
        traverseMeshes(clone, (mesh) => {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        });

        const anchorOffset = getAnchorOffset(clone, anchorName);

        // Position and rotate the clone to match the socket's transform.
        attachSocket(clone, socket);
        if (anchorOffset) {
            // anchorOffset is in the clone's local space, but clone.position is a world-space
            // value — rotate the offset into world space (via the rotation attachSocket just
            // applied) before subtracting, so this still centers correctly on a rotated socket.
            const worldAnchorOffset = anchorOffset.clone().applyQuaternion(clone.quaternion);
            clone.position.sub(worldAnchorOffset); // re-center the whole clone to local origin first
        }

        const finalPosition = clone.position.clone();

        if (!hasEnteredRef.current) {
            // First time: start from right and fly in to finalPosition. Never further than base models right edge.
            const startPosition = finalPosition.clone().add(new THREE.Vector3(FLY_IN_DISTANCE, 0, 0));
            clone.position.copy(startPosition);
            introRef.current = { clone, from: startPosition, to: finalPosition, elapsed: 0 };
        } else {
            // Addon already visable, toggle between choices should not trigger new animation
            introRef.current = null;
        }

        groupRef.current.add(clone);

        // Detach this part before attaching the next one (re-run on prop change) or on unmount
        // (e.g. the user clears the model/type for this slot).
        cloneRef.current = clone;
        return () => {
            cloneRef.current = null;
            introRef.current = null;
            detachPart(clone);
        };
    }, [scene, socketName, groupRef, glbPath, partScene, anchorName])

    useEffect(() => {
        const clone = cloneRef.current;
        if (!clone || !addonColor) return;

        const config = ADDON_COLOR_CONFIG[addonKey];
        if (!config) return;

        const scheme = config.schemes[addonColor];
        if (!scheme) return;

        applyColorScheme(clone, scheme, config.getMaterialName);
    }, [addonColor, addonKey])

    useFrame((_, delta) => {
        const intro = introRef.current;
        if (!intro) return;

        intro.elapsed += delta;
        const t = Math.min(intro.elapsed / FLY_IN_DURATION, 1);
        intro.clone.position.lerpVectors(intro.from, intro.to, easeOutCubic(t));

        if (t >= 1) {
            hasEnteredRef.current = true;
            introRef.current = null;
        }
    })

    return null;
}
