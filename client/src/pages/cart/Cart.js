import "./Cart.css";
const Cart = () => {
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
