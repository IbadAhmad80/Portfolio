import React from "react";

export default function Designs({ title, description, icon: Icon, index = 0 }) {
  return (
    <div
      className="highlight-card"
      data-aos="fade-up"
      data-aos-delay={index * 120}
    >
      <div className="highlight-card__badge">
        <Icon />
      </div>
      <div className="highlight-card__title">{title}</div>
      <div className="highlight-card__desc">{description}</div>
    </div>
  );
}
