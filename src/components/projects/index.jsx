import React from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import "../../styles/projects.scss";

export default function Projects() {
  const [selected, setSelected] = React.useState(null);

  return (
    <div id="projects-container">
      <div id="heading_container">
        <h2 id="heading" data-aos="fade-right" data-aos-duration="1000">
          Projects
        </h2>
        <h2 id="heading_bar" data-aos="zoom-out" data-aos-duration="2000">
          {}
        </h2>
        <p id="section_subtitle">
          A selection of products and apps I've designed, built, or scaled.
        </p>
      </div>

      <ImageGrid onSelect={setSelected} />

      {selected && (
        <Modal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
