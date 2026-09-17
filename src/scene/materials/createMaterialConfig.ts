export function createMaterialConfig<T extends Record<string, string | readonly string[]>>(slots: T) {
    const slotKeys = Object.keys(slots) as (keyof T)[];

    function isMaterialSlot(value: string): value is Extract<keyof T, string> {
        return (slotKeys as string[]).includes(value);
    }

    function getMaterialName(slot: keyof T): string[] {
        const v = slots[slot];
        return Array.isArray(v) ? [...v] : [v as string];
    }

    return { slots, slotKeys, isMaterialSlot, getMaterialName };
}