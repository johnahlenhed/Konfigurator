import { createMaterialConfig } from './createMaterialConfig';

export const speakerMaterialConfig = createMaterialConfig({
    panel: 'addPaint',
});

export type SpeakerMaterialSlotKey = keyof typeof speakerMaterialConfig.slots;
export const getSpeakerMaterialName = speakerMaterialConfig.getMaterialName;