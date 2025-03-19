import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import CartContext from "../../contexts/CartContexts";
import Button from "../Button";
import styles from "./CartList.module.css";


const CartList = () => {
    const [cart, setCart] = useContext(CartContext);
    const navigate = useNavigate();

    const clearCart = () => {
        setCart([])
    }

    const goBack = () => {
        navigate("/");
    }

    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

    

    return (
        <section className={styles['cart-list-container']}>
            
                <p className={styles.quantity}>
                    Quantity
                </p>
                <p className={styles.price}>
                    Price,  €
                </p>
                <Button 
                    onClick={clearCart}
                    clName='del-btn'>
                    Clear cart
                </Button>
                <div className={styles.line}></div>
                {cart.map((item) => <CartItem 
                    key={item.id} 
                    data={item} 
                    className={styles['cart-list-container']}/>
                )}
                <div className={`${styles.line} ${styles['bottom-line']}`}></div>
                <Button 
                    onClick={goBack} 
                    clName='btn-back'>
                        {/* Todo arrow <span></span> */}
                        Back to Store
                </Button>
                <div className={styles['total-check-container']}>
                    <p className={styles.bold}>
                    {totalPrice} €
                    </p>
                    <Button>
                        Checkout
                    </Button>
                </div>
        </section>
    )
}

export default CartList;