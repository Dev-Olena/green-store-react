import React from "react";
import styles from "./FooterTitle.module.css";

const FooterTitle = ({children}) => {
    return (
        <h4 className={styles.title}>
            {children}
        </h4>
    )
}

export default FooterTitle;