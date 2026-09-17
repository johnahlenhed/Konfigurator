import { createMaterialConfig } from './createMaterialConfig.js'

export const option2MaterialSlots = createMaterialConfig({
    panel: 'addonMetallightgreen',
    buttons: ['addonPlasticgreen', 'addonPlasticlightgreen', 'addonPlasticorange'],
});

export type Option2MaterialSlotKey = keyof typeof option2MaterialSlots.slots;
export const getOption2MaterialName = option2MaterialSlots.getMaterialName;