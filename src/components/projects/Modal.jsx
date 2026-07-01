import React from "react";
import { motion } from "framer-motion";
import { FaShareSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({
  setSelectedImg,
  selectedImg,
  setSelectedImgData,
  selectedImgData,
}) => {
  const handleClick = (e) => {
    setSelectedImg(null);
    setSelectedImgData({
      description: null,
      deployed: null,
      technologies: null,
      name: null,
      month_created: null,
    });
    // document.querySelectorAll("body").style.overflowY = "hidden";
  };

  return (
    <div>
      <motion.div className="backdrop" id="backdrop">
        <div className="close-icon" onClick={(e) => handleClick()}>
          <AiOutlineClose />
        </div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          transitionTime={10}
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          stopOnHover={false}
          className="carousel"
        >
          {selectedImg &&
            selectedImg.map((image, index) => {
              return (
                <motion.img
                  src={image}
                  alt="enlarged pic"
                  initial={{ y: "-100vh" }}
                  animate={{ y: 0 }}
                  key={index}
                />
              );
            })}
        </Carousel>

        <motion.div
          id="selected-image-data"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.8 }}
          animate={{ opacity: 1 }}
        >
          <p id="selected-project-name">{selectedImgData.name}</p>
          {/* <p id="selected-project-des">{selectedImgData.description}</p> */}

          <span id="selected-project-headings">Technologies -</span>

          {selectedImgData.technologies.map((technology) => {
            return (
              <span id="selected-project-technology" key={technology}>
                {technology}
              </span>
            );
          })}
          <br />
          <br />
          <span id="selected-project-headings">Role -</span>
          <span id="selected-project-role">{selectedImgData.role}</span>
          <br />
          <br />
          <span id="selected-project-headings">Date -</span>
          <span id="selected-project-role">
            {selectedImgData.month_created}
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {selectedImgData.deployed ? (
              <button id="site-link">
                <a
                  href={selectedImgData.deployed}
                  target="blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <FaShareSquare /> &nbsp;Visit Site
                </a>
              </button>
            ) : (
              ""
            )}
            <button id="site-link">
              <a
                href={selectedImgData.github}
                target="blank"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <AiFillGithub /> &nbsp;Github
              </a>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Modal;
