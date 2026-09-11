export type MaterialSlot = string; // e.g. 'bodyBlack'


export interface ColorScheme {
    label: string;
    slots: Partial<Record<string, string>>;
}

// Keep until color scheme is finalized and implemented.
export interface ColorOptions {
    id: string; // e.g. 'red'
    label: string; // e.g. 'Racing Red'
    hex: string; // e.g. '#FFFFFF'
}