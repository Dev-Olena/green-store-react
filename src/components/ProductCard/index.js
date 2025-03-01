import React, {useContext, useState, useEffect} from "react";
import CartContext from "../../contexts/CartContexts";
import ModalOrder from "../ModalOder";
import Button from "../Button";
import styles from "./ProductCard.module.css"



const ProductCard = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const [isOrderOpen, setIsOrderOpen] = useState(false);
    
    useEffect(() => {
        if(isOrderOpen) {
          document.body.classList.add(styles['modal-open']);
        } else {
          document.body.classList.remove(styles['modal-open']);
        }
      
        return () => document.body.classList.remove('modal-open');
      }, [isOrderOpen]);
    
    const{img, price, name, id} = props.productData;
    
    const productName = name.toUpperCase();

    // перевіряємо наявність товару в кошику
    const isAdded = cart.some((item) => item.id === id);
    const btnText = isAdded ? 'In cart' : 'Add to cart';
   
    const addToCart = ({img, price, name, id}) => {
        setCart((prevCart) => {
            const addedProduct = prevCart.find((item) => item.id === id);
            if(addedProduct) {
                const cartWithoutAdded = prevCart.filter((item) => item.id !== id);
                return [...cartWithoutAdded, {img, name, price, id, quantity: addedProduct.quantity + 1}]
            } else {
                return [...prevCart, {img, name, price, id, quantity: 1}]
            }
        });

        setIsOrderOpen(true);
        
    }
    
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
               {btnText}
            </Button>
            {isOrderOpen && <ModalOrder id={id} handler = {setIsOrderOpen}/>}
        </article>
    )
}

export default ProductCard;