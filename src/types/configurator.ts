export type MaterialSlot = string; // e.g. 'bodyBlack'
export type BaseLevel = 'beginner' | 'enthusiast' | 'producer';
export type AddonType = 'speaker' | 'mixer';
export type AddonModel = 'model-1' | 'model-2';
export type BaseColor = 'classic' | 'monochrome';
export type AddonColor = 'classic' | 'bright';

export interface AddonSelection {
  type: AddonType;
  addonModel: AddonModel | null;
  color: AddonColor | null;
}

export interface ConfiguratorSelection {
  baseLevel: BaseLevel | null;
  baseColor: BaseColor | null;
  addons: AddonSelection[];
}