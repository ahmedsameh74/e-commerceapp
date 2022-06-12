import "./Cart.css";
import { useCartContext } from "../../hooks/useCartContext";
import { useAuthContext } from "./../../hooks/useAuthContext";
import { useNavigate } from "react-router";
const Cart = () => {
  const { cart } = useCartContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  // !user && navigate("/login");
  // console.log(cart);
  return (
    <div className="outerContainer">
      <div className="mainContainer">
        <div className="header">
          <h2>Cart</h2>
        </div>
        <div className="innerContainer">
          <div>
            <h4>Woman bag </h4>
            <em>(2x) $20</em>
          </div>
          <div className="price">
            <p>$40</p>
          </div>
        </div>
        <hr />
        <div style={{ textAlign: "right" }}>
          <h4>Total Price</h4>
          <p>$40</p>
        </div>
        <div className="btnContainer">
          <button className="btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
