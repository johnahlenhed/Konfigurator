import { useConfiguratorStore } from '../../store/configuratorStore';
import { baseLevels } from '../../store/configOption';
import styles from './StageOverlay.module.css';

export function StageOverlay() {
  const baseLevel = useConfiguratorStore((state) => state.selection.baseLevel);
  const currentLevel = baseLevels.find((level) => level.id === baseLevel);

  return (
    <>
      <div className={styles.logo}>EDIT/</div>
      {currentLevel && <p className={styles.description}>{currentLevel.description}</p>}
    </>
  );
}