import React from "react";

// internal imports
import "../../../styles/Home/Contact/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="text-center p-5">
          <h5 className="primary-text">CONTACT US</h5>
          <h1 className="text-white">Always Connect With us</h1>
        </div>
        <br />

        <form
          action=""
          className="d-flex flex-column align-items-center contact-form"
        >
          <input
            type="text"
            className="form-control"
            placeholder="Email Address*"
          />
          <br />
          <input type="text" className="form-control" placeholder="Subject*" />
          <br />
          <textarea
            className="form-control"
            placeholder="Your Message*"
            rows="6"
          ></textarea>
          <br />

          <button className="primary-btn submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
