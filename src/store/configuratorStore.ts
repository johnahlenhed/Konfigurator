import { create } from 'zustand';
import type {
  BaseColor,
  AddonColor,
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
  setAddonColor: (index: number, color: AddonColor) => void;
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
        addons: defaultAddonTypes[level].map((type, i) => {
          // Only carry over the previous model/color if this slot's type
          // hasn't changed — otherwise they belonged to a different addon
          // (e.g. the old speaker's color) and shouldn't pre-fill the new one.
          const previous = state.selection.addons[i];
          const sameType = previous?.type === type;
          return {
            type,
            addonModel: sameType ? previous.addonModel : null,
            color: sameType ? previous.color : null,
          };
        }),
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