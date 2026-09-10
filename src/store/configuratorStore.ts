import { create } from 'zustand';
import type {
  BaseColor,
  BaseLevel,
  AddonType,
  AddonFunktion,
  ConfiguratorSelection,
} from '../types/configurator';
import { addonSlotCount } from './configRules';

interface ConfiguratorState {
  selection: ConfiguratorSelection;
  setBaseLevel: (level: BaseLevel) => void;
  setBaseColor: (color: BaseColor) => void;
  setAddonType: (index: number, type: AddonType) => void;
  setAddonFunktion: (index: number, funktion: AddonFunktion) => void;
  setAddonColor: (index: number, color: BaseColor) => void;
}

function emptyAddon() {
  return { type: null, funktion: null, color: null };
}

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
  selection: {
    baseLevel: null,
    baseColor: null,
    addons: [],
  },

  setBaseLevel: (level) =>
    set((state) => ({
      selection: {
        ...state.selection,
        baseLevel: level,
        addons: Array.from({ length: addonSlotCount[level] }, (_, i) =>
          state.selection.addons[i] ?? emptyAddon()
        ),
      },
    })),

  setBaseColor: (color) =>
    set((state) => ({
      selection: { ...state.selection, baseColor: color },
    })),

  setAddonType: (index, type) =>
    set((state) => {
      const addons = [...state.selection.addons];
      addons[index] = { type, funktion: null, color: null };
      return { selection: { ...state.selection, addons } };
    }),

  setAddonFunktion: (index, funktion) =>
    set((state) => {
      const addons = [...state.selection.addons];
      addons[index] = { ...addons[index], funktion, color: null };
      return { selection: { ...state.selection, addons } };
    }),

  setAddonColor: (index, color) =>
    set((state) => {
      const addons = [...state.selection.addons];
      addons[index] = { ...addons[index], color };
      return { selection: { ...state.selection, addons } };
    }),
}));