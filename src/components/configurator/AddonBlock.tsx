import { useConfiguratorStore } from '../../store/configuratorStore';
import { getVisibleSections } from '../../store/configRules';
import { addonTypes, funktionOptions, baseColors } from '../../store/configOption';
import type { AddonType, AddonFunktion, BaseColor } from '../../types/configurator';
import styles from './AddonBlock.module.css';

interface AddonBlockProps {
  index: number;
}

export function AddonBlock({ index }: AddonBlockProps) {
  const selection = useConfiguratorStore((state) => state.selection);
  const setAddonType = useConfiguratorStore((state) => state.setAddonType);
  const setAddonFunktion = useConfiguratorStore((state) => state.setAddonFunktion);
  const setAddonColor = useConfiguratorStore((state) => state.setAddonColor);

  const addon = selection.addons[index];
  const visible = getVisibleSections(selection).addons[index];

  return (
    <div className={styles.block}>
      <div className={styles.typeRow}>
        {addonTypes.map((t) => (
          <button
            key={t.id}
            type="button"
            className={styles.typeButton}
            onClick={() => setAddonType(index, t.id as AddonType)}
            aria-pressed={addon.type === t.id}
          >
            {t.label}
          </button>
        ))}
      </div>

      {visible.funktion && (
        <div className={styles.swatchRow}>
          {funktionOptions.map((f) => (
            <button
              key={f.id}
              type="button"
              className={styles.funktionSwatch}
              onClick={() => setAddonFunktion(index, f.id as AddonFunktion)}
              aria-pressed={addon.funktion === f.id}
              aria-label={f.label}
            />
          ))}
        </div>
      )}

      {visible.color && (
        <div className={styles.swatchRow}>
          {baseColors.map((c) => (
            <button
              key={c.id}
              type="button"
              className={styles.colorSwatch}
              style={{ backgroundColor: c.hex }}
              onClick={() => setAddonColor(index, c.id as BaseColor)}
              aria-pressed={addon.color === c.id}
              aria-label={c.label}
            />
          ))}
        </div>
      )}
    </div>
  );
}