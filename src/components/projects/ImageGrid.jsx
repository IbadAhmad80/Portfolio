import React from "react";
import { motion } from "framer-motion";
import { data } from "./ProjectsData";
import AOS from "aos";

export default function ImageGrid({ setSelectedImg, setSelectedImgData }) {
  // const { loading, data } = useQuery(getPackages);
  const [selectedCategory, setSelectedCatgeory] = React.useState("React");
  const [activePackages, setActivePackages] = React.useState(null);

  React.useEffect(() => {
    document.querySelector(".active").classList.remove("active");
    document.querySelector(`.${selectedCategory}`).classList.add("active");
    if (selectedCategory === "all") {
      setActivePackages(data);
      return;
    }

    const filteredprojects =
      data &&
      data.filter(({ group }) => {
        return group.includes(selectedCategory);
      });
    setActivePackages(filteredprojects);
  }, [selectedCategory]);

  React.useEffect(() => {
    AOS.refresh();
  }, [activePackages]);

  return (
    <div>
      <div className="items">
        <span
          className="item React active"
          onClick={() => setSelectedCatgeory("React")}
        >
          React / Next
        </span>
        <span
          className="item NodeJS"
          onClick={() => setSelectedCatgeory("NodeJS")}
        >
          Node
        </span>
        <span
          className="item Redux"
          onClick={() => setSelectedCatgeory("Redux")}
        >
          Redux
        </span>

        <span className="item SASS" onClick={() => setSelectedCatgeory("SASS")}>
          SASS
        </span>

        <span className="item Ruby" onClick={() => setSelectedCatgeory("Ruby")}>
          Rails / Ruby
        </span>
      </div>
      <div id="img-grid" data-aos="fade-up" data-aos-duration="1500">
        {data &&
          activePackages &&
          activePackages.map((doc) => (
            <motion.div
              id="img-wrap"
              key={doc.name}
              layout
              whileHover={{ opacity: 1 }}
            >
              <motion.img
                src={doc.image2}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0 }}
                alt="uploaded pic"
              />

              <div id="overlay">
                <div id="project-name">{doc.name}</div>
                <div id="project-technologies">{doc.technologies}</div>

                <button
                  id="project-modal-btn"
                  onClick={() => {
                    // document.querySelector("body").style.overflow = "hidden";
                    setSelectedImg(doc.images);
                    setSelectedImgData({
                      description: doc.description,
                      deployed: doc.deployed,
                      github: doc.github,
                      name: doc.name,
                      technologies: doc.category,
                      month_created: doc.month_created,
                      role: doc.role,
                    });
                  }}
                >
                  LERAN MORE
                </button>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
