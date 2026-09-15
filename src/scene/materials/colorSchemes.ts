import type { MaterialSlotKey } from "./materialConfig";
import type { ColorScheme } from "./colorScheme";

// Current color schemes are placeholder HEX-values.
// 'low' intentionally excluded — confirmed permanently fixed (see materialConfig.ts).
export const baseColorSchemes = {
    classic: { 
        label: 'Classic', 
        slots: { 
            gain: '#4dff00', 
            mid: '#ff0000',
            basePanel: '#27AE60',
            btnStart: '#E67E22',
            baseBottom: '#95A5A6',
        }
    },

    monochrome: { 
        label: 'Monochrome', 
        slots: { 
            gain: '#494545', 
            mid: '#2C2C2C',
            basePanel: '#523f3f',
            btnStart: '#2C2C2C',
            baseBottom: '#2C2C2C',
        } 
    },
} as const satisfies Record<string, ColorScheme<MaterialSlotKey>>

export type BaseSchemeId = keyof typeof baseColorSchemes;

// addonColorSchemes intentionally uses its own placeholder type —
// not real MaterialSlotKey yet, since no addon GLB/materials exist.
// Do NOT pass these to applyColorScheme until an addon slot config exists.
export const addonColorSchemes = {
    classic: { label: 'Classic', slots: { addonPaint: '#2C2C2C' } },
    bright: { label: 'Bright', slots: { addonPaint: '#F1C40F' } },
} as const satisfies Record<string, ColorScheme>

export type AddonSchemeId = keyof typeof addonColorSchemes;