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
  addons: AddonSelection[];
}

export type BaseColor = 'red' | 'blue' | 'yellow';

export type AddonType = 'platta' | 'hogtalare';
export type AddonFunktion = 'funktion-1' | 'funktion-2'; // placeholder ids until WU names the real variants

export interface AddonSelection {
  type: AddonType | null;
  funktion: AddonFunktion | null;
  color: BaseColor | null;
}