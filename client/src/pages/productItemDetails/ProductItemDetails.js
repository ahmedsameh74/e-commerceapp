/* eslint-disable-next-line */
import React, { useEffect, useState } from "react";
import { Base_URL } from "../../service/BaseUrl";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./ProductItemDetails.css";
import { useParams } from "react-router-dom";
import { useCart } from "./../../hooks/useCart";

function ProductItemDetails() {
  const [data, setData] = useState([]);
  const [feed, setFeed] = useState("");
  const [itemFeedbacks, setItemFeedbacks] = useState([]);
  const { user } = useAuthContext();

  let { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(null);
  // console.log(JSON(user));
  //console.log(user.userId);
  // console.log(feed);
  // console.log(id);
  // console.log("new cart from details",cart)

  const handelSubmit = (e) => {
    //console.log(user);

    // setfeedBack(feed);
    //console.log(feed);
    if (!user) {
      alert("please login first");
    }
    if (feed === "") {
      alert("enter your feedback then submit");
    }

    apiPost(feed);

    e.preventDefault();
    e.target[0].value = "";
  };

  useEffect(() => {
    apiGet();
    apiGetFeedBck();
  }, []);

  const apiGet = async () => {
    await fetch(`${Base_URL}/product/items/item/${id}`)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json.data);
        setData(json.data);
      });
  };

  const apiGetFeedBck = async () => {
    await fetch(`${Base_URL}/feedback/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.message === "feedbacks is empty for this item") {
          setItemFeedbacks([]);
        } else {
          setItemFeedbacks(json);
        }
      });
  };

  const apiPost = async (newfeedback) => {
    console.log("feedback: ", newfeedback);
    console.log("user_id: ", user.userId);

    console.log("item_id: ", id);

    await fetch(`${Base_URL}/feedback/store`, {
      method: "POST",
      body: JSON.stringify({
        feedback: newfeedback,
        user_id: user.userId,
        item_id: id,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.success === "Feedback added successfully") {
          alert("your feedback sent successfully");
          setFeed("");
          console.log("success");
          apiGetFeedBck();
        } else {
          console.log("error");
        }
        setFeed(json.feed);
      });
  };
  const handleAddToCart = () => {
    //console.log(data, quantity);
    //addToCart(data, quantity);
    if (user) {
      addToCart(data, quantity);
      alert("item added to cart,show your cart form more details");
      setQuantity(0);
    } else {
      alert("Please login first");
    }
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
              {/* <h5>Add QUANTITY</h5> */}

              <div
                style={{ marginBottom: 15, height: "50px" }}
                className="input-group"
              >
                <input
                  style={{ textAlign: "center" }}
                  onChange={(e) => setQuantity(e.target.value)}
                  type="number"
                  value={quantity}
                  className="form-control"
                  id="specificSizeInputName"
                  placeholder="add quantity"
                />
              </div>
              <div style={{ margin: "auto", width: "120px" }}>
                <button
                  style={{ margin: "auto", height: "40px" }}
                  type="button"
                  className="btn btn-outline-dark "
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          <hr />
          {/* <h5 style={{marginTop:40,marginBottom:40}} className="secTitle">Feedbacks of customer will add here</h5> */}
          <p style={{ marginTop: 40, marginBottom: 40 }}> </p>
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
          <hr />

          <div className="feedBackContainer">
            <h2 className="secTitle">Feedbacks</h2>
            <hr />

            <table
              style={{
                margin: "auto",
                textAlign: "center",
                borderWidth: 2,
                borderColor: "#333",
                width: 900,
              }}
            >
              <thead
                style={{ backgroundColor: "rgb(21 90 169)", color: "#eee" }}
              >
                <th
                  style={{
                    textAlign: "center",
                    borderWidth: 2,
                    borderColor: "#333",
                    padding: 10,
                  }}
                >
                  Date
                </th>
                <th
                  style={{
                    textAlign: "center",
                    borderWidth: 2,
                    borderColor: "#333",
                    padding: 10,
                  }}
                >
                  Feedback
                </th>
              </thead>
              <tbody>
                {itemFeedbacks.map((res, index) => (
                  <tr
                    style={{
                      backgroundColor: "rgb(196 213 233)",
                      color: "#333",
                    }}
                    key={index}
                  >
                    <td
                      style={{
                        textAlign: "center",
                        borderWidth: 2,
                        borderColor: "#333",
                        padding: 10,
                      }}
                    >
                      {res.created_at.split("T")[0]}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        borderWidth: 2,
                        borderColor: "#333",
                        padding: 10,
                      }}
                    >
                      {res.feedback}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 className="secTitle">Add Your Feedback</h2>
            <hr />

            <form
              style={{ justifyContent: "end", marginTop: 10, borderWidth: 1 }}
              className="row gx-3 gy-2 align-items-center"
              onSubmit={handelSubmit}
            >
              <div className="col-sm-6">
                <label
                  className="visually-hidden"
                  htmlFor="specificSizeInputName"
                >
                  your feedback
                </label>
                <textarea
                  value={feed}
                  name="feedInput"
                  onChange={(e) => setFeed(e.target.value)}
                  className="form-control"
                  aria-label="With textarea"
                ></textarea>
                {/* <input  onChange= {(e)=>setFeed(e.target.value)} type="text" class="form-control" id="specificSizeInputName" placeholder="write somthing"/> */}
              </div>
              <div className="col-sm-3">
                <button
                  type="submit"
                  name="submit"
                  className="btn btn-dark px-4 py-2"
                >
                  {" "}
                  Add{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItemDetails;
