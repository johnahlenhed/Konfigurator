import { useConfiguratorStore } from '../../store/configuratorStore';
import { getVisibleSections } from '../../store/configRules';
import { PartSelector } from './PartSelector';
import { ColorPicker } from './ColorPicker';
import { AddonBlock } from './AddonBlock';

export function ControlsPanel() {
  const selection = useConfiguratorStore((state) => state.selection);
  const visible = getVisibleSections(selection);

  return (
    <>
      <PartSelector />

      {visible.baseColor && <ColorPicker />}

      {selection.addons.map((_, i) => (
        <AddonBlock key={i} index={i} />
      ))}
    </>
  );
}