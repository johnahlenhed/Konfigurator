import { create } from 'zustand';
import type {
  BaseColor,
  BaseLevel,
  ConfiguratorSelection,
} from '../types/configurator';

interface ConfiguratorState {
  selection: ConfiguratorSelection;
  setBaseLevel: (level: BaseLevel) => void;
  setBaseColor: (color: BaseColor) => void;
}

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
  selection: {
    baseLevel: null,
    baseColor: null,
  },

  setBaseLevel: (level) =>
    set((state) => ({
      selection: {
        ...state.selection,
        baseLevel: level,
      },
    })),

  setBaseColor: (color) =>
    set((state) => ({
      selection: {
        ...state.selection,
        baseColor: color,
      },
    })),
}));