import React from "react";
import { AiOutlineBulb } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { BiAccessibility, BiRocket } from "react-icons/bi";
import SectionHeading from "../common/SectionHeading";
import Designs from "./Designs";
import Introduction from "./Introduction";
import TechStack from "./TechStack";
import "../../styles/about.scss";

const HIGHLIGHTS = [
  {
    title: "Fast",
    description: "Fast load times and lag-free interaction, my highest priority.",
    icon: BiRocket,
  },
  {
    title: "Responsive",
    description: "My layouts work on any device smoothly, big or small.",
    icon: FaLaptopCode,
  },
  {
    title: "Intuitive",
    description: "Strong preference for easy-to-use, intuitive UX/UI.",
    icon: AiOutlineBulb,
  },
  {
    title: "Dynamic",
    description: "Pages don't have to be static — I love making them come to life.",
    icon: BiAccessibility,
  },
];

export default function About() {
  return (
    <div className="about">
      <SectionHeading title="About" />

      <div className="about__highlights" data-aos="zoom-in">
        {HIGHLIGHTS.map((h) => (
          <Designs key={h.title} {...h} />
        ))}
      </div>

      <div className="about__profile">
        <Introduction />
        <TechStack />
      </div>
    </div>
  );
}
