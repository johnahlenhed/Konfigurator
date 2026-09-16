import { createMaterialConfig } from './createMaterialConfig.js'

export const option2MaterialSlots = createMaterialConfig({
    // Will be filled when documentation is available from CG.
});

export type Option2MaterialSlotKey = keyof typeof option2MaterialSlots.slots;
export const getOption2MaterialName = option2MaterialSlots.getMaterialName;