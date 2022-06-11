/* eslint-disable-next-line */
import React, { useEffect, useState } from "react";
import { Base_URL } from "../../service/BaseUrl";

import "./Products.css";
import Category from "./../../components/Category/Category";
import { useCart } from "../../hooks/useCart";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  let { id } = useParams();
  useEffect(() => {
    apiGet();
  }, [id]);

  const apiGet = async () => {
    if (id) {
      await fetch(`${Base_URL}/products/${id}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json.data);
          setData(json.data);
        });
    } else {
      await fetch(`${Base_URL}/allproducts`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json.data);
          setData(json.data);
        });
    }
  };
  const handleAddToCart = (res) => {
    addToCart(res);
  };

  return (
    <>
      <Category />
      <div className="show-category">
        <h1>products</h1>
        <hr />
        <div className="container">
          <div className="row">
            <div className="heading">
              {data.map((res) => (
                <div className="box" key={res.id}>
                  <h2 className="btn-box">{res.name}</h2>
                  <img src={res.product_image} alt={res.name}></img>
                  <p>{res.product_disc}</p>
                  {/* test */}
                  <button onClick={() => handleAddToCart(res)}>+</button>
                  {/* test */}
                  <button onClick={() => navigate(`/productItems/${res.id}`)}>
                    shop now
                  </button>
                  {/* <button>shop now</button> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
