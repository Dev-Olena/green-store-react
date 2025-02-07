import React, {useContext} from "react";
import CartContext from "../../contexts/CartContexts";
import CartList from "../../components/CartList";
import styles from "./CartPage.module.css";

const CartPage = () => {
 const [cart, setCart] = useContext(CartContext);
 const cartIcon = '/assets/shopping_cart_100.svg';
 return (
    <main className={styles['cart-container']}>
        <h2>Your cart</h2>
        {cart.lenght > 0 ? 
            <CartList /> : 
            <section className={styles['empty-cart']}>
                <img src={cartIcon} className={styles['cart-icon']}/>
                <p>Nothing here yet... Let`s fix that!</p>
            </section>
        }
        <button>Back to shopping</button>
    </main>
    
 )
}

export default CartPage;