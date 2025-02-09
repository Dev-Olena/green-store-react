import React from "react";
import FooterTitle from "./FooterTitle/FooterTitle";
import styles from "./Footer.module.css";


const Footer = () => {
    return (
        <ul className={styles['footer-content']}>
            <li>
                <FooterTitle>
                    Opening Hours:
                </FooterTitle>
                <p>Monday to Friday: 9:00 AM – 6:00 PM</p>
                <p>Saturday: 10:00 AM – 4:00 PM</p>
                <p>Sunday: closed</p>
            </li>
            <li>
                <FooterTitle>Address:

                </FooterTitle>
                <p>123 Oakwood Avenue</p>
                <p>Dublin, Ireland</p>
                <p>Tel.: +353 1 234 5678</p>
                <p>Email: info@greenstore.ie</p>
            </li>
            <li className={styles.subscribe}>
                <FooterTitle>
                    Get plant care tips, exclusive offers, & 10% off your first order straight to your inbox.
                </FooterTitle>
                <form className={styles.form}>
                    <input type="email" placeholder="Enter your email here..."/>
                    <button>Subscribe</button>
                </form>
                
            </li>
        </ul>
        
    )
}

export default Footer;