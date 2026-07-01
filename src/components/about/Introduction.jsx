import React from "react";

export default function Introduction() {
  return (
    <div className="profile" data-aos="fade-right">
      <div className="profile__photo" />
      <div className="profile__bio">
        <h5 className="profile__label">Who's this guy</h5>
        <p className="profile__text">
          I'm a <b>Senior Full Stack Developer</b> with a Computer Science
          background and years of experience shipping production web apps. I
          work across the JavaScript ecosystem — <b>React, Next.js, Node</b>, and
          TypeScript — and increasingly at the intersection of <b>AI</b> and{" "}
          <b>no-code</b>, building LLM-powered products and automations that
          reach the market fast. I care about clean architecture, thoughtful UX,
          and code that's a pleasure to maintain. Whether you're scaling a
          product or starting from an idea, let's build something that lasts.
          <a href="#contact" className="profile__link">
            {" "}
            Let's make something special.
          </a>
        </p>
      </div>
    </div>
  );
}
