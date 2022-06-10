import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
// import { Base_URL } from "../../service/BaseUrl";
import { useSignup } from "../../hooks/useSignup";

const isEmailValid = (value) =>
  value.trim() !== "" && value.includes("@" || ".com");
const isDataValid = (value) => value.trim() !== "";

export default function Signup() {
  // const [error, setError] = useState(false);
  const { signup, error } = useSignup();
  const [user, setUser] = useState({
    email: "",
    password: "",
    phone: "",
    shippingAddress: "",
    billingAddress: "",
    name: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !isEmailValid(user.email) ||
      !isDataValid(user.password) ||
      !isDataValid(user.phone) ||
      !isDataValid(user.name) ||
      !isDataValid(user.shippingAddress) ||
      !isDataValid(user.billingAddress)
    ) {
      // setError(true);
      return;
    } else {
      // console.log(user);
      // setError(false);
      // console.log(user);
      signup(user);

      setUser({
        name: "",
        email: "",
        password: "",
        billingAddress: "",
        shippingAddress: "",
        phone: "",
      });
    }
  };
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
            style={{ border: error ? "1px solid red " : "" }}
            id="name"
            onChange={(event) => {
              setUser({ ...user, name: event.target.value });
            }}
            value={user.name}
            placeholder="ex: Jane Doe"
          />
        </div>
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name=""
            id="email"
            onChange={(event) => {
              setUser({ ...user, email: event.target.value });
            }}
            value={user.email}
            style={{ border: error ? "1px solid red " : "" }}
            placeholder="example@gmail.com"
          />
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            id="password"
            onChange={(event) => {
              setUser({ ...user, password: event.target.value });
            }}
            value={user.password}
            style={{ border: error ? "1px solid red " : "" }}
            placeholder="********"
          />
        </div>
        <div className="formControl">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name=""
            id="phone"
            onChange={(event) => {
              setUser({ ...user, phone: event.target.value });
            }}
            value={user.phone}
            style={{ border: error ? "1px solid red " : "" }}
            placeholder="ex: 012345678"
          />
        </div>

        <div className="formControl">
          <label htmlFor="billingAddress">billing Address</label>
          <input
            type="text"
            name=""
            id="billingAddress"
            onChange={(event) => {
              setUser({ ...user, billingAddress: event.target.value });
            }}
            value={user.billingAddress}
            style={{ border: error ? "1px solid red " : "" }}
            placeholder="Apt, floor no"
          />
        </div>
        <div className="formControl">
          <label htmlFor="shippingAddress">Shipping Address</label>
          <input
            type="text"
            name=""
            id="shippingAddress"
            onChange={(event) => {
              setUser({ ...user, shippingAddress: event.target.value });
            }}
            value={user.shippingAddress}
            style={{ border: error ? "1px solid red " : "" }}
            placeholder="Apt, floor no"
          />
        </div>

        <span className="registered">
          Already have an account? <Link to="/login">Log In</Link>
        </span>
        <button>Submit</button>
      </form>
    </div>
  );
}
