import type { Speaker2MaterialSlotKey } from './speaker2MaterialSlots'
import type { ColorScheme } from './colorScheme'

export const speaker2ColorSchemes = {
    classic: { label: 'Classic', slots: { panel: '#2C2C2C' } },
    bright: { label: 'Bright', slots: { panel: '#F1C40F' } },
} as const satisfies Record<string, ColorScheme<Speaker2MaterialSlotKey>>

export type Speaker2SchemeId = keyof typeof speaker2ColorSchemes