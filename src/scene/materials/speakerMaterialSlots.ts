export const speakerMaterialSlots = {
    panel: 'addPaint',
} as const;

export type SpeakerMaterialSlotKey = keyof typeof speakerMaterialSlots;

export function getSpeakerMaterialName(slot: SpeakerMaterialSlotKey): string {
    return speakerMaterialSlots[slot]
}