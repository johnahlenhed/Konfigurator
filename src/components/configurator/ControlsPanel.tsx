import { getVisibleSections } from '../../store/configRules';
import { useConfiguratorStore } from '../../store/configuratorStore';
import { PartSelector } from './PartSelector'
//import { ColorPicker } from './ColorPicker'

export function ControlsPanel() {
  const selection = useConfiguratorStore(
    (state) => state.selection
  );

  const visible = getVisibleSections(selection);
//replace Base Color div with <ColorPicker /> when the time comes
  return (
    <div>
      <PartSelector />

      {visible.baseColor && (
        <div>Base color</div>
      )}
    </div>
  );
}