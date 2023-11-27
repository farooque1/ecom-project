import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearcart, removetocart } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

function Checkout() {

    const data = useSelector((s) => s.ProductReducer.cart);
  console.log(data);
  const dispatch=useDispatch();

  const  HandleRemove=(item)=>{
      dispatch(removetocart(item));
  }

  const Navigate=useNavigate();

  const HandleOrder=()=>{
    dispatch(clearcart());
    Navigate("/orderconfirm");
    }

return (
    <>
      <h1 className="my-5">Checkout</h1>
      <div className="row">
        <div className="col-lg-6">
          {data.map((item) => (
            <ul className="list-group my-1" key={item}>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      width="50px"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="col-md-8 my-3">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <h5 className="card-title">Rs. {item.price}</h5>
                    </div>
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      marginTop: "30px",
                    }}
                  >
                    <p className="card-text">
                      <small className="text-body-secondary">
                        <button
                          className="btn btn-danger"
                          onClick={() => HandleRemove(item.id)}
                        >
                          Remove
                        </button>
                      </small>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
        <div className="col-lg-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Address</h5>
              <p className="card-text">
              Address: 61, Idealake House, Dr. S. S. Rao Road, Parel (East), Mumbai - 400012
              </p>
            </div>
          </div>
          <div className="d-grid gap-2">
          <button className="btn btn-primary my-1" type="button" onClick={HandleOrder}> COD </button> 
          <button className="btn btn-primary" type="button" onClick={HandleOrder}> Online </button> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
