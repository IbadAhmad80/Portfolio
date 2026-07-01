import React from "react";
import "../../styles/about.scss";

export default function Designs({ title, description, VscRocket }) {
  return (
    <div id="single-polygon-container">
      <div id="design-polygon">
        <div id="design-logo">
          <VscRocket />
        </div>
      </div>
      <div id="design-content">
        <div id="design-title">{title}</div>
        <div id="design-description">{description}</div>
      </div>
    </div>
  );
}
