import type { MaterialSlotKey } from "./materialConfig";

export interface ColorScheme {
    label: string;
    slots: Partial<Record<MaterialSlotKey, string>>;
}

export const baseColorSchemes = {
    ocean: {
    label: 'Ocean',
    slots: { bodyBlue: '#2980B9' },
    },
    sunset: {
    label: 'Sunset',
    slots: { bodyRed: '#E67E22' },
    },
} as const satisfies Record<string, ColorScheme>

export type BaseSchemeId = keyof typeof baseColorSchemes;

// addonPaint is a placeholder
export const addonColorSchemes = {
    classic: { label: 'Classic', slots: { addonPaint: '#2C2C2C' } },
    bright: { label: 'Bright', slots: { addonPaint: '#F1C40F' } },
} as const

export type AddonSchemeId = keyof typeof addonColorSchemes;