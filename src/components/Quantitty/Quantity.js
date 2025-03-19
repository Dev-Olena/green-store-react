import React, { useContext } from 'react';
import CartContext from '../../contexts/CartContexts';
import styles from "./Quantity.module.css";

const Quantity = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const [id, quantity] = props.data;

    const decreaseCartItem = (id) => {
        setCart((prevCart) => {
             return prevCart.map((item) => {
                return item.id === id && item.quantity > 1 
                ? {...item, quantity: item.quantity - 1}
                : item
            } )
        });
    }

    const inreaseCartItem = (id) => {
        setCart((prevCart) => {
            return prevCart.map((item) => {
               return item.id === id
               ? {...item, quantity: item.quantity + 1}
               : item
           })
       });
    };

    const changeQuantity = (event, id) => {
        console.log(event.target.value)
        const value = parseInt(event.target.value);
        if(!isNaN(value) && value >= 1) {
             setCart((prevCart) => {
                return prevCart.map((item) => {
                    return item.id === id
                    ? {...item, quantity: value}
                    : item
                })
            });
        }
    }
    
    return (
        <div className={styles['quantity-container']}>
            <button onClick={() => decreaseCartItem(id)}>-</button>
            <input  className={styles.input} 
                    name="quantity"    
                    value={quantity}
                    onChange={(event) => changeQuantity(event, id)}/>
            <button onClick={() => inreaseCartItem(id)}>+</button>   
        </div>
    );
}

export default Quantity;
