import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaStackOverflow, FaHackerrank } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
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
    <footer className="footer">
      <a href="#home" className="footer__top" aria-label="Back to top">
        <FiArrowUp />
      </a>

      <div className="footer__socials" data-aos="fade-up" data-aos-offset="10">
        {SOCIALS.map((s) => (
          <a
            key={s.title}
            className="social-link"
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
      <h6 className="footer__note">
        IBAD AHMAD <span>© {year}</span>
      </h6>
    </footer>
  );
}
