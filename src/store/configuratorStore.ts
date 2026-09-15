import { create } from 'zustand';
import type {
  BaseColor,
  BaseLevel,
  AddonType,
  AddonModel,
  ConfiguratorSelection,
} from '../types/configurator';
import { defaultAddonTypes } from '../store/configOption';

interface ConfiguratorState {
  selection: ConfiguratorSelection;
  setBaseLevel: (level: BaseLevel) => void;
  setBaseColor: (color: BaseColor) => void;
  setAddonType: (index: number, type: AddonType) => void;
  setAddonModel: (index: number, addonModel: AddonModel) => void;
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
          addonModel: state.selection.addons[i]?.addonModel ?? null,
          color: state.selection.addons[i]?.color ?? null,
        })),
      },
    })),

  setBaseColor: (color) =>
    set((state) => ({ selection: { ...state.selection, baseColor: color } })),

  setAddonType: (index, type) =>
    set((state) => {
      const addons = [...state.selection.addons];
      addons[index] = { type, addonModel: null, color: null };
      return { selection: { ...state.selection, addons } };
    }),

  setAddonModel: (index, addonModel) =>
    set((state) => {
      const addons = [...state.selection.addons];
      addons[index] = { ...addons[index], addonModel };
      return { selection: { ...state.selection, addons } };
    }),

  setAddonColor: (index, color) =>
    set((state) => {
      const addons = [...state.selection.addons];
      addons[index] = { ...addons[index], color };
      return { selection: { ...state.selection, addons } };
    }),
}));