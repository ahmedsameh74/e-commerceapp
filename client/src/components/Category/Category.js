/* eslint-disable-next-line */
import React, { useState } from "react";
import "./Category.css";
// import Category from "./Category";

function Category() {
  const [data, setData] = useState([]);
  const apiGet = () => {
    const apii = fetch("https://ecommerce-app0040.herokuapp.com/api/categories")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data[0].category_name);
        setData(json.data);
        // console.log();
      });
  };
  // apiGet();

  return (
    <>
      <div className="category-container">
        <div className="buttons">
          <h1 className="button" onClick={apiGet}>
            {" "}
            enjoy our category{" "}
          </h1>
        </div>
        <div className="show-category">
          {" "}
          {data.map((res) => (
            <div className="box1">
              {" "}
              <button className="btn-box">{res.category_name}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
