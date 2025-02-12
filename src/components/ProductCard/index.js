import React, {useContext, useEffect} from "react";
import CartContext from "../../contexts/CartContexts";

import Button from "../Button/Button";
import styles from "./ProductCard.module.css"



const ProductCard = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const{img, price, name, id} = props.productData;
    const productName = name.toUpperCase();
   
    const addToCart = ({img, price, name, id}) => {
        setCart((prevCart) => {
            const productAdded = prevCart.find((item) => item.id === id);
            if(productAdded) {
                const cartWithoutAdded = prevCart.filter((item) => item.id !== id);
                return [...cartWithoutAdded, {img, name, price, id, quantity: productAdded.quantity + 1}]
            } else {
                return [...prevCart, {img, name, price, id, quantity: 1}]
            }
        })
        
    }
    // useEffect(() => {
    //     console.log("Updated cart:", cart);
    //   }, [cart]);
    
    return (
        <article className={styles['product-card']}>
            <img src={img} className={styles['product-img']} alt={`${name} image`}/>
            <h3 className={styles['product-name']}>{productName}</h3>
            <div className={styles['price-row']}>
                <p>{price} €</p>
                <p className={styles.heart}>♡</p>
            </div>
            <Button 
                onClick={addToCart} 
                params = {{img, price, name, id}} 
                clName='btn-add'>
                Add to cart
            </Button>
            
        </article>
    )
}

export default ProductCard;