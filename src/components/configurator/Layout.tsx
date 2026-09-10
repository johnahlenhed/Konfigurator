import type { ReactNode } from 'react';
import styles from './Layout.module.css';
import { ControlsPanel } from './ControlsPanel';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.configuratorLayout}>
      <main className={styles.stage}>
        {children}
      </main>

      <aside className={styles.controlsPanel}>
        <ControlsPanel />
      </aside>
    </div>
  );
}