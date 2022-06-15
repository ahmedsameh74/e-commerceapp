import { useState } from "react";
import "./checkout.css";
import { useCartContext } from "../../hooks/useCartContext";
import { useAuthContext } from "./../../hooks/useAuthContext";
const Checkout = () => {
  const [chosenOption, setOption] = useState("");
  const [cop, setCop] = useState("");
  const [card, setCard] = useState({
    name: "",
    number: "",
  });
  const [error, setError] = useState("");
  const handleChange = (event) => {
    setOption(event.target.value);
    console.log(event.target.value);
  };
  const { user } = useAuthContext();

  const { cart } = useCartContext();
  var t_p = 0;
  var t_tax = 0;

  for (let i = 0; i < cart.length; i++) {
    t_p = t_p + cart[i].price * cart[i].ordQty;
    t_tax = t_tax + cart[i].price * cart[i].ordQty * 0.14;
    console.log(t_p);
  }
  let newCart = { ...cart[0], name: cart[0].sku };
  // let cartName = { ...newCart };
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(chosenOption);
    if (chosenOption === "") {
      setError("Choose your payment method first");
      console.log(card);
    } else if (chosenOption === "cash") {
      setError("");
      postCheck(cop);
    } else if (chosenOption === "creditCard") {
      if (card.name === "" || card.number === "") {
        setError("this field is required");
      } else {
        console.log(user);
        console.log(t_tax);
        setError("");
        postCheck(cop);
      }
    }
  };
  const postCheck = async (cop) => {
    try {
      await fetch(
        "http://ecommerce-app0040.herokuapp.com/api/order?duration=&total_price=&tax=&coupon_code=&order_states_id=&order_payment_type_id=&order_visa_card_id=&order_user_id=&order_items[0][qty]=&order_items[0][price]=&order_items[0][name]=&order_items[0][sku]=&order_items[0][color]=&order_items[0][size]=&order_items[0][id]=",
        {
          method: "POST",
          body: JSON.stringify({
            duration: "2",
            total_price: t_p,
            tax: t_tax,
            coupon_code: cop,
            order_states_id: 1,
            order_payment_type_id: chosenOption,
            order_visa_card_id: card.number,
            order_user_id: user.userId,
            order_items: {
              newCart,
            },
          }),
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.message.includes("coupon expired")) {
            console.log("expired");
          } else {
            console.log(data);
          }
        });
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };
  return (
    <div className="main">
      <div className="outerCheckoutContainer">
        <div className="priceContainer">
          <h4>Total Price</h4>
          <p>{t_p}$</p>
        </div>

        <h2>Choose your payment method</h2>
        <div className="radioContainer">
          <label>
            <input
              type="radio"
              name="choice1"
              value="cash"
              onChange={handleChange}
            />
            Cash
          </label>

          <label>
            <input
              type="radio"
              name="choice1"
              value="creditCard"
              onChange={handleChange}
            />
            Credit Card
          </label>
        </div>
        {chosenOption === "creditCard" && (
          <div className="creditContainer">
            <div className="inputs">
              <label>Card Holder Name</label>
              <input
                value={card.name}
                onChange={(e) => {
                  setCard({ ...card, name: e.target.value });
                }}
                type="text"
                required
              />
            </div>
            <div className="inputs">
              <label>Card Number</label>
              <input
                value={card.number}
                onChange={(e) => {
                  setCard({ ...card, number: e.target.value });
                }}
                type="number"
                required
              />
            </div>{" "}
          </div>
        )}

        <div className="inputContainer">
          <form>
            <div className="inputs">
              <label>Name</label>
              <input type="text" placeholder="eg: Jane Doe" />
            </div>
            <div className="inputs">
              <label>Coupon</label>
              <input
                type="text"
                placeholder=""
                onChange={(e) => setCop(e.target.value)}
              />
            </div>
            <div className="inputs">
              <label>Phone</label>
              <input type="number" placeholder="eg: 012345678" />
            </div>
            <div className="inputs">
              <label>Address</label>
              <input type="Address" placeholder="eg: Apt, Building, Street" />
            </div>
          </form>
        </div>
        <button onClick={handleSubmit}>Confirm</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};
export default Checkout;
