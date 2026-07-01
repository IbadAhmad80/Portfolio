import React from "react";

export default function Skills({ skill, width }) {
  return (
    <div className="skill-row">
      <div className="skill-row__head">
        <span className="skill-row__name">{skill}</span>
        <span className="skill-row__pct">{width}%</span>
      </div>
      <div className="skill-row__track">
        <div
          className="skill-row__fill"
          style={{ "--target": `${width}%` }}
        />
      </div>
    </div>
  );
}
