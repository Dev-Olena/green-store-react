import React, {useContext} from "react";
import CartContext from "../../../contexts/CartContexts";
import Quantity from "../../Quantitty/Quantity.js";
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
    
    return (
        <article className={styles['cart-item']}>
             <img src={img} className={styles.img}/> 
            <p className={styles.name}>{name}</p>
            <Quantity data={[id, quantity]}/>
            <p>{price} </p>
            <button className={styles['btn-del']} onClick={() => removeFromCart(id)}>
                <img src={delIcon} className={styles['del-icon']} alt="Product delete button"/>
            </button>
            
        </article>
    )
}

export default CartItem;

    