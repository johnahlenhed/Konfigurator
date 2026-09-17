import { createMaterialConfig } from './createMaterialConfig.js'

export const option1MaterialSlots = createMaterialConfig({
    panel: 'addonMetalgreen',
    buttons: ['addonPlasticgreen', 'addonPlasticlightgreen', 'addonPlasticorange'],
});

export type Option1MaterialSlotKey = keyof typeof option1MaterialSlots.slots;
export const getOption1MaterialName = option1MaterialSlots.getMaterialName;