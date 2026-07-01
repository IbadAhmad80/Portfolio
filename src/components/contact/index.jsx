import React from "react";
import "../../styles/contact.scss";
import ContactForm from "./Form";

export default function ContactUS() {
  return (
    <div id="contact_container">
      <div id="heading_container">
        <h2 id="heading" data-aos="fade-right" data-aos-duration="1000">
          Contact
        </h2>
        <h2 id="heading_bar" data-aos="zoom-out" data-aos-duration="2000">
          {}
        </h2>

        <h3 id="contact_sub_heading">
          Have a question or wanna work together?
        </h3>
      </div>
      <div id="form-container">
        <ContactForm />
      </div>
    </div>
  );
}
