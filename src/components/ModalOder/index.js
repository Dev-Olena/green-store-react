import React, { useContext } from 'react';
import CartContext from '../../contexts/CartContexts';
import Button from '../Button';
import styles from './ModalOrder.module.css'

const ModalOrder = ({handler, id}) => {
const [cart, setCart] = useContext(CartContext);

const order = cart.find((item) => item.id === id);
console.log(order);
const {img, name, price, quantity} = order;
const orderName = name.toUpperCase();

const  closeModal = () => {
  handler(false);
}
    return (
      <div className={styles.modal}>
        <section className={styles['order-section']}>
          <button onClick={closeModal} className={styles['btn-close']}>X</button>
          <article className={styles['order-info']}>
              <h2 className={styles['info-title']}>Enter required quantity</h2>
              <img src={img} className={styles.foto}/>
              <p className={styles['order-name']}>{orderName}</p>
              <p>Price: {price} €</p>
              <p>Quantity: {quantity}</p>  
          </article>
          <div className={styles['btn-container']}>
            <Button clName='btn-back'>
              Back to Store
            </Button>
            <Button>
              Proceed to Checkout 
            </Button>
          </div>
        </section>   
      </div>
    );
}

export default ModalOrder;
