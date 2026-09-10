export type MaterialSlot = string; // e.g. 'bodyBlack'

export interface ColorOptions {
    id: string; // e.g. 'red'
    label: string; // e.g. 'Racing Red'
    hex: string; // e.g. '#FFFFFF'
}

export type BaseLevel = 'base' | 'base+1' | 'base+2';

export interface ConfiguratorSelection {
  baseLevel: BaseLevel | null;
  baseColor: BaseColor | null;
}


export type BaseColor = 'red' | 'blue' | 'yellow';