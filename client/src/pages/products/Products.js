/* eslint-disable-next-line */
import React, { useEffect, useState } from "react";
import { Base_URL } from "../../service/BaseUrl";
import { useNavigate } from "react-router-dom";

import "./Products.css";
<<<<<<< HEAD
import {

  useParams
} from "react-router-dom";

=======
import Category from "./../../components/Category/Category";
import { useCart } from "../../hooks/useCart";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
>>>>>>> c8027c8e020e3440463eaf6121b1710a1a48d6f5

function Products() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
<<<<<<< HEAD
=======
  const { addToCart } = useCart();
>>>>>>> c8027c8e020e3440463eaf6121b1710a1a48d6f5

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
  // Products();

  return (
    <>
      <div className="show-category">
        <h2 className="secTitle">PRODUCTS</h2>
        <hr />
        <div className="container">
          <div className="row">
            <div className="heading">
              {data.map((res) => (
                <div className="box">
                  <h2 className="itemTitle">{res.name}</h2>
                  <img src={res.product_image}></img>
                  <p>{res.product_disc}</p>
                  <button onClick={() => navigate(`/productItems/${res.id}`)}>shop now</button>
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
