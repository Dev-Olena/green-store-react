import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Page.module.css";

const Page = ({children}) => {
    return (
    <div className={styles['page-container']}>
        <Header />
            {children}
        <Footer />
    </div>
    )
}

export default Page;
