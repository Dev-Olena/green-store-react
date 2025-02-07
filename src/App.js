import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import CartContext from "./contexts/CartContexts";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import './reset.css';
import "./style.css"


function App() {
  const savedCart = localStorage.getItem('cart');
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => localStorage.setItem('cart',  JSON.stringify(cart)), [cart]);

  return (
  <CartContext.Provider value={[cart, setCart]}>
    <BrowserRouter>
      <Routes>
          <Route path= "/" element = {<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  </CartContext.Provider>
  );
  
}

export default App;
