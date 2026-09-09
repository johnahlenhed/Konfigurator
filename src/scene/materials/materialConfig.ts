export const materialSlots = {
    bodyBlack: 'Paint_-_Enamel_Glossy_(Black)',
    bodyWhite: 'Paint_-_Enamel_Glossy_(White)',
    bodyYellow: 'Paint_-_Enamel_Glossy_(Yellow)',
    bodyRed: 'Paint_-_Enamel_Glossy_(Red)',
    bodyBlue: 'Paint_-_Enamel_Glossy_(Blue)',
} as const;

export type MaterialSlotKey = keyof typeof materialSlots;