import styles from './HookIcon.module.css';
import hookSvg from '../../assets/at-icons_hook.svg';

export function HookIcon() {
  return <img src={hookSvg} alt="hook icon" className={styles.icon} aria-hidden="true" />;
}