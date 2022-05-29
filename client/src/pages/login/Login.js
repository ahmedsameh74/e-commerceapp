import React from "react";

export default function Login() {
  return (
    <div className="login">
      <form>
        <div className="formControl">
          <label htmlFor="email">email</label>
          <input type="email" name="" id="email" />
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input type="email" name="" id="email" />
        </div>
      </form>
    </div>
  );
}
