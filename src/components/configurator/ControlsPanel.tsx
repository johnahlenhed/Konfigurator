import { useConfiguratorStore } from '../../store/configuratorStore';
import { getVisibleSections } from '../../store/configRules';
import { PartSelector } from './PartSelector';
import { ColorPicker } from './ColorPicker';
import { AddonBlock } from './AddonBlock';
import { Section } from './Section';

export function ControlsPanel() {
  const selection = useConfiguratorStore((state) => state.selection);
  const visible = getVisibleSections(selection);

  return (
    <>
      <Section title="Base">
        <PartSelector />
      </Section>

      {visible.baseColor && (
        <Section title="Base color">
          <ColorPicker />
        </Section>
      )}

      {selection.addons.map((_, i) => (
        <AddonBlock key={i} index={i} />
      ))}
    </>
  );
}