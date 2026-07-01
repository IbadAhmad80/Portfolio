import React, { useState } from "react";
import "../../styles/header.scss";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import logo from "../../assets/logo.png";
// import { RiPassportFill } from "react-icons/ri";

const NavBar = ({ width }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [scrolled, setScrolled] = useState(false);
  const closeMobileMenu = () => setClick(false);

  React.useEffect(() => {
    //changing haeder to sticky on scroll
    const changeHeaderPosition = () => {
      if (window.scrollY >= 0) {
        setScrolled(true);
      } else setScrolled(false);
    };

    //attaching event listner for scroll value
    window.addEventListener("scroll", changeHeaderPosition);
    return (_) => {
      window.removeEventListener("scroll", changeHeaderPosition);
    };
  });

  return (
    <div
      className={scrolled && width > 777 ? "sticky_header" : "header"}
      data-aos={width > 777 && "zoom-in"}
      data-aos-duration="600"
    >
      <div className="logo-nav">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <ul className={click ? "nav_options active" : "nav_options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a
              href="#home"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              HOME
            </a>
          </li>

          <li className="option" onClick={closeMobileMenu}>
            <a
              href="#about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              ABOUT
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a
              href="#projects"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              PROJECTS
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a
              href="#blogs"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              BLOGS
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      <div className="mobile_menu" onClick={handleClick}>
        {click ? (
          <span className="menu_icon">
            <AiOutlineCloseCircle />
          </span>
        ) : (
          <span className="menu_icon">
            <AiOutlineMenu />
          </span>
        )}
      </div>
    </div>
  );
};

export default NavBar;
