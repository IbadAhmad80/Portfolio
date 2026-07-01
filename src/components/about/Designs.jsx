import React from "react";

export default function Designs({ title, description, icon: Icon }) {
  return (
    <div className="highlight-card">
      <div className="highlight-card__badge">
        <Icon />
      </div>
      <div className="highlight-card__title">{title}</div>
      <div className="highlight-card__desc">{description}</div>
    </div>
  );
}
