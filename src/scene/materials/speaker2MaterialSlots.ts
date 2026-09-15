export const speaker2MaterialSlots = {
    panel: 'addPaint2',
} as const;

export type Speaker2MaterialSlotKey = keyof typeof speaker2MaterialSlots;

export function getSpeaker2MaterialName(slot: Speaker2MaterialSlotKey): string {
    return speaker2MaterialSlots[slot]
}