import React from "react";
import './reset.css';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

import "./style.css"


function App() {
  return (
    <div className='app-container'>
      <Header />
      {/* <HomePage /> */}
      <CartPage />
    </div>
  );
  
}

export default App;
