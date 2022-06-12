import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import ReactDOM from "react-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Signup from "./pages/signup/Signup";
import Products from "./pages/products/Products";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import Cart from "./pages/cart/Cart";
import Search from "./components/search/Search";
import ProductItemDetails from "./pages/productItemDetails/ProductItemDetails";
import ProductItems from "./pages/productItems/ProductItems";
import { useAuthContext } from "./hooks/useAuthContext";
// import Category from "./components/Category/Category";
// import Data from "./db.json";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
library.add(fab);

function App() {
  const { user } = useAuthContext();
  // const navigate = useNavigate();
  // console.log(user);
  // user ? navigate("/login") : navigate("/");
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Search />
        {/* <Redirect /> */}

        {/* <Category /> */}
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
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
