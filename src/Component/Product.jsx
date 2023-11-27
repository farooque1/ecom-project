import React, { useState } from "react";
import Customhook from "./Customeapi";
import Pagination from "./Pagination";
import { useDispatch,useSelector } from "react-redux";
import { Addtocart } from "../Redux/Action";
import Navigation from "./Navigation";


function Product() {
  const [products, error, loading, filter, setFilter] = Customhook("https://fakestoreapi.com/products");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const Dispatch = useDispatch();

  const HandleCart=(item)=>{
    Dispatch(Addtocart(item))
    console.log(item);
  }

  const updateFilter = (newFilter) => {
    const filtercat = products.filter((i) => i.category === newFilter);
    setFilter(filtercat);
  };

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;

    if (!searchTerm) {
      setFilter(products);
    } else {
      const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilter(filteredProducts);
    }
  };

  if (error) {
    return <h1>Something went Wrong.....</h1>;
  }

  if (loading) {
    return <h1>Data Loading.....</h1>;
  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filter.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="container-fluid my-5">
      <div className="row my-5">
        <div className="col-lg-3">
          <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-light"
            style={{
              width: "280px",
              height: "100vh",
              position: "fixed",
              textAlign: "center",
            }}
          >
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search Product..."
                onChange={handleInputChange}
              />
            </div>

            <h1 className="fs-3 text-center">Filters Products</h1>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <button onClick={() => setFilter(products)}>All Product</button>
              </li>
              <li className="nav-item">
                <button onClick={() => updateFilter("electronics")}>
                  Electronics Product
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => updateFilter("men's clothing")}>
                  Mens Product
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => updateFilter("jewelery")}>
                  Jewelery Product
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => updateFilter("women's clothing")}>
                  Women Product
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-9">
          <div className="row">
            {currentPosts.map((item) => (
              <div className="col-4 mb-2" key={item.id}>
                <div className="card h-100">
                  <img src={item.image} height="250px" alt={item.title} />
                  <div className="card-body">
                    <p>{item.title}</p>
                    <button className="btn btn-primary" onClick={()=>HandleCart(item)}>AddTOCart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            totalPosts={filter.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
