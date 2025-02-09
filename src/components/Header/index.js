import React from "react";
import {Link} from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
    const logo = '/assets/logo.png';
    const cartIcon = '/assets/shopping_cart_100.svg';
    return (
    <header className={styles.header}>
        <Link to="/">
            <img src={logo} className={styles.logo} alt='Green Store logo'/>
        </Link>
        <h1 className={styles.title}>Green Store</h1>
        <nav className={styles['nav-bar']}>
            <Link to="/" className={styles['nav-bar-item']}>Home</Link>
            {/* <Link to="/cart" className={styles['nav-bar-item']}>Cart</Link> */}
            <Link to="/cart" className={styles['nav-bar-item']}><img src={cartIcon} className={styles['nav-bar-cart']}/></Link>
        </nav>
    </header>)
}

export default Header;