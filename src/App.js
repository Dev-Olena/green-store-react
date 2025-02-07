import React, {useState, useEffect} from "react";
import './reset.css';
import CartContext from "./contexts/CartContexts";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

import "./style.css"


function App() {
  const savedCart = localStorage.getItem('cart');
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => localStorage.setItem('cart',  JSON.stringify(cart)), [cart]);

  return (
    <div className='app-container'>
      <Header />
      <CartContext.Provider value={[cart, setCart]}>
        {/* <HomePage /> */}
        <CartPage />
      </CartContext.Provider>
    </div>
  );
  
}

export default App;
