/* eslint-disable-next-line */
import React, { useEffect, useState } from "react";
import { Base_URL } from "../../service/BaseUrl";

import "./Products.css";
import Category from "./../../components/Category/Category";
import { useParams } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiGet();
  }, []);

  let { id } = useParams();

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
                  <button>shop now</button>
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
