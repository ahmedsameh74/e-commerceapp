import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const isEmailValid = (value) =>
  value.trim() !== "" && value.includes("@" || ".com");
const isDataValid = (value) => value.trim() !== "";
const isPasswordValid = (value) => value.trim() !== "" && value.length > 8;

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [formIsValid, setValidForm] = useState(false);
  const [password, setPassword] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [error, setError] = useState(false);

  if (
    isEmailValid(email) &&
    isPasswordValid(password) &&
    isDataValid(phone) &&
    isDataValid(name) &&
    isDataValid(shippingAddress)
  ) {
    setValidForm(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      setError(true);
      return;
    } else {
      setError(false);
      console.log(email, password, name);
      setEmail("");
      setPassword("");
      setName("");
      setPhone("");
      setShippingAddress("");
    }
  };
  //   fetch("https://ecommerce-app0040.herokuapp.com/api/register", {
  //       method: 'POST',
  //       body:
  //   })

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        {error && <span className="errorMSG">Invalid or missing fields</span>}
        <div className="formControl">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name=""
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className={error && "error"}
          />
        </div>
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name=""
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={error && "error"}
          />
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className={error && "error"}
          />
        </div>
        <div className="formControl">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name=""
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className={error && "error"}
          />
        </div>

        <div className="formControl">
          <label htmlFor="shippingAddress">Shipping Address</label>
          <input
            type="text"
            name=""
            id="shippingAddress"
            onChange={(e) => setShippingAddress(e.target.value)}
            value={shippingAddress}
            className={error && "error"}
          />
        </div>

        <span className="registered">
          Already have an account? <Link to="/login">Log In</Link>
        </span>
        <button style={{ width: "100px" }}>Submit</button>
      </form>
    </div>
  );
}
