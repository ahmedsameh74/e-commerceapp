import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Signup from "./pages/signup/Signup";
import Products from "./pages/products/Products";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import ProductItems from "./pages/productItems/ProductItems";
import { useAuthContext } from "./hooks/useAuthContext";
// import Search from "./components/search/Search";
import Cart from "./pages/cart/Cart";
// import Category from "./components/Category/Category";
// import Data from "./db.json";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import ProductItemDetails from "./pages/productItemDetails/ProductItemDetails";

import { useNavigate } from "react-router";
import { useEffect } from "react";
import Checkout from "./pages/checkout/checkout";

library.add(fab);
function App() {
  const { user, dispatch } = useAuthContext();
  const logged = JSON.parse(localStorage.getItem("user"));

  
  useEffect(() => {
    // console.log(user);
    if (logged) {
      dispatch({ type: "LOGIN", payload: logged });
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        {/* <div>{Data.username}</div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {!user && <Route path="/login" element={<Login />} />}
          {!user && <Route path="/signup" element={<Signup />} />}
          <Route path="/products/" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          {user && <Route path="/cart" element={<Cart />} />}

          <Route path="/categories" element={<Categories />} />
          <Route path="/productItems/:id" element={<ProductItems />} />
          <Route
            path="/productItemDetails/:id"
            element={<ProductItemDetails />}
          />
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
