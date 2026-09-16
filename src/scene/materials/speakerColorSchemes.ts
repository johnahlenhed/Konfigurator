import type { SpeakerMaterialSlotKey } from './speakerMaterialSlots'
import type { ColorScheme } from './colorScheme'

export const speakerColorSchemes = {
    classic: { label: 'Classic', slots: { panel: '#2C2C2C' } },
    bright: { label: 'Bright', slots: { panel: '#F1C40F' } },
} as const satisfies Record<string, ColorScheme<SpeakerMaterialSlotKey>>

export type SpeakerSchemeId = keyof typeof speakerColorSchemes