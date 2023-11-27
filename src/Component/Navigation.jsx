import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Navigation() {

const cartvalue=useSelector((s)=>s.ProductReducer.cart);

console.log(cartvalue.length);

    return (
    <>
  <header className="p-3 text-bg-dark fixed-top">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning me-2">Sign-up</button>
          <Link to="/cart">
          <button type="button" className="btn btn-outline-light">CART {cartvalue.length}</button>
          </Link>
        </div>
      </div>
    </div>
  </header>

    </>
  )
}

export default Navigation