import type { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  title: ReactNode;
  middle?: ReactNode;
  children: ReactNode;
}

export function Section({ title, middle, children }: SectionProps) {
  return (
    <div className={styles.section}>
      <div className={styles.left}>{title}</div>
      <div className={styles.middle}>{middle}</div>
      <div className={styles.right}>{children}</div>
    </div>
  );
}