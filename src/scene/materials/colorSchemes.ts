import type { MaterialSlotKey } from "./materialConfig";

export interface ColorScheme {
    label: string;
    slots: Partial<Record<MaterialSlotKey, string>>;
}

// KNOWN ISSUE: 'low' currently shares its underlying material (plasticBlack)
// with fader/phones/volume in the source GLB. Per Matilda (see team chat,
// 2026-09-12), only gain/mid/low should be user-colorable — if that's confirmed,
// 'low' still needs CG to split it into its own material, otherwise changing
// 'low' will also silently recolor fader/phones/volume.
// Revisit once CG confirms + delivers the split material.

// Current color schemes are placeholder HEX-values.
export const baseColorSchemes = {
    classic: { 
        label: 'Classic', 
        slots: { 
            gain: '#4dff00', 
            mid: '#ff0000', 
            low: '#fffb00',
        }
    },

    monochrome: { 
        label: 'Monochrome', 
        slots: { 
            gain: '#2C2C2C', 
            mid: '#2C2C2C', 
            low: '#2C2C2C', 
        } 
    },
} as const

export type BaseSchemeId = keyof typeof baseColorSchemes;

// addonPaint is a placeholder
export const addonColorSchemes = {
    classic: { label: 'Classic', slots: { addonPaint: '#2C2C2C' } },
    bright: { label: 'Bright', slots: { addonPaint: '#F1C40F' } },
} as const

export type AddonSchemeId = keyof typeof addonColorSchemes;