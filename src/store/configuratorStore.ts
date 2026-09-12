import { create } from 'zustand';
import type {
  BaseColor,
  BaseLevel,
  AddonType,
  AddonFunktion,
  ConfiguratorSelection,
} from '../types/configurator';
import { defaultAddonTypes } from '../store/configOption';

interface ConfiguratorState {
  selection: ConfiguratorSelection;
  setBaseLevel: (level: BaseLevel) => void;
  setBaseColor: (color: BaseColor) => void;
  setAddonType: (index: number, type: AddonType) => void;
  setAddonFunktion: (index: number, funktion: AddonFunktion) => void;
  setAddonColor: (index: number, color: BaseColor) => void;
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
        addons: defaultAddonTypes[level].map((type, i) => ({
          type,
          funktion: state.selection.addons[i]?.funktion ?? null,
          color: state.selection.addons[i]?.color ?? null,
        })),
      },
    })),

  setBaseColor: (color) =>
    set((state) => ({ selection: { ...state.selection, baseColor: color } })),

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