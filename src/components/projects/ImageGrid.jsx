import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import AOS from "aos";
import { data, CATEGORIES } from "./ProjectsData";

export default function ImageGrid({ onSelect }) {
  const [category, setCategory] = React.useState("All");

  const projects = React.useMemo(() => {
    if (category === "All") return data;
    return data.filter((p) => p.groups.includes(category));
  }, [category]);

  React.useEffect(() => {
    AOS.refresh();
  }, [projects]);

  return (
    <div className="projects__body">
      <div className="filter-bar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-chip${category === cat ? " active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="project-grid">
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <motion.article
              key={project.name}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="project-card"
              onClick={() => onSelect(project)}
            >
              <div className="project-card__media">
                <img src={project.image} alt={project.name} loading="lazy" />
                <span className="project-card__overlay">View details</span>
              </div>

              <div className="project-card__body">
                <div className="project-card__top">
                  <h3 className="project-card__title">{project.name}</h3>
                  <div className="project-card__links">
                    {project.deployed && (
                      <a
                        href={project.deployed}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${project.name}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiArrowUpRight />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} on GitHub`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub />
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
