import { useState } from 'react'
import './App.css'
import Product from './Component/Product'
import Navigation from './Component/Navigation'
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import Cart from './Component/Cart';
import Checkout from './Component/Checkout';
import Orderconfirm from './Component/Orderconfirm';


function App() {

  return (
    <Router>
    <>
      {/* <h1>Product list</h1>
      <p>
       1- Product list
       2- Paginations
       3- filter options
       4- search

       5- Redux store
       6- AddToCart
       7- RemovetoCart
       8- TotalPrice
       9- Increment and Decrement Product
       10-payment Getway 

      </p> */}
      <Navigation />
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/orderconfirm" element={<Orderconfirm />}></Route>
        </Routes>
    </>
    </Router>

  )
}

export default App
