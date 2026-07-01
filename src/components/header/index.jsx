import React, { useEffect, useState } from "react";
import "../../styles/header.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logo.png";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="site-header__inner">
        <a
          href="#home"
          className="site-header__logo"
          onClick={() => setOpen(false)}
        >
          <img src={logo} alt="Ibad Ahmad logo" />
        </a>

        <nav>
          <ul className={`nav-links${open ? " open" : ""}`}>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </header>
  );
};

export default NavBar;
