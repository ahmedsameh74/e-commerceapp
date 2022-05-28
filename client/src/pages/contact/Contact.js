import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <form>
        <h3>Send Us Your Feedback</h3>
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
        </label>

        {/* <input type="checkbox" name="" id="check" />
        <label htmlFor="check"> </label> */}
      </form>
    </div>
  );
}
