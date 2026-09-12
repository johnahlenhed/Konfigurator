import { useState } from 'react';
import { useConfiguratorStore } from '../../store/configuratorStore';
import { addonTypes, funktionOptions, baseColors } from '../../store/configOption';
import type { AddonType, AddonFunktion, BaseColor } from '../../types/configurator';
import { RadioOptionRow } from './RadioOptionRow';
import styles from './AddonBlock.module.css';

interface AddonBlockProps {
  index: number;
}

export function AddonBlock({ index }: AddonBlockProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const selection = useConfiguratorStore((state) => state.selection);
  const setAddonType = useConfiguratorStore((state) => state.setAddonType);
  const setAddonFunktion = useConfiguratorStore((state) => state.setAddonFunktion);
  const setAddonColor = useConfiguratorStore((state) => state.setAddonColor);

  const addon = selection.addons[index];
  const currentType = addonTypes.find((t) => t.id === addon.type);
  const alternateType = addonTypes.find((t) => t.id !== addon.type);

  function handleSwap(type: AddonType) {
    setAddonType(index, type);
    setIsExpanded(false);
  }

  return (
    <div className={styles.block}>
      <button
        type="button"
        className={styles.header}
        onClick={() => setIsExpanded((open) => !open)}
        aria-expanded={isExpanded}
      >
        <span>{currentType?.label}</span>
        <span className={styles.chevron}>{isExpanded ? '⌃' : '⌄'}</span>
      </button>

      {isExpanded && alternateType && (
        <RadioOptionRow
          label={alternateType.label}
          selected={false}
          onSelect={() => handleSwap(alternateType.id)}
        />
      )}

      <div className={styles.columns}>
        <div className={styles.column}>
          {funktionOptions.map((f) => (
            <RadioOptionRow
              key={f.id}
              label={f.label}
              selected={addon.funktion === f.id}
              onSelect={() => setAddonFunktion(index, f.id as AddonFunktion)}
            />
          ))}
        </div>

        <div className={styles.column}>
          {baseColors.map((c) => (
            <RadioOptionRow
              key={c.id}
              label={c.label}
              colorHex={c.hex}
              selected={addon.color === c.id}
              onSelect={() => setAddonColor(index, c.id as BaseColor)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}