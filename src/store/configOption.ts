import type { BaseColor, BaseLevel } from '../types/configurator';

export const baseLevels: { id: BaseLevel; label: string }[] = [
  { id: 'base', label: 'Base' },
  { id: 'base+1', label: 'Base + 1' },
  { id: 'base+2', label: 'Base + 2' },
];

export const baseColors: {
  id: BaseColor;
  label: string;
  hex: string;
}[] = [
  { id: 'red', label: 'Red', hex: '#c33527' },
  { id: 'blue', label: 'Blue', hex: '#3568c8' },
  { id: 'yellow', label: 'Yellow', hex: '#d9b62c' },
];