import React from "react";

export default function Introduction() {
  return (
    <div id="profile-container" data-aos="fade-right">
      <div id="profile-image"></div>
      <div id="profile-introduction">
        <h5 id="who-this">Who's this guy</h5>
        <p id="who-this-description">
          I'm a <b>Senior Full Stack Developer</b> with a Computer Science
          background and years of experience shipping production web apps. I
          work across the JavaScript ecosystem — <b>React, Next.js, Node</b>, and
          TypeScript — and increasingly at the intersection of <b>AI</b> and{" "}
          <b>no-code</b>, building LLM-powered products and automations that
          reach the market fast. I care about clean architecture, thoughtful
          UX, and code that's a pleasure to maintain. Whether you're scaling a
          product or starting from an idea, let's build something that lasts.
          <span style={{ justifyContent: "center" }}>
            <a
              href="#contact"
              style={{
                color: "var(--pink)",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              &nbsp;Let's make something special.
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
