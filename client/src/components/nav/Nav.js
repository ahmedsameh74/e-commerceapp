import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="nav">
        <div className="left">
          <div className="logo">
            <img src="assest/logo.png" className="img-logo" alt="" />
          </div>
          <ul>
            <li>
              <i className="fa-solid fa-house-chimney"></i>
              <Link to="/">Home</Link>
            </li>
            <li>
              <i className="fa-solid fa-shop"></i>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <i className="fa-solid fa-address-card"></i>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="mob-menu" onClick={handleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="right">
          <i className="fa-solid fa-right-to-bracket"></i>
          <span>log in</span>
        </div>
      </div>
      {showMenu && (
        <div className="mob-list">
          <ul>
            <li>
              {/* <i className="fa-solid fa-house-chimney"></i> */}
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* <i className="fa-solid fa-shop"></i> */}
              <Link to="/products">Products</Link>
            </li>
            <li>
              {/* <i className="fa-solid fa-cart-shopping"></i> */}
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              {/* <i className="fa-solid fa-address-card"></i> */}
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
