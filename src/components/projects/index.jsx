import React from "react";
import SectionHeading from "../common/SectionHeading";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import "../../styles/projects.scss";

export default function Projects() {
  const [selected, setSelected] = React.useState(null);

  return (
    <div className="projects">
      <SectionHeading
        title="Projects"
        subtitle="A selection of products and apps I've designed, built, or scaled."
      />

      <ImageGrid onSelect={setSelected} />

      {selected && (
        <Modal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
