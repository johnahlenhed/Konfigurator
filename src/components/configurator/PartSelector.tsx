import { useConfiguratorStore } from '../../store/configuratorStore';
import { baseLevels } from '../../store/configOption';
import styles from './PartSelector.module.css';

export function PartSelector() {
  const baseLevel = useConfiguratorStore(
    (state) => state.selection.baseLevel
  );

  const setBaseLevel = useConfiguratorStore(
    (state) => state.setBaseLevel
  );

  return (
    <div className={styles.container}>
      {baseLevels.map((level) => (
        <button
          key={level.id}
          type="button"
          className={styles.button}
          onClick={() => setBaseLevel(level.id)}
          aria-pressed={baseLevel === level.id}
        >
          {level.label}
        </button>
      ))}
    </div>
  );
}