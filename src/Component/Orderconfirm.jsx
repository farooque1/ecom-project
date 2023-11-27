import React from 'react'
import { Link } from 'react-router-dom'

function Orderconfirm() {
  return (
    <div>
    <h1>Order Confirm</h1>
    <h3>Congratulations, on your purchase. The order has been received and is being processed.</h3>
    <Link to="/">
        <button className='btn btn-primary'>Continue Shopping</button>
    </Link>
    </div>
  )
}

export default Orderconfirm