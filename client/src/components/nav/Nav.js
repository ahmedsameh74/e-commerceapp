import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faShop,
  faCartShopping,
  faAddressCard,
  faBars,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const { logout } = useLogout();
  const { user } = useAuthContext();
  // const handleMenu = (e) => {
  //   // window.onclick = () => {
  //   //   if (e.target.tagName === "path" || e.target.tagName === "svg") {
  //   //     setShowMenu(true);
  //   //     console.log(showMenu);
  //   //     console.log(e.target.tagName);
  //   //   } else {
  //   //     setShowMenu(!showMenu);
  //   //   }
  //   // };
  //   // setShowMenu(!showMenu);
  //   console.log(e.target.id);
  // };
  useEffect(() => {
    window.onclick = (e) => {
      e.target.localName === "path" || e.target.localName === "svg"
        ? setShowMenu(!showMenu)
        : setShowMenu(false);
      // console.log(e.target.localName);
    };
  });
  return (
    <>
      <div className="nav">
        <div className="left">
          <div className="logo">
            <img src="assest/logo.png" className="img-logo" alt="" />
          </div>
          <ul>
            <li>
              {/* <i className="fa-solid fa-house-chimney"></i> */}
              <FontAwesomeIcon icon={faHouse} />

              {/* <FontAwesomeIcon icon="fa-solid fa-house-chimney" /> */}
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* <i className="fa-solid fa-shop"></i> */}
              <FontAwesomeIcon icon={faShop} />

              <Link to="/products">Products</Link>
            </li>
            <li>
              {/* <i className="fa-solid fa-cart-shopping"></i> */}
              <FontAwesomeIcon icon={faCartShopping} />
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              {/* <i className="fa-solid fa-address-card"></i> */}
              <FontAwesomeIcon icon={faAddressCard} />

              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="mob-menu">
          {/* <i className="fa-solid fa-bars"></i> */}
          <FontAwesomeIcon icon={faBars} id="menu" />
        </div>
        {!user && (
          <div className="right">
            <Link className="logLink" to="/login">
              {/* <i className="fa-solid fa-right-to-bracket"></i> */}
              <FontAwesomeIcon icon={faRightToBracket} />
              <span>log in</span>
            </Link>
          </div>
        )}
        {user && (
          <button className="logout" onClick={logout}>
            {/* <i className="fa-solid fa-right-to-bracket"></i> */}
            <FontAwesomeIcon icon={faRightToBracket} />
            <span>log out</span>
          </button>
        )}
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
