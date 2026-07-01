import React, { useEffect, useState } from "react";
import "../../styles/header.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../common/Logo";

const LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Blogs", id: "blogs" },
  { label: "Contact", id: "contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the link for the section in view.
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}>
          <Logo size={38} />
          <span>
            Ibad<b>.</b>
          </span>
        </a>

        <nav className={`navbar__nav${open ? " open" : ""}`}>
          <ul>
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={active === l.id ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <a
            href="#contact"
            className="navbar__cta"
            onClick={() => setOpen(false)}
          >
            Let's Talk
          </a>
          <button
            className="navbar__toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
