import React from "react";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
    
    const {img, name, price, quantity} = props.data;
    
    return (
        <article className={styles['cart-item']}>
             <img src={img} className={styles.img}/> 
            <p className={styles.name}>{name}</p>
            <p>{quantity}</p>
            <p>{price} </p>
        </article>
    )
}

export default CartItem;

    