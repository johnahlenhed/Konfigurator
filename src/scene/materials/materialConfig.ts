import { createMaterialConfig } from './createMaterialConfig.js'

// RESOLVED (Matilda, 2026-09-12): 'low' is intentionally fixed, matching
// fader/phones/volume — not independently colorable. Confirmed against
// Mixer_fixad.glb: all four now share 'plasticLightgreen' (the documented
// fixed-forever color), not 'plasticBlack' as originally assumed.

export const baseMaterialConfig = createMaterialConfig({
    gain: 'plasticOrange',
    mid: 'plasticGreen',
    basePanel: 'metalGreen',
    baseBottom: 'metalLightgreen',
});

export type MaterialSlotKey = keyof typeof baseMaterialConfig.slots;
export const getMaterialName = baseMaterialConfig.getMaterialName;
export const isMaterialSlot = baseMaterialConfig.isMaterialSlot;