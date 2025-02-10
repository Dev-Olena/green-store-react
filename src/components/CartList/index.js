import React, {useContext} from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import CartContext from "../../contexts/CartContexts";
import styles from "./CartList.module.css";


const CartList = () => {
    const [cart, setCart] = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    

    return (
        <section className={styles['cart-list-container']}>
            
                <p className={styles.quantity}>Quantity</p>
                <p>Price,  €</p>
                <button onClick={() => setCart([])}>Clear cart</button>
           
                {cart.map((item) => <CartItem key={item.id} data={item} className={styles['cart-list-container']}/>)}
                <p className={styles.total}>
                    Total: 
                </p>
                <p className={styles['total-price']}>
                    {totalPrice} €
                </p>
                <Link to="/" className={styles ['btn-back']}>
                    <button >
                    Back to shopping
                </button>
                </Link>
                
                <button className={styles['btn-checkout']}>
                    Checkout
                </button>
           
            
            
            
        </section>
    )
}

export default CartList;



{/* <div className={styles['cart-list-container']}>
<button onClick={() => setCart([])}>Clear cart</button>
<section>
    {cart.map((item) => <CartItem key={item.id} data={item}/>)}
</section>
<p>Total: {totalPrice} €</p>
<button>Checkout</button>

</div> */}