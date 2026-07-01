import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaStackOverflow, FaHackerrank } from "react-icons/fa";
import "../../styles/footer.scss";

export default function Footer() {
  return (
    <div id="footer-container">
      <div id="icons-container" data-aos="fade-right" data-aos-offset="10">
        <div id="social-icon">
          <a
            href="https://www.hackerrank.com/IbadAhmad"
            target="blank"
            style={{ color: "inherit" }}
            title="HackerRank"
          >
            <FaHackerrank />
          </a>
        </div>
        <div id="social-icon">
          <a
            href="www.linkedin.com/in/ibad-ahmad"
            target="blank"
            style={{ color: "inherit" }}
            title="Linkedin"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <div id="social-icon">
          <a
            href="https://github.com/IbadAhmad80"
            target="blank"
            style={{ color: "inherit" }}
            title="Github"
          >
            <AiFillGithub />
          </a>
        </div>
        <div id="social-icon">
          <a
            href="https://stackoverflow.com/users/story/14998000?view=Timeline"
            target="blank"
            style={{ color: "inherit" }}
            title="StackOverFlow"
          >
            <FaStackOverflow />
          </a>
        </div>
      </div>
      <h6 id="footnote">
        IBAD AHMAD <span style={{ color: "rgb(248,30,119)" }}>©2021</span>
      </h6>
    </div>
  );
}
