import { useConfiguratorStore } from '../../store/configuratorStore';
import { baseColors } from '../../store/configOption';
import styles from './ColorPicker.module.css';

export function ColorPicker() {
  const baseColor = useConfiguratorStore((state) => state.selection.baseColor);
  const setBaseColor = useConfiguratorStore((state) => state.setBaseColor);

  return (
    <div className={styles.row}>
      {baseColors.map((color) => (
        <button
          key={color.id}
          type="button"
          className={styles.swatch}
          style={{ backgroundColor: color.hex }}
          onClick={() => setBaseColor(color.id)}
          aria-pressed={baseColor === color.id}
          aria-label={color.label}
        />
      ))}
    </div>
  );
}