import React from 'react';
import styles from './Button.module.css';

const Button = ({onClick, params, clName, children}) => {
    const style = `${styles.btn} ${clName ? styles[clName] : ""}`.trim();

    const handleClick = () => {
        if (onClick) {
            params ? onClick(params) : onClick();
        }
    }

    return (
        <button className={style} onClick={handleClick}>
            {children}
        </button>
    );
}

export default Button;
