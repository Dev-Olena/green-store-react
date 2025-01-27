import React from "react";
import styles from './Header.module.css';

const Header = () => {
    const logo = '/assets/logo.png';
    return (<header className={styles.header}>
        <img src={logo} className={styles.logo} alt='Green Store logo'/>
        <h1 className={styles.title}>Green Store</h1>
    </header>)
}

export default Header;