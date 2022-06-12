/* eslint-disable-next-line */
import React, { useEffect, useState } from "react";
import { Base_URL } from "../../service/BaseUrl";
import { useNavigate } from "react-router-dom";
 
import "./home.css";
import { Button } from "reactstrap";
import Slider from "../../components/Slider/Slider";

function Home() {
  const [productsdata, setProductsData] = useState([]);
  const [categoriesdata, setCategoriesData] = useState([]);

  const navigate = useNavigate();
  const navigateToProducts = () => navigate("/products");
  const navigateToCategories = () => navigate("/categories");
  // const navigateToCategoryProducts = (id) => navigate('/products/'+id);

  useEffect(() => {
    apiGetProducts();
    apiGetCategories();
  }, []);

  const apiGetCategories = async () => {
    await fetch(`${Base_URL}/categories`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        setCategoriesData([json.data[0], json.data[1]]);
      });
  };

  const apiGetProducts = async () => {
    await fetch(`${Base_URL}/allproducts`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        setProductsData([json.data[0], json.data[1], json.data[2]]);
      });
  };

  return (
    <div className="show-category">
      <Slider />

      <div className="container">
        <h2 className="">Our categories</h2>
        <hr />
        <div className="row">
          <div className="heading">
            {categoriesdata.map((res) => (
              <div className="boxhome" key={res.id}>
                <h2 className="itemTitle">{res.category_name}</h2>
                <img src={res.category_image} alt={res.category_name} />
                {/* <p>{res.product_disc}</p> */}
                <button
                  style={{ marginTop: 25 }}
                  onClick={() => navigate(`/products/${res.id}`)}
                >
                  Explore Products
                </button>
              </div>
            ))}
          </div>
          <Button
          className="btn1"
            onClick={navigateToCategories}
            style={{ width: 400, justifyContent: "center", margin: "auto" }}
            outline
          >
            {" "}
            DISCOVER MORE CATEGORIES
            <span
              style={{ marginLeft: 10, fontSize: 22 }}
              className="fa fa-eye"
            ></span>
          </Button>
        </div>
      </div>

      <div className="container">
        <h2 className=""> lastest producats</h2>
        <p> we have a lateset producat tae a looe and enjoy uyng </p>
        <hr />
        <div className="row">
          <div className="heading">
            {productsdata.map((res) => (
              <div className="box">
                <h2 className="btn-box">{res.name}</h2>
                <img src={res.product_image} alt={res.name}></img>
                <p>{res.product_disc}</p>
                <button onClick={() => navigate(`/productItems/${res.id}`)}>
                  shop now
                </button>
              </div>
            ))}
          </div>
          <Button
          className="btn1"
            onClick={navigateToProducts}
            style={{ width: 400, justifyContent: "center", margin: "auto" }}
            outline
          >
            {" "}
            DISCOVER MORE PRODUCTS
            <span
              style={{ marginLeft: 10, fontSize: 22 }}
              className="fa fa-eye"
            ></span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
