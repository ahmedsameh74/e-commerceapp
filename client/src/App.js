import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./pages/signup/Signup";
import Products from "./pages/products/Products";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import ProductItems from "./pages/productItems/ProductItems";
// import Data from "./db.json";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import ProductItemDetails from './pages/productItemDetails/ProductItemDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {/* <div>{Data.username}</div> */}
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/productItems/:id" element={<ProductItems />} />
          <Route path="/productItemDetails/:id" element={<ProductItemDetails />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
