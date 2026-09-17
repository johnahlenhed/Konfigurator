import styles from './RadioOptionRow.module.css';

interface RadioOptionRowProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
  subtext?: string;      // e.g. "Info" under base levels
  colorHex?: string;     // when set, the dot shows this color once selected
}

export function RadioOptionRow({ label, selected, onSelect, subtext, colorHex }: RadioOptionRowProps) {
  const isWhiteSelected = selected && colorHex?.toLowerCase() === '#f8f6e5';

  return (
    <button type="button" className={styles.row} onClick={onSelect} aria-pressed={selected}>
      <span
        className={styles.dot}
        style={
          selected && colorHex
            ? {
                backgroundColor: colorHex,
                borderColor: isWhiteSelected ? '#342000' : 'transparent',
              }
            : undefined
        }
        data-selected={selected}
      />
      <span className={styles.labelGroup}>
        <span className={styles.label}>{label}</span>
        {subtext && <span className={styles.subtext}>{subtext}</span>}
      </span>
    </button>
  );
}