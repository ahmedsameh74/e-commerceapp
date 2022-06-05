import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [password, setPassword] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email === "" ||
      password === "" ||
      phone === "" ||
      name === "" ||
      billingAddress === "" ||
      shippingAddress === ""
    ) {
      setError(true);
    } else {
      setError(false);
      console.log(email, password, name);
      setEmail("");
      setPassword("");
      setName("");
      setPhone("");
      setBillingAddress("");
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
        <div className="formControl">
          <label htmlFor="name">name</label>
          <input
            type="text"
            name=""
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            style={{ outline: error ? "red solid 1px" : "" }}
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
            style={{ outline: error ? "red solid 1px" : "" }}
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
            style={{ outline: error ? "red solid 1px" : "" }}
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
            style={{ outline: error ? "red solid 1px" : "" }}
          />
        </div>
        <div className="formControl">
          <label htmlFor="billing_address">billing address</label>
          <input
            type="text"
            name=""
            id="billing_address"
            onChange={(e) => setBillingAddress(e.target.value)}
            value={billingAddress}
            style={{ outline: error ? "red solid 1px" : "" }}
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
            style={{ outline: error ? "red solid 1px" : "" }}
          />
        </div>
        {error && (
          <span className="error">
            please complete the missing fields to complete
          </span>
        )}
        <span>
          Already have an account? <Link to="/login">Log In</Link>
        </span>
        <button>Submit</button>
      </form>
    </div>
  );
}
