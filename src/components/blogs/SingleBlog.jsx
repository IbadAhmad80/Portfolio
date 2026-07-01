import React from "react";

export default function SingleBlog({ title, date, description, image, link }) {
  return (
    <div
      style={{ margin: "10vh 1.5em 0 1.5em", flex: "0 1 250px" }}
      id="blogs-inner-section"
      data-aos="zoom-in"
    >
      <div id="blog-image">
        <img src={image} alt="blog-pic" id="blog-image" />
      </div>
      <h3 id="blog-title">
        <a
          href={link}
          target="blank"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {title}
        </a>
      </h3>
      <h6 id="blog-date">{date}</h6>
      <h2 id="blog-bar">{}</h2>
      <p id="blog-description">{description}</p>
    </div>
  );
}
