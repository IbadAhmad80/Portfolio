import React from "react";
import "../../styles/contact.scss";
import SectionHeading from "../common/SectionHeading";
import ContactForm from "./Form";

export default function ContactUS() {
  return (
    <div className="contact">
      <SectionHeading
        title="Contact"
        subtitle="Have a question or wanna work together?"
        light
      />
      <div className="contact__form">
        <ContactForm />
      </div>
    </div>
  );
}
