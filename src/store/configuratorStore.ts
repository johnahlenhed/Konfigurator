import { create } from 'zustand';
import type { BaseLevel, ConfiguratorSelection } from '../types/configurator';

interface ConfiguratorState {
  selection: ConfiguratorSelection;
  setBaseLevel: (level: BaseLevel) => void;
}

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
  selection: { baseLevel: null },
  setBaseLevel: (level) =>
    set((state) => ({ selection: { ...state.selection, baseLevel: level } })),
}));