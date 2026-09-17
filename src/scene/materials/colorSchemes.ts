import { colorPalette, type ColorId } from "./colorPalette";
import type { MaterialSlotKey } from "./materialConfig";
import type { ColorScheme } from "./colorScheme";

const baseSlots: MaterialSlotKey[] = ['gain', 'mid', 'basePanel', 'baseBottom'];

export const baseColorSchemes = Object.fromEntries(
  (Object.keys(colorPalette) as ColorId[]).map((id) => [
    id,
    { label: colorPalette[id].label, color: colorPalette[id].hex, slots: baseSlots },
  ])
) as Record<ColorId, ColorScheme<MaterialSlotKey>>;