import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="address">
          <h3>Our Address</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            repellendus.
          </p>
          <ul>
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>+201234567890</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>+201234567890</span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>contact@info.com</span>
            </li>
          </ul>
        </div>
        <div className="social">
          {/* <i className="fa fa-envelope-o"></i> */}
          <Link to="#">
            <i className="fab fa-facebook" style={{ color: "#2374e1" }}></i>
          </Link>
          <Link to="#">
            <i className="fab fa-youtube" style={{ color: "red" }}></i>
          </Link>
          <Link to="#">
            <i className="fab fa-linkedin" style={{ color: "#0a66c2" }}></i>
          </Link>
          <Link to="#">
            <i className="fab fa-google-plus" style={{ color: "#de5145" }}></i>
          </Link>
          <Link to="#">
            <i
              className="fab fa-twitter"
              style={{ color: "rgb(29 155 240)" }}
            ></i>
          </Link>
        </div>
      </div>
      <div className="bottom">
        <span>&copy;copyright 2022 BrandName</span>
      </div>
    </div>
  );
}
