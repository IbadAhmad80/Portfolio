import React from "react";
import "../../styles/about.scss";
import { AiOutlineBulb } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { BiAccessibility, BiRocket } from "react-icons/bi";
import Designs from "./Designs";
import Introduction from "./Introduction";
import Skills from "./Skills";

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
        <span id="skills-section" data-aos="fade-left">
          <Skills skill={"CSS"} width={80} />
          <Skills skill={"HTML"} width={90} />
          <Skills skill={"Javascript"} width={80} />
          <Skills skill={"ReactJS"} width={90} />
          <Skills skill={"NodeJS"} width={80} />
          <Skills skill={"ExpressJS"} width={80} />
          <Skills skill={"NextJS"} width={85} />
          <Skills skill={"Ruby / Rails"} width={60} />
          <Skills skill={"Redux"} width={80} />
          <Skills skill={"React Query"} width={85} />
          <Skills skill={"AWS"} width={70} />
          <Skills skill={"UI Libraries"} width={70} />
          <Skills skill={"Firebase"} width={75} />
          <Skills skill={"GraphQL"} width={75} />
          <Skills skill={"Typescript"} width={80} />
        </span>
      </div>
    </div>
  );
}
