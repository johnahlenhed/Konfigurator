import { useState } from 'react';
import { useConfiguratorStore } from '../../store/configuratorStore';
import { addonTypes, addonModels, addonColors, getAddonModelLabel } from '../../store/configOption';
import type { AddonType, AddonModel, AddonColor } from '../../types/configurator';
import { RadioOptionRow } from './RadioOptionRow';
import { Section } from './Section';
import styles from './AddonBlock.module.css';
import chevronDownSmall from '../../assets/akar-icons_chevron-down-small.svg';

interface AddonBlockProps {
  index: number;
}

export function AddonBlock({ index }: AddonBlockProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const selection = useConfiguratorStore((state) => state.selection);
  const setAddonType = useConfiguratorStore((state) => state.setAddonType);
  const setAddonModel = useConfiguratorStore((state) => state.setAddonModel);
  const setAddonColor = useConfiguratorStore((state) => state.setAddonColor);

  const addon = selection.addons[index];
  const currentType = addonTypes.find((t) => t.id === addon.type);
  const alternateType = addonTypes.find((t) => t.id !== addon.type);

  function handleSwap(type: AddonType) {
    setAddonType(index, type);
    setIsExpanded(false);
  }

  const header = (
    <div className={styles.typeMenu}>
      <button
        type="button"
        className={styles.header}
        onClick={() => setIsExpanded((open) => !open)}
        aria-expanded={isExpanded}
        >
        <span>{currentType?.label}</span>
        <span className={styles.chevron}>
            <img
            src={chevronDownSmall}
            alt=""
            className={isExpanded ? styles.chevronOpen : styles.chevronClosed}
            aria-hidden="true"
            />
        </span>
      </button>

      {isExpanded && alternateType && (
        <button
            type="button"
            className={styles.dropdownOption}
            onClick={() => handleSwap(alternateType.id)}
        >
            {alternateType.label}
        </button>
        )}
      </div>
  );

  return (
    <Section
      title={header}
      middle={
        <>
          <div className={styles.middleSpacer} />
          {addonModels.map((model) => (
            <RadioOptionRow
              key={model.id}
              label={getAddonModelLabel(addon.type, model.id as AddonModel)}
              selected={addon.addonModel === model.id}
              onSelect={() => setAddonModel(index, model.id as AddonModel)}
            />
          ))}
        </>
      }
    >
      {addonColors.map((c) => (
        <RadioOptionRow
          key={c.id}
          label={c.label}
          colorHex={c.hex}
          selected={addon.color === c.id}
          onSelect={() => setAddonColor(index, c.id as AddonColor)}
        />
      ))}
    </Section>
  );
}