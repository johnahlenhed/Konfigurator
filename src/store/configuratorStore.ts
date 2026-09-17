import { create } from 'zustand';
import type {
  BaseColor,
  AddonColor,
  BaseLevel,
  AddonType,
  AddonModel,
  ConfiguratorSelection,
} from '../types/configurator';
import { defaultAddonSelections } from '../store/configOption';

interface ConfiguratorState {
  selection: ConfiguratorSelection;
  setBaseLevel: (level: BaseLevel) => void;
  setBaseColor: (color: BaseColor) => void;
  setAddonType: (index: number, type: AddonType) => void;
  setAddonModel: (index: number, addonModel: AddonModel) => void;
  setAddonColor: (index: number, color: AddonColor) => void;
}

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
  selection: {
    baseLevel: 'beginner',
    baseColor: 'pike-green',
    addons: [],
  },

  setBaseLevel: (level) =>
    set((state) => {
      const nextAddons = defaultAddonSelections[level].map((slot, index) => {
        const previous = state.selection.addons[index];

        return {
          type: previous?.type ?? slot.type,
          addonModel: previous?.addonModel ?? slot.addonModel ?? 'model-1',
          color: previous?.color ?? slot.color ?? null,
        };
      });

      return {
        selection: {
          ...state.selection,
          baseLevel: level,
          addons: nextAddons,
        },
      };
    }),

  setBaseColor: (color) =>
    set((state) => ({ selection: { ...state.selection, baseColor: color } })),

  setAddonType: (index, type) =>
    set((state) => {
      const addons = [...state.selection.addons];
      addons[index] = { type, addonModel: 'model-1', color: 'pike-green' };
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