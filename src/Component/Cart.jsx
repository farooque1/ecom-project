import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removetocart } from "../Redux/Action";
import { Link } from "react-router-dom";

function Cart() {

    const data = useSelector((s) => s.ProductReducer.cart);
  console.log(data);

  const dispatch=useDispatch();

const  HandleRemove=(item)=>{
    dispatch(removetocart(item));
}

  return (
    <>
      {data.length ===0 ? (
        <div className="card my-5">
           <h3>No Product Selected</h3>
           <Link to="/">
            <button className="btn btn-primary">Go to Home</button>
           </Link> 
          </div>
      ) : data.map((item) => (
        <div className="card my-5" key={item.id} style={{height:'250px'}}>
          <div className="row">
            <div className="col-md-4">
              <img src={item.image} className="img-fluid rounded-start" alt={item.title} width="150px" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h5 className="card-title">Rs. {item.price}</h5>
                <p className="card-text">
                {item.description}
                </p>
              </div>
            </div>
            <div className="col-md-2" style={{display:'flex',justifyContent:'center',textAlign:'center',marginTop:'70px'}}>
            <p className="card-text">
                  <small className="text-body-secondary">
                    <button className="btn btn-danger" onClick={()=>HandleRemove(item.id)}>Remove</button>
                  </small>
                </p>
            </div>
          </div>
        </div>
      ))}
      <Link to="/checkout">
      <button className="btn btn-warning">Check Out</button>
      </Link>

    </>
  );
}

export default Cart;
