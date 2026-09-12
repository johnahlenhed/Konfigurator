import type { MaterialSlotKey } from "./materialConfig";

export interface ColorScheme {
    label: string;
    slots: Partial<Record<MaterialSlotKey, string>>;
}

export const baseColorSchemes = {
    classic: { label: 'Classic', slots: { gain: '#E67E22', mid: '#27AE60' } },
    monochrome: { label: 'Monochrome', slots: { gain: '#2C2C2C', mid: '#2C2C2C' } },
} as const

export type BaseSchemeId = keyof typeof baseColorSchemes;

// addonPaint is a placeholder
export const addonColorSchemes = {
    classic: { label: 'Classic', slots: { addonPaint: '#2C2C2C' } },
    bright: { label: 'Bright', slots: { addonPaint: '#F1C40F' } },
} as const

export type AddonSchemeId = keyof typeof addonColorSchemes;