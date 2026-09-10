import { materialSlots as materialConfig } from './materialConfig'
import type { MaterialSlotKey } from './materialConfig'

export const slotKeys = Object.keys(materialConfig) as MaterialSlotKey[]

export function isMaterialSlot(value: string): value is MaterialSlotKey {
    return slotKeys.includes(value as MaterialSlotKey)
}

export function getMaterialName(slot: MaterialSlotKey): string {
    return materialConfig[slot]
}