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
    set((state) => ({
        selection: {
        ...state.selection,
        baseLevel: level,
        addons: defaultAddonSelections[level].map((slot, i) => {
            const prev = state.selection.addons[i];
            const sameType = prev?.type === slot.type;

            return {
            type: slot.type,
            addonModel: sameType ? prev.addonModel ?? slot.addonModel : slot.addonModel,
            color: sameType ? prev.color ?? slot.color : slot.color,
            };
        }),
        },
    })),

  setBaseColor: (color) =>
    set((state) => ({ selection: { ...state.selection, baseColor: color } })),

  setAddonType: (index, type) =>
    set((state) => {
      const addons = [...state.selection.addons];
      addons[index] = { type, addonModel: 'model-1', color: null };
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