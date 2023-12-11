import styles from './header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header(){
    console.log(igniteLogo)
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Ignite Logo" />
            <strong>Ignite feed</strong>
        </header>
    );
}