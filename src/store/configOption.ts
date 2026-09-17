import type { BaseColor, AddonColor, BaseLevel, AddonType, AddonModel } from '../types/configurator';

export const baseLevels: {
  id: BaseLevel;
  label: string;
  price: number;
  description: string;
}[] = [
  {
    id: 'beginner',
    label: 'Beginner',
    price: 8000,
    description:
      'Machined from aircraft-grade aluminum and reinforced with grade polymer components, this mixer is built to take a beating and still look sharp. The metal core keeps it rigid and resonance-free, giving you a solid single-unit setup ready to plug in and run.',
  },
  {
    id: 'enthusiast',
    label: 'Enthusiast',
    price: 11000,
    description:
      'Your mixer is now matched with a dedicated speaker unit, sharing the same machined aluminum shell and grade polymer reinforcement. The integrated pairing keeps the whole rig rigid and resonance-free.',
  },
  {
    id: 'producer',
    label: 'Producer',
    price: 15000,
    description:
      'Fully built out with two add-ons, your rig now spans mixing and playback in one connected system. Every unit shares the same aircraft-grade aluminum core and grade polymer reinforcement, keeping the whole stack rigid.',
  },
];

export const baseColors: { id: BaseColor; label: string; hex: string }[] = [
  { id: 'pike-green', label: 'Pike Green', hex: '#ACA946' },
  { id: 'strike-orange', label: 'Strike Orange', hex: '#D08E21' },
  { id: 'cod-white', label: 'Cod White', hex: '#F8F6E5' },
];

export const addonColors: { id: AddonColor; label: string; hex: string }[] = [
  { id: 'pike-green', label: 'Pike Green', hex: '#ACA946' },
  { id: 'strike-orange', label: 'Strike Orange', hex: '#D08E21' },
  { id: 'cod-white', label: 'Cod White', hex: '#F8F6E5' },
];

export const addonTypes: { id: AddonType; label: string; price: number }[] = [
  { id: 'speaker', label: 'Speaker', price: 1200 },
  { id: 'mixer', label: 'Mixer', price: 900 },
];

export const getAddonModelLabel = (
  type: AddonType | null,
  id: AddonModel
): string => {
  if (type === 'speaker') {
    return id === 'model-1' ? 'SP-01' : 'SP-02';
  }
  if (type === 'mixer') {
    return id === 'model-1' ? 'MX-01' : 'MX-02';
  }
  return id === 'model-1' ? 'Model 1' : 'Model 2';
};

// TODO: pricing is currently shared across addon types (speaker vs mixer),
// but getAddonModelLabel shows they have distinct display labels per type
// (SP-01/SP-02 vs MX-01/MX-02) — per-type pricing may be needed. Confirm
// with the team before changing this data shape.
export const addonModels: { id: AddonModel; label: string; price: number }[] = [
  { id: 'model-1', label: 'Model 1', price: 300 },
  { id: 'model-2', label: 'Model 2', price: 600 },
];

// Default type per addon slot, keyed by base level. Order matters —
// index 0 is the first slot to appear, index 1 the second.
export const defaultAddonTypes: Record<BaseLevel, AddonType[]> = {
  beginner: [],
  enthusiast: ['speaker'], // matches the Enthusiast description above: "matched with a dedicated speaker unit"
  producer: ['speaker', 'mixer'],
};