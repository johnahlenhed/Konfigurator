// KNOWN ISSUE: 'low' currently shares its underlying material (plasticBlack)
// with fader/phones/volume in the source GLB. Per Matilda (see team chat,
// 2026-09-12), only gain/mid/low should be user-colorable — if that's confirmed,
// 'low' still needs CG to split it into its own material, otherwise changing
// 'low' will also silently recolor fader/phones/volume.
// Revisit once CG confirms + delivers the split material.

export const materialSlots = {
    gain: 'plasticOrange',
    mid: 'plasticGreen',
    low: 'plasticBlack',
} as const;

export type MaterialSlotKey = keyof typeof materialSlots;