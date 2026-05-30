import React from "react";
import Navbar from "../components/Navbar";

function Contact() {

  return (
    <>
      <Navbar />

      <div className="contact-form">

        <h1>
          Contact Us
        </h1>

        <input
          placeholder="Name"
        />

        <input
          placeholder="Email"
        />

        <textarea
          placeholder="Message"
        />

        <button>
          Send
        </button>

      </div>
    </>
  );
}

export default Contact;

