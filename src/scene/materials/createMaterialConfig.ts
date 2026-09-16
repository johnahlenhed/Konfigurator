export function createMaterialConfig<T extends Record<string, string>>(slots: T) {
    const slotKeys = Object.keys(slots) as (keyof T)[];

    function isMaterialSlot(value: string): value is Extract<keyof T, string> {
        return (slotKeys as string[]).includes(value);
    }

    function getMaterialName(slot: keyof T): string {
        return slots[slot];
    }

    return { slots, slotKeys, isMaterialSlot, getMaterialName };
}