// import type { MaterialSlotKey } from "./materialConfig";

// addonColorSchemes intentionally uses its own placeholder type —
// not real MaterialSlotKey yet, since no addon GLB/materials exist.
// Do NOT pass these to applyColorScheme until an addon slot config exists.
interface PlaceholderAddonScheme {
    label: string;
    slots: Record<string, string>;
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
            // low intentionally omitted — still shares 'plasticBlack' with
            // fader/phones/volume; changing it recolors those too.
            // Re-add once CG delivers a dedicated 'low' material.
        }
    },

    monochrome: { 
        label: 'Monochrome', 
        slots: { 
            gain: '#2C2C2C', 
            mid: '#2C2C2C', 
            // low intentionally omitted — still shares 'plasticBlack' with
            // fader/phones/volume; changing it recolors those too.
            // Re-add once CG delivers a dedicated 'low' material.
        } 
    },
} as const

export type BaseSchemeId = keyof typeof baseColorSchemes;

export const addonColorSchemes: Record<string, PlaceholderAddonScheme> = {
    classic: { label: 'Classic', slots: { addonPaint: '#2C2C2C' } },
    bright: { label: 'Bright', slots: { addonPaint: '#F1C40F' } },
}

export type AddonSchemeId = keyof typeof addonColorSchemes;