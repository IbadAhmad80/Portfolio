import React from "react";

export default function SingleBlog({
  title,
  date,
  description,
  image,
  link,
  index = 0,
}) {
  return (
    <article
      className="blog-card"
      data-aos="fade-up"
      data-aos-delay={index * 120}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="blog-card__thumb"
      >
        <img src={image} alt={title} loading="lazy" />
      </a>
      <h3 className="blog-card__title">
        <a href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h3>
      <span className="blog-card__bar" />
      <h6 className="blog-card__date">{date}</h6>
      <p className="blog-card__desc">{description}</p>
    </article>
  );
}
