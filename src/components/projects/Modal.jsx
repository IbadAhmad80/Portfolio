import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Modal = ({ project, onClose }) => {
  // Close on Escape and lock body scroll while open.
  React.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const slides =
    project.gallery && project.gallery.length ? project.gallery : [project.image];

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-panel"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <FiX />
        </button>

        <div className="modal-media">
          {slides.length > 1 ? (
            <Carousel
              autoPlay
              infiniteLoop
              interval={3500}
              transitionTime={500}
              showStatus={false}
              showArrows
              showThumbs={false}
              stopOnHover
            >
              {slides.map((image, index) => (
                <img src={image} alt={`${project.name} ${index + 1}`} key={index} />
              ))}
            </Carousel>
          ) : (
            <img src={slides[0]} alt={project.name} />
          )}
        </div>

        <div className="modal-info">
          <h3 className="modal-title">{project.name}</h3>
          <p className="modal-desc">{project.description}</p>

          <div className="modal-meta">
            <div>
              <span className="modal-label">Role</span>
              <span className="modal-value">{project.role}</span>
            </div>
            <div>
              <span className="modal-label">Timeline</span>
              <span className="modal-value">{project.date}</span>
            </div>
          </div>

          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="modal-actions">
            {project.deployed && (
              <a
                href={project.deployed}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                <FiExternalLink /> Visit Site
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost btn--ghost-dark"
              >
                <FiGithub /> GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
