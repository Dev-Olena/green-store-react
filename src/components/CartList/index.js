import React, {useContext} from "react";
import CartContext from "../../contexts/CartContexts";


const CartList = () => {
    const [cart, setCart] = useContext(CartContext);
    // console.log(cart[1])

    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    

    return (
        <section>
            {cart.map((item) => {return <p key={item.id}> {`${item.name} ${item.price} € Quantity: ${item.quantity}`}</p>})}
            <p>Total: {totalPrice} €</p>
        </section>
    )
}

export default CartList;