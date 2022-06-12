/* eslint-disable-next-line */
import React, { useEffect, useState } from "react";
import { Base_URL } from "../../service/BaseUrl";

import { useCart } from "../../hooks/useCart";
import { useCartContext } from "../../hooks/useCartContext";
import "./ProductItemDetails.css";
import {

  useParams
} from "react-router-dom";


function ProductItemDetails() {
  const [data, setData] = useState([]);
  const [feed, setFeed]= useState([]);

  const { addToCart, newCart } = useCart();
  const { cart } = useCartContext();

  useEffect(() => {
    apiGet();
    apiPost();
  }, []);


  let { id } = useParams();

  const apiGet = async () => {


    await fetch(`${Base_URL}/product/items/item/${id}`)
      .then((response) => response.json())
      .then((json) => {
       // console.log(json.data);
        setData(json.data);
      });


  };

  const apiPost = async () => {


    await fetch(`${Base_URL}/feedback/store`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.feed);
        setFeed(json.feed);
      });

    }

  // console.log(cart);
  const handleAddToCart = (res) => {
    addToCart(res);
    console.log(res);
    console.log(newCart)

    // if (cart.length === 0) {
    //   cart.push(res);
    //   console.log(cart);
    // } else {
    //   cart.forEach((item) => {
    //     if (item.id !== res.id) {
    //       cart.push(res);
    //       console.log(cart);
    //     } else if (item.id === res.id) {
    //       console.log("exist");
    //     }
    //   });
    //   // for (let i = 0; i < cart.length; i++) {
    //   //   cart[i].id !== res.id
    //   //     ? cart.push(res) && console.log(cart)
    //   //     : alert("exist");
    //   // }
    // }
  };

  // Products();

  return (
    <>
      <div className="show-category">
        <h2 className="secTitle">PRODUCT ITEM DETAILS</h2>
        <hr />
        <div className="container">
          <div className="detailsContainer">
            <div className="detailsContainerSec1">
              <h5 className="itemDetailStyle">SKU      :  <span style={{ color: "#165BAA" }}>{data.sku}</span></h5>
              <h5 className="itemDetailStyle">COLOR    :  <span style={{ color: "#165BAA" }}>{data.color}</span></h5>
              <h5 className="itemDetailStyle">SIZE     :  <span style={{ color: "#165BAA" }}>{data.size}</span></h5>
              <h5 className="itemDetailStyle">PRICE    :  <span style={{ color: "#165BAA" }}>{data.price}</span></h5>
              <h5 className="itemDetailStyle">QUANTITY :  <span style={{ color: "#165BAA" }}>{data.qty}</span></h5>
            </div>
            <div className="detailsContainerSec2">
              <h3>Add QUANTITY</h3>
              
<div class="input-group">
  <span className="input-group-text"></span>
  <textarea className="form-control" aria-label="With textarea"></textarea>
  
</div>
<div>
<button type="button" className="btn btn-secondary btn-lg">Add To Cart</button>
</div>
            </div>
          </div>

          <h2 className="secTitle">Feedbacks</h2>
          <hr />
          <h5 style={{marginTop:40,marginBottom:40}} className="secTitle">Feedbacks of customer will add here</h5>

          <h4 className="secTitle">ITEM IMAGES</h4>
          <hr />
          <div className="row">
            <div className="heading">

              <div className="boxImage">
                <img src={"http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" + data.image1} />
              </div>
              <div className="boxImage">
                <img src={"http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" + data.image2} />
              </div>
              <div className="boxImage">
                <img src={"http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" + data.image3} />
              </div>
              <div className="boxImage">
                <img src={"http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" + data.image4} />
              </div>
              <div className="boxImage">
                <img src={"http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" + data.image5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItemDetails;
