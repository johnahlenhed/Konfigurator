export type BaseLevel = 'beginner' | 'enthusiast' | 'producer';
export type AddonType = 'speaker' | 'mixer';
export type AddonFunktion = 'funktion-1' | 'funktion-2';

export interface AddonSelection {
  type: AddonType;
  funktion: AddonFunktion | null;
  color: BaseColor | null;
}

export interface ConfiguratorSelection {
  baseLevel: BaseLevel | null;
  baseColor: BaseColor | null;
  addons: AddonSelection[];
}

export type BaseColor = 'red' | 'blue' | 'yellow';