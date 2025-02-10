import React, {useContext} from "react";
// import {Link} from "react-router-dom";
import CartContext from "../../contexts/CartContexts";
import CartList from "../../components/CartList";
import styles from "./CartPage.module.css";

const CartPage = () => {
 const [cart, setCart] = useContext(CartContext);
 const cartIcon = '/assets/shopping_cart_100.svg';

 return (
    <main className={styles['cart-main']}>
        <h2 className={styles['cart-header']}>Your cart</h2>
        {cart.length > 0 ? 
            <CartList /> : 
            <section className={styles['empty-cart']}>
                <img src={cartIcon} className={styles['cart-icon']}/>
                <p className={styles['cart-message']}>Nothinghere yet... Let`s fix that!</p>
            </section>
        }
    </main>
 )
}

export default CartPage;