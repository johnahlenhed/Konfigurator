import type { BaseColor, BaseLevel, AddonType, AddonFunktion } from '../types/configurator';

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
  { id: 'red', label: 'Red', hex: '#c33527' },
  { id: 'blue', label: 'Blue', hex: '#3568c8' },
  { id: 'yellow', label: 'Yellow', hex: '#d9b62c' },
];

export const addonTypes: { id: AddonType; label: string }[] = [
  { id: 'speaker', label: 'Speaker' },
  { id: 'mixer', label: 'Mixer' },
];

export const funktionOptions: { id: AddonFunktion; label: string }[] = [
  { id: 'funktion-1', label: 'Funktion 1' },
  { id: 'funktion-2', label: 'Funktion 2' },
];

// Default type per addon slot, keyed by base level. Order matters —
// index 0 is the first slot to appear, index 1 the second.
export const defaultAddonTypes: Record<BaseLevel, AddonType[]> = {
  beginner: [],
  enthusiast: ['mixer'],
  producer: ['speaker', 'mixer'],
};