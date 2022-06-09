import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
// import { Base_URL } from "../../service/BaseUrl";
import { useLogin } from "../../hooks/useLogin";

const isEmailValid = (value) =>
  value.trim() !== "" && value.includes("@" || ".com");
const isDataValid = (value) => value.trim() !== "";

export default function Login() {
  // const [error, setError] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, error } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmailValid(user.email) || !isDataValid(user.password)) {
      // setError(true);
      return;
    } else {
      // setError(false);
      login(user.email, user.password);
      setUser({
        email: "",
        password: "",
      });
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
            onChange={(event) => {
              setUser({ ...user, email: event.target.value });
            }}
            value={user.email}
            style={{ outline: error ? "red solid 1px" : "" }}
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
            style={{ outline: error ? "red solid 1px" : "" }}
          />
        </div>
        {error && <span className="error">{error}</span>}
        <span>
          don't have an account? <Link to="/signup">Sign Up</Link>
        </span>
        <button>Submit</button>
      </form>
    </div>
  );
}
