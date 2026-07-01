import React, { useMemo } from "react";
import "../../styles/contact.scss";
import SectionHeading from "../common/SectionHeading";
import ParticlesBg from "../common/ParticlesBg";
import ContactForm from "./Form";

export default function ContactUS() {
  const options = useMemo(
    () => ({
      fpsLimit: 120,
      fullScreen: { enable: false },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.5 } },
        },
      },
      particles: {
        color: { value: ["#04c2c9", "#ffffff", "#e31b6d"] },
        links: {
          color: "#3a4a63",
          distance: 150,
          enable: true,
          opacity: 0.25,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true, area: 1000 }, value: 45 },
        opacity: { value: 0.35 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="contact">
      <ParticlesBg
        id="contact-particles"
        className="contact__particles"
        options={options}
      />

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
