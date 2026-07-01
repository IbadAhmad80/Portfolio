import React from "react";

export default function Introduction() {
  return (
    <div id="profile-container" data-aos="fade-right">
      <div id="profile-image"></div>
      <div id="profile-introduction">
        <h5 id="who-this">Who's this guy</h5>
        <p id="who-this-description">
          Hello there! I'm a dynamic <b>Senior Full Stack Developer</b> boasting
          a background in Computer Science. I thrive in the realm of JavaScript,
          specializing in frameworks like ReactJS, NodeJS, ExpressJS, NextJS,
          and ROR. Whether you're eyeing a collaboration or simply want to geek
          out about tech, I'm all ears. Let's turn visions into reality,
          together!
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
