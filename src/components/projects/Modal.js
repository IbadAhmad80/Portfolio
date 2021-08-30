import React from "react";
import { motion } from "framer-motion";
import { FaShareSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Modal = ({
  setSelectedImg,
  selectedImg,
  setSelectedImgData,
  selectedImgData,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
      setSelectedImgData({ description: null, deployed: null });
    }
  };

  return (
    <motion.div className="backdrop" id="backdrop" onClick={handleClick}>
      <div className="backdrop"></div>
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <motion.div
        id="selected-image-data"
        initial={{ opacity: 0 }}
        transition={{ delay: 0.8 }}
        animate={{ opacity: 1 }}
      >
        <p id="selected-image-des">{selectedImgData.description}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
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
      <div className="backdrop"></div>
    </motion.div>
  );
};

export default Modal;
