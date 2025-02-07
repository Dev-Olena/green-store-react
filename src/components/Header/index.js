import React from "react";
import {Link} from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
    const logo = '/assets/logo.png';
    return (
    <header className={styles.header}>
        <Link to="/">
            <img src={logo} className={styles.logo} alt='Green Store logo'/>
        </Link>
        <h1 className={styles.title}>Green Store</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    </header>)
}

export default Header;