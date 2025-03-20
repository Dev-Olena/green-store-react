import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../contexts/CartContexts';
import Quantity from '../Quantitty/Quantity.js';
import Button from '../Button';
import styles from './ModalOrder.module.css'

const ModalOrder = ({handler, id}) => {
  const [cart, setCart] = useContext(CartContext);
  const navigate = useNavigate();
  
  const order = cart.find((item) => item.id === id);
  const {img, name, price, quantity} = order;
  const orderName = name.toUpperCase();
  
  const goToCart = () => {
    navigate("/cart")
  }
  
  const  closeModal = () => {
    handler(false);
  }
  
  return (
    <div className={styles.modal}>
      <section className={styles['order-section']}>
        <button 
          onClick={closeModal} 
          className={styles['btn-close']}>
            X
        </button>
        <article className={styles['order-info']}>
          <h2 className={styles['info-title']}>
            Enter required quantity
          </h2>
          <img src={img} className={styles.foto}/>
          <p className={styles['order-name']}>{orderName}</p>
          <p>Price: {price} €</p>
          {/* <p>Quantity: {quantity}</p>   */}
          <Quantity clName = 'order-quantity' data={[id, quantity]}/>
        </article>
        <div className={styles['btn-container']}>
          <Button 
            clName='btn-white'
            onClick={closeModal}>
              Back to Store
          </Button>
          <Button
            onClick={goToCart}>
              Proceed to Checkout 
          </Button>
        </div>
      </section>   
    </div>
  );
}

export default ModalOrder;
