/* eslint-disable-next-line */
import React, { useEffect, useState } from "react";
import { Base_URL } from "../../service/BaseUrl";
import { useCart } from "../../hooks/useCart";
import "./ProductItemDetails.css";
import { useParams } from "react-router-dom";

function ProductItemDetails() {
  const [data, setData] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    apiGet();
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
  const handleAddToCart = (res) => {
    addToCart(res);
  };
  // Products();

  return (
    <>
      <div className="show-category">
        <h2 className="secTitle" onClick={() => handleAddToCart(data)}>
          PRODUCT ITEM DETAILS
        </h2>
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
              <h3>Add to cart section will add here</h3>
            </div>
          </div>

          <h2 className="secTitle">Feedbacks</h2>
          <hr />
          <h5 style={{ marginTop: 40, marginBottom: 40 }} className="secTitle">
            Feedbacks of customer will add here
          </h5>

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
