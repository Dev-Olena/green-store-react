import React, {useContext} from "react";
import CartContext from "../../../contexts/CartContexts";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const {img, name, price, id, quantity} = props.data;
    const delIcon = "/assets/delete.svg";

    const removeFromCart = (id) => {
        setCart((prevCart) => {
            return prevCart.filter((product) => product.id != id);
        })
    }

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
        <article className={styles['cart-item']}>
             <img src={img} className={styles.img}/> 
            <p className={styles.name}>{name}</p>
            <div className={styles['quantity-container']}>
                <button onClick={() => decreaseCartItem(id)}>-</button>
                <input  className={styles.input} name="quantity" value={quantity}
                onChange={(event) => changeQuantity(event, id)}/>
                <button onClick={() => inreaseCartItem(id)}>+</button>
            </div>
            <p>{price} </p>
            <button className={styles['btn-del']} onClick={() => removeFromCart(id)}>
                <img src={delIcon} className={styles['del-icon']} alt="Product delete button"/>
            </button>
            
        </article>
    )
}

export default CartItem;

    