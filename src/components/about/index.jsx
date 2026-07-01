import React from "react";
import "../../styles/about.scss";
import { AiOutlineBulb } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { BiAccessibility, BiRocket } from "react-icons/bi";
import Designs from "./Designs";
import Introduction from "./Introduction";
import TechStack from "./TechStack";

export default function About() {
  return (
    <div id="about_container">
      <div id="main_heading_container">
        <h2 id="main_heading" data-aos="fade-right" data-aos-duration="1000">
          About
        </h2>
        <h2 id="main_heading_bar" data-aos="zoom-out" data-aos-duration="2000">
          {}
        </h2>
      </div>
      <div id="design_container" data-aos="zoom-in">
        <Designs
          title={"Fast"}
          description={
            "Fast load times and lag free interaction, my highest priority."
          }
          VscRocket={BiRocket}
        />
        <Designs
          title={"Responsive"}
          description={
            "My layouts will work on any device smoothly, big or small."
          }
          VscRocket={FaLaptopCode}
        />
        <Designs
          title={"Intuitive"}
          description={"Strong preference for easy to use, intuitive UX/UI."}
          VscRocket={AiOutlineBulb}
        />
        <Designs
          title={"Dynamic"}
          description={
            "Websites don't have to be static, I love making pages come to life."
          }
          VscRocket={BiAccessibility}
        />
      </div>
      <div id="profile_section">
        <Introduction />
        <TechStack />
      </div>
    </div>
  );
}
