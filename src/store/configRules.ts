import type { ConfiguratorSelection } from '../types/configurator';
import { baseLevels } from './configOption';

export function getVisibleSections(sel: ConfiguratorSelection) {
  return {
    baseColor: sel.baseLevel !== null,
  };
}

export function getTotalPrice(sel: ConfiguratorSelection): number | null {
  if (!sel.baseLevel) return null;
  const level = baseLevels.find((l) => l.id === sel.baseLevel);
  return level?.price ?? null;
}