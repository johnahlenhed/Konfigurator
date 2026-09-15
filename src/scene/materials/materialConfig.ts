// RESOLVED (Matilda, 2026-09-12): 'low' is intentionally fixed, matching
// fader/phones/volume — not independently colorable. Confirmed against
// Mixer_fixad.glb: all four now share 'plasticLightgreen' (the documented
// fixed-forever color), not 'plasticBlack' as originally assumed.
// Revisit only if this changes in a future team discussion.

export const materialSlots = {
    gain: 'plasticOrange',
    mid: 'plasticGreen',
    basePanel: 'metalGreen',
    btnStart: 'metalOrange',
    baseBottom: 'metalLightgreen',
} as const;

export type MaterialSlotKey = keyof typeof materialSlots;