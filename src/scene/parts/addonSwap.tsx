import { Addon } from "./Addon";
import { ADDON_PARTS } from "./ADDON_PARTS";

/**
 * Renders the currently selected addon based on `selectedAddon`.
 * The actual selection/state change happens in the parent component.
 *
 * @param selectedAddon - key identifying which addon to render (see ADDON_PARTS)
 * @returns the rendered Addon for the selected key
 */

export function AddonSwap({ selectedAddon } : { selectedAddon: keyof typeof ADDON_PARTS }) {

  return (
      <Addon key={selectedAddon} path={ADDON_PARTS[selectedAddon]} />
  );
}
