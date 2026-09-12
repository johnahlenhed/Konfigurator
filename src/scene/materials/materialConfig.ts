export const materialSlots = {
    gain: 'plasticOrange',
    mid: 'plasticGreen',
    // low/fade/phones/volume intentionally omitted. Waiting on CG for shared vs independent materials.
} as const;

export type MaterialSlotKey = keyof typeof materialSlots;