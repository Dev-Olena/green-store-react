import React from "react";
import CartList from "../../components/CartList";

const CartPage = () => {
 return (
    <main>
        <h2>Your cart</h2>
        <CartList />
        <div>
            <button>Back to shopping</button>
            <button>Checkout</button>
        </div>


    </main>
    
 )
}

export default CartPage;