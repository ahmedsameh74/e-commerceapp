/* eslint-disable-next-line */
import React, { useEffect, useState } from "react";
import { Base_URL } from "../../service/BaseUrl";

import "./Products.css";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiGet();
  }, []);

  const apiGet = async () => {
    await fetch(`${Base_URL}/allproducts`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        setData(json.data);
      });
  };
  // Products();

  return (
    <>
      <div className="show-category">
        <h1>products</h1>
        <hr />
        <div className="container">
          <div className="row">
            <div className="heading">
              {data.map((res) => (
                <div className="box">
                  <h2 className="btn-box">{res.name}</h2>
                  <img src={res.product_image}></img>
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
