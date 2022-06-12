/* eslint-disable-next-line */
import React, { useEffect, useState } from "react";
import { Base_URL } from "../../service/BaseUrl";

import { useCart } from "../../hooks/useCart";
import { useCartContext } from "../../hooks/useCartContext";
import "./ProductItemDetails.css";
import { useParams } from "react-router-dom";
import { useAuthContext } from "./../../hooks/useAuthContext";

function ProductItemDetails() {
  const [data, setData] = useState([]);
  const [feed, setFeed] = useState([]);
  // const [userFeed, setUserFeed] = useState([]);
  const { user } = useAuthContext();
  const [feedBack, setfeedBack] = useState(null);
  const { addToCart } = useCart();
  const { cart } = useCartContext();
  // console.log(user);

  const handelSubmit = (e) => {
    e.preventDefault();
    setfeedBack(feed);
    console.log(feedBack);
    apiPost();
  };

  useEffect(() => {
    apiGet();
    // apiPost();
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
    await fetch(`${Base_URL}/feedback/store`, {
      method: "POST",
      body: JSON.stringify({
        feedback: feedBack,
        user_id: user.userId,
        item_id: id,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.success === "Feedback added successfully") {
          console.log("success");
        } else {
          console.log("error");
        }
        // setFeed(json.feed);
      });
  };

  // console.log(cart);
  const handleAddToCart = (res) => {
    addToCart(res);
    console.log(res);
    // console.log(newCart);

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
              <h5 className="itemDetailStyle">
                SKU : <span style={{ color: "#165BAA" }}>{data.sku}</span>
              </h5>
              <h5 className="itemDetailStyle">
                COLOR : <span style={{ color: "#165BAA" }}>{data.color}</span>
              </h5>
              <h5 className="itemDetailStyle">
                SIZE : <span style={{ color: "#165BAA" }}>{data.size}</span>
              </h5>
              <h5 className="itemDetailStyle">
                PRICE : <span style={{ color: "#165BAA" }}>{data.price}</span>
              </h5>
              <h5 className="itemDetailStyle">
                QUANTITY : <span style={{ color: "#165BAA" }}>{data.qty}</span>
              </h5>
            </div>
            <div className="detailsContainerSec2">
              <h3>Add QUANTITY</h3>

              <div className="input-group">
                <span className="input-group-text"></span>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg"
                  onClick={() => handleAddToCart(data)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          <form
            className="row gx-3 gy-2 align-items-center"
            // onSubmit={handelSubmit}
          >
            <div className="col-sm-6">
              <label
                className="visually-hidden"
                htmlfor="specificSizeInputName"
              >
                your feedback
              </label>
              <textarea
                onChange={(e) => setFeed(e.target.value)}
                className="form-control"
                aria-label="With textarea"
              ></textarea>
              {/* <input  onChange= {(e)=>setFeed(e.target.value)} type="text" class="form-control" id="specificSizeInputName" placeholder="write somthing"/> */}
            </div>
            <div className="col-sm-3">
              <button
                type="button"
                className="btn btn-dark px-4 py-2"
                onClick={handelSubmit}
              >
                {" "}
                submit
              </button>
            </div>
          </form>

          <h4 className="secTitle">ITEM IMAGES</h4>
          <hr />
          <div className="row">
            <div className="heading">
              <div className="boxImage">
                <img
                  src={
                    "http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" +
                    data.image1
                  }
                />
              </div>
              <div className="boxImage">
                <img
                  src={
                    "http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" +
                    data.image2
                  }
                />
              </div>
              <div className="boxImage">
                <img
                  src={
                    "http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" +
                    data.image3
                  }
                />
              </div>
              <div className="boxImage">
                <img
                  src={
                    "http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" +
                    data.image4
                  }
                />
              </div>
              <div className="boxImage">
                <img
                  src={
                    "http://ecommerce-2.s3-website-us-east-1.amazonaws.com/" +
                    data.image5
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItemDetails;
