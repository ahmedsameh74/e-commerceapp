import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  // let data = { email, password };
  const data = {
    email: email,
    password: password,
  };
  useEffect(() => {
    fetch("https://ecommerceapp0040.herokuapp.com/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.message === "User login successfully.") {
          console.log("first");
        } else {
          console.log("failed");
        }
      });
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else {
      setError(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        {error && (
          <span className="error">
            please complete the missing fields to complete
          </span>
        )}
        <span>
          don't have an account? <Link to="/signup">Sign Up</Link>
        </span>
        <button>Submit</button>
      </form>
    </div>
  );
}
