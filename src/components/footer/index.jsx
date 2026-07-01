import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaStackOverflow, FaHackerrank } from "react-icons/fa";
import "../../styles/footer.scss";

const SOCIALS = [
  {
    href: "https://www.hackerrank.com/IbadAhmad",
    title: "HackerRank",
    icon: <FaHackerrank />,
  },
  {
    href: "https://www.linkedin.com/in/ibad-ahmad",
    title: "LinkedIn",
    icon: <AiFillLinkedin />,
  },
  {
    href: "https://github.com/IbadAhmad80",
    title: "GitHub",
    icon: <AiFillGithub />,
  },
  {
    href: "https://stackoverflow.com/users/story/14998000?view=Timeline",
    title: "Stack Overflow",
    icon: <FaStackOverflow />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div id="footer-container">
      <div id="icons-container" data-aos="fade-up" data-aos-offset="10">
        {SOCIALS.map((s) => (
          <a
            key={s.title}
            id="social-icon"
            href={s.href}
            target="_blank"
            rel="noreferrer"
            title={s.title}
            aria-label={s.title}
          >
            {s.icon}
          </a>
        ))}
      </div>
      <h6 id="footnote">
        IBAD AHMAD <span>© {year}</span>
      </h6>
    </div>
  );
}
