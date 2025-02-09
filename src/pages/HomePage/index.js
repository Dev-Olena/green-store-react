import React from "react";
import Header from "../../components/Header";
import Products from "../../components/Products";
import Footer from "../../components/Footer/Footer";
import styles from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div className={styles['home-page-container']}>
        <Header />
        <main>
            {/* todo banner */}
            {/* todo filters */}
            <Products />
        </main>
        <Footer />
        </div>
    )
}

export default HomePage;