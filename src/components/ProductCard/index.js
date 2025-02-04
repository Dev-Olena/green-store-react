import React from "react";
import styles from "./ProductCard.module.css"



const ProductCard = (props) => {
    const {img, price, name} = props.productData
    const productName = name.toUpperCase();
    return (
        <article className={styles['product-card']}>
            <img src={img} className={styles['product-img']} alt={`${name} image`}/>
            <h3>{productName}</h3>
            <div className={styles['price-row']}>
                <p>{price} €</p>
                <p className={styles.heart}>♡</p>
            </div>
            <button className={styles['btn-add']}>Add to cart</button>
            
        </article>
    )
}

export default ProductCard;