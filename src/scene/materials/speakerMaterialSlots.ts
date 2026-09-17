import { createMaterialConfig } from './createMaterialConfig';

export const speakerMaterialConfig = createMaterialConfig({
    panel: 'addonMetalorange',
    // Note: speaker's shipped buttons only use 2 of the 3 possible colors
    // today (no button currently uses lightgreen) — selecting the
    // "lightgreen" scheme is still valid, it just has nothing to repaint
    // on this specific file. Not a bug.
    buttons: ['addonPlasticgreen', 'addonPlasticorange'],
});

export type SpeakerMaterialSlotKey = keyof typeof speakerMaterialConfig.slots;
export const getSpeakerMaterialName = speakerMaterialConfig.getMaterialName;