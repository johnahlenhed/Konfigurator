import type { ConfiguratorSelection } from '../types/configurator';
import { baseLevels, addonTypes, funktionOptions } from './configOption';

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
    const funktion = funktionOptions.find((f) => f.id === addon.funktion);
    return sum + (type?.price ?? 0) + (funktion?.price ?? 0);
  }, 0);

  return level.price + addonsTotal;
}