import type { BaseLevel, ConfiguratorSelection } from '../types/configurator';

export const addonSlotCount: Record<BaseLevel, number> = {
  'base': 0,
  'base+1': 1,
  'base+2': 2,
};

export function getVisibleSections(sel: ConfiguratorSelection) {
  return {
    baseColor: sel.baseLevel !== null,
    addons: sel.addons.map((addon) => ({
      funktion: addon.type !== null,
      color: addon.funktion !== null,
    })),
  };
}