import { useConfiguratorStore } from '../../store/configuratorStore';
import { baseLevels } from '../../store/configOption';
import { RadioOptionRow } from './RadioOptionRow';
import styles from './PartSelector.module.css';

export function PartSelector() {
  const baseLevel = useConfiguratorStore((state) => state.selection.baseLevel);
  const setBaseLevel = useConfiguratorStore((state) => state.setBaseLevel);

  return (
    <div className={styles.container}>
      {baseLevels.map((level) => (
        <RadioOptionRow
          key={level.id}
          label={level.label}
          subtext="Info"
          selected={baseLevel === level.id}
          onSelect={() => setBaseLevel(level.id)}
        />
      ))}
    </div>
  );
}