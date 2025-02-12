import React from 'react';
import styles from './Button.module.css';

const Button = ({onClick, params, clName, children}) => {
    const style = `${styles.btn} ${styles[clName]}`
    return (
        <button className={style} onClick={() => {onClick(params)}}>
            {children}
        </button>
    );
}

export default Button;
