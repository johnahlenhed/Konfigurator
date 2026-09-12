import { useConfiguratorStore } from '../../store/configuratorStore';
import { baseColors } from '../../store/configOption';
import { RadioOptionRow } from './RadioOptionRow';
import styles from './ColorPicker.module.css';

export function ColorPicker() {
  const baseColor = useConfiguratorStore((state) => state.selection.baseColor);
  const setBaseColor = useConfiguratorStore((state) => state.setBaseColor);

  return (
    <div className={styles.container}>
      {baseColors.map((color) => (
        <RadioOptionRow
          key={color.id}
          label={color.label}
          colorHex={color.hex}
          selected={baseColor === color.id}
          onSelect={() => setBaseColor(color.id)}
        />
      ))}
    </div>
  );
}