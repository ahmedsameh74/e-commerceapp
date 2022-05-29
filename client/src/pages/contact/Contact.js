import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      {/* <h3>Send Us Your Feedback</h3>
      <form>
        <label>
          <span>First name</span>
          <input type="text" />
        </label>
        <label>
          <span>Last name</span>
          <input type="text" />
        </label>
        <label>
          <span>Contact tel</span>
          <input type="tel" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" />
        </label>
        <label>
          <input type="checkbox" />
          <span>May we contact you?</span>
        </label> */}
      {/* <form className="label">
        <label htmlFor="lastName">Last name</label>
        <label htmlFor="Contact">Contact tel.</label>
        <label htmlFor="email">Email</label>
      </form>
      <form className="input">
        <input type="text" name="lastName" id="lastName" />
        <input type="tel" name="Contact" id="Contact" />
        <input type="email" name="email" id="email" />
      </form> */}
      <h3>Send Us Your Feedback</h3>
      <form>
        <div className="formGroup">
          <label htmlFor="firstName">First name</label>
          <input type="text" name="firstName" id="firstName" />
        </div>
        <div className="formGroup">
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
        <div className="formGroup">
          <label htmlFor="contact">Contact tel.</label>
          <input type="tel" name="contact" id="contact" />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
      </form>

      <div className="formGroupc">
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check"> May we contact you? </label>
      </div>
      {/* </form> */}
    </div>
  );
}
