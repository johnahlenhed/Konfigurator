import type { ConfiguratorSelection } from '../types/configurator';
import { baseLevels, addonTypes, addonModels } from './configOption';

export function getVisibleSections(sel: ConfiguratorSelection) {
  return {
    baseColor: sel.baseLevel !== null,
  };
}

export function getTotalPrice(sel: ConfiguratorSelection): number {
  if (!sel.baseLevel) {
    return Math.min(...baseLevels.map((l) => l.price));
  }

  const level = baseLevels.find((l) => l.id === sel.baseLevel);
  if (!level) return Math.min(...baseLevels.map((l) => l.price));

  const addonsTotal = sel.addons.reduce((sum, addon) => {
    const type = addonTypes.find((t) => t.id === addon.type);
    const addonModel = addonModels.find((m) => m.id === addon.addonModel);
    return sum + (type?.price ?? 0) + (addonModel?.price ?? 0);
  }, 0);

  return level.price + addonsTotal;
}