import React, {useContext} from "react";
import {Link} from "react-router-dom";
import CartContext from "../../contexts/CartContexts";
import Header from "../../components/Header";
import CartList from "../../components/CartList";
import styles from "./CartPage.module.css";

const CartPage = () => {
 const [cart, setCart] = useContext(CartContext);
 const cartIcon = '/assets/shopping_cart_100.svg';
 return (
    <>
        <Header />
        <main className={styles['cart-container']}>
            <h2>Your cart</h2>
            {cart.lenght > 0 ? 
                <CartList /> : 
                <section className={styles['empty-cart']}>
                    <img src={cartIcon} className={styles['cart-icon']}/>
                    <p>Nothing here yet... Let`s fix that!</p>
                </section>
            }
        <Link to="/">
            <button>Back to shopping</button>
        </Link>
    </main>
    </>
 )
}

export default CartPage;