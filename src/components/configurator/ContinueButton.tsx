import { useConfiguratorStore } from '../../store/configuratorStore';
import { getTotalPrice } from '../../store/configRules';
import styles from './ContinueButton.module.css';

const priceFormatter = new Intl.NumberFormat('sv-SE');

export function ContinueButton() {
  const selection = useConfiguratorStore((state) => state.selection);
  const price = getTotalPrice(selection);

  return (
    <button
      type="button"
      className={styles.button}
    >
      Continue – {priceFormatter.format(price)} kr
    </button>
  );
}