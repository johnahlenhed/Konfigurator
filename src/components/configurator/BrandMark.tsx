import styles from './BrandMark.module.css';

export function BrandMark() {
  return (
    <div className={styles.mark}>
      gedden<span className={styles.registered}>®</span>
    </div>
  );
}