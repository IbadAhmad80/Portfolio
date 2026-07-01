import React from "react";

// Shared section title: gradient-underlined heading + optional subtitle.
export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className={`section-head${light ? " section-head--light" : ""}`}>
      <h2
        className="section-head__title"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {title}
      </h2>
      <span
        className="section-head__bar"
        data-aos="zoom-out"
        data-aos-duration="2000"
      />
      {subtitle && <p className="section-head__subtitle">{subtitle}</p>}
    </div>
  );
}
