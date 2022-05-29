import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, tel, email);
  };

  return (
    <div className="contact" onSubmit={handleSubmit}>
      <h3>Send Us Your Feedback</h3>
      <form>
        <div className="formGroup">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="contact">Contact tel.</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formGroupc">
          <input type="checkbox" name="" id="check" />
          <label htmlFor="check"> May we contact you? </label>
        </div>
        <div className="formGroupd">
          <button>submit</button>
        </div>
      </form>

      {/* </form> */}
    </div>
  );
}
