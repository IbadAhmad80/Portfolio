import React from "react";

export default function Skills({ skill, width }) {
  let bar_width = (45 * width) / 100;
  let bar_width_max = bar_width + 16;
  bar_width = bar_width.toString() + "%";
  bar_width_max = bar_width_max.toString() + "%";
  const [skillClass] = React.useState("skill-width-animation");

  return (
    <div style={{ display: "flex" }} id="container" className="skill_skill">
      <div id="skill-name">{skill}</div>
      <div
        id={skillClass}
        style={{
          width: "0px",
          maxWidth: `${bar_width_max}`,
          minWidth: "0px",
          backgroundColor: "#eee",
          margin: "5px 0",
        }}
      ></div>
      <div id="skill-bar">{width}%</div>
    </div>
  );
}
