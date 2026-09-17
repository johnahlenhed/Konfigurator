import { colorPalette, type ColorId } from "./colorPalette";
import type { ColorScheme } from "./colorScheme";

export function createAddonColorSchemes<T extends string>(slots: T[]): Record<ColorId, ColorScheme<T>> {
  return Object.fromEntries(
    (Object.keys(colorPalette) as ColorId[]).map((id) => [
      id,
      { label: colorPalette[id].label, color: colorPalette[id].hex, slots },
    ])
  ) as Record<ColorId, ColorScheme<T>>;
}