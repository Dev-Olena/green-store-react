import React from "react";
import { plants } from "../../data/plants.js";
import ProductCard from "../ProductCard/ProductCard.js";
import styles from "./Products.module.css";

const Products = () => {
  
    return (
        <section className={styles['products-section']}>
            {plants.map((plant) => <ProductCard productData={plant} key={plant.id}/>
            )}
        </section>
    )
}

export default Products;