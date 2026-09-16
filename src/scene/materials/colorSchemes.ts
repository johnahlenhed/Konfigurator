import type { MaterialSlotKey } from "./materialConfig";
import type { ColorScheme } from "./colorScheme";

// 'low' intentionally excluded — confirmed permanently fixed (see materialConfig.ts).
export const baseColorSchemes = {
    'pike-green': { 
        label: 'Pike Green', 
        slots: { 
            gain: '#aca946', 
            mid: '#aca946',
            basePanel: '#aca946',
            btnStart: '#aca946',
            baseBottom: '#aca946',
        }
    },

    'strike-orange': { 
        label: 'Strike Orange', 
        slots: { 
            gain: '#D08E21', 
            mid: '#D08E21',
            basePanel: '#D08E21',
            btnStart: '#D08E21',
            baseBottom: '#D08E21',
        } 
    },

    'cod-white': {
        label: 'Cod White',
        slots: {
            gain: '#F8F6E5',
            mid: '#F8F6E5',
            basePanel: '#F8F6E5',
            btnStart: '#F8F6E5',
            baseBottom: '#F8F6E5',
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