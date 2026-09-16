// speaker2MaterialSlots.ts
import { createMaterialConfig } from './createMaterialConfig';

export const speaker2MaterialConfig = createMaterialConfig({
    panel: 'addPaint2',
});

export type Speaker2MaterialSlotKey = keyof typeof speaker2MaterialConfig.slots;
export const getSpeaker2MaterialName = speaker2MaterialConfig.getMaterialName;