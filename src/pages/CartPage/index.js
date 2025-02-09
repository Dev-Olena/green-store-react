import React, {useContext} from "react";
import {Link} from "react-router-dom";
import CartContext from "../../contexts/CartContexts";
import Header from "../../components/Header";
import CartList from "../../components/CartList";
import Footer from "../../components/Footer/Footer";
import styles from "./CartPage.module.css";

const CartPage = () => {
 const [cart, setCart] = useContext(CartContext);
 const cartIcon = '/assets/shopping_cart_100.svg';
 return (
    <div className={styles['cart-container']}>
        <Header />
        <main className={styles['cart-main']}>
            <h2 className={styles['cart-header']}>Your cart</h2>
            {cart.length > 0 ? 
                <CartList /> : 
                <section className={styles['empty-cart']}>
                    <img src={cartIcon} className={styles['cart-icon']}/>
                    <p className={styles['cart-message']}>Nothing here yet... Let`s fix that!</p>
                </section>
            }
        <Link to="/">
            <button>Back to shopping</button>
        </Link>
        </main>
        <Footer />
    </div>
 )
}

export default CartPage;