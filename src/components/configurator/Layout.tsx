import type { ReactNode } from 'react';
import styles from './Layout.module.css';
import { PartSelector } from './PartSelector';

interface LayoutProps {
  children: ReactNode; // the R3F <Canvas>, or a placeholder stand-in for now
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.configuratorLayout}>
      <main className={styles.stage}>{children}</main>
      <aside className={styles.controlsPanel}>
        <PartSelector />
      </aside>
    </div>
  );
}