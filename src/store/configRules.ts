import type { ConfiguratorSelection } from '../types/configurator';

export function getVisibleSections(sel: ConfiguratorSelection) {
  return {
    baseColor: sel.baseLevel !== null,
  };
}