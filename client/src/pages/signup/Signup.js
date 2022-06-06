import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const isEmail = (value) => value.trim() !== "" && value.includes("@" & ".com");
const isName = (value) => value.trim() !== "";
const isData = (value) => value !== "" && value.trim().length > 6;

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmail(email) || isName(name) ||isData(password) ||isData(shippingAddress)) {
      setError(true);
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
        <div className="formControl">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name=""
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className={error && 'error'}
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
            className={error && 'error'}
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
            className={error && 'error'}
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
            className={error && 'error'}
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
            className={error && 'error'}
          />
        </div>
        {error && (
          <span className="errorMsg">
            Empty or missing fields
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
