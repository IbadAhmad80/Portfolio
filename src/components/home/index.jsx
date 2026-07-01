import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiArrowDown } from "react-icons/fi";
import ParticlesBg from "../common/ParticlesBg";
import "../../styles/home.scss";

const TypingStyle = {
  letterSpacing: "0.03cm",
  fontSize: "clamp(1.4rem, .8rem + 2vw, 3rem)",
  fontWeight: "600",
  color: "var(--teal)",
};

export default function Home() {
  const options = useMemo(
    () => ({
      fpsLimit: 120,
      fullScreen: { enable: false },
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { quantity: 3 },
          grab: { distance: 180, links: { opacity: 0.6 } },
        },
      },
      particles: {
        color: { value: ["#04c2c9", "#ffffff", "#e31b6d"] },
        links: {
          color: "#3a4a63",
          distance: 150,
          enable: true,
          opacity: 0.35,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 1.4,
          straight: false,
        },
        number: { density: { enable: true, area: 900 }, value: 70 },
        opacity: { value: 0.45 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="hero">
      <ParticlesBg
        id="tsparticles"
        className="hero__particles"
        options={options}
      />

      <div className="hero__overlay" />

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="hero__eyebrow">Hello there, I'm</p>
        <h1 className="hero__name">Ibad Ahmad.</h1>

        <div className="hero__role">
          <span>I'm a&nbsp;</span>
          <ReactTypingEffect
            text={[
              "Senior Full Stack Developer.",
              "No Code Specialist.",
              "Problem Solver.",
            ]}
            cursorRenderer={(cursor) => (
              <span style={{ color: "var(--teal)" }}>{cursor}</span>
            )}
            typingDelay={100}
            eraseDelay={1200}
            speed={90}
            displayTextRenderer={(text) => (
              <span style={TypingStyle}>{text}</span>
            )}
          />
        </div>

        <p className="hero__tagline">
          I build fast, responsive, and dynamic web experiences with React,
          Node, and modern tooling.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View My Work
            <AiOutlineArrowRight className="btn__icon" />
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in Touch
          </a>
        </div>
      </motion.div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        <FiArrowDown />
      </a>
    </div>
  );
}
