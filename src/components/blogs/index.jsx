import React from "react";
import "../../styles/blogs.scss";
import SingleBlog from "./SingleBlog";
import redux from "../../assets/redux-blog.jpg";
import react from "../../assets/react-blog.jpg";
import web from "../../assets/web-blog.jpg";
import csr from "../../assets/csr-ssr-blog.jpg";

const POSTS = [
  {
    title: "Why one Should use Redux?",
    date: "May 15, 2021",
    description:
      "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces, created by Dan Abramov and Andrew Clark.",
    image: redux,
    link: "https://ibad23ahmad.medium.com/why-one-should-use-redux-e1057c24e6ab",
  },
  {
    title: "Road Map for Web Development",
    date: "May 8, 2021",
    description:
      "Web development can range from a simple single static page of plain text to complex web applications, electronic businesses, and social network services. Here's a practical road map to get there.",
    image: web,
    link: "https://ibad23ahmad.medium.com/road-map-for-web-development-in-2021-3ed9b5d56aa9",
  },
  {
    title: "Getting Started with React JS",
    date: "May 11, 2021",
    description:
      "React is an open-source front-end JavaScript library for building user interfaces or UI components, maintained by Facebook and a community of individual developers and companies.",
    image: react,
    link: "https://ibad23ahmad.medium.com/getting-started-with-react-js-db3bf6134f14",
  },
  {
    title: "CSR VS SSR for Development",
    date: "June 6, 2021",
    description:
      "Client-side rendering manages routing dynamically without refreshing the page, while server-side rendering displays a fully populated page on first load for any route of the website.",
    image: csr,
    link: "https://ibad23ahmad.medium.com/client-side-rendering-csr-vs-server-side-rendering-ssr-b98c032005c0",
  },
];

export default function Blogs() {
  return (
    <div id="blogs-container">
      <div id="heading_container">
        <h2 id="heading" data-aos="fade-right" data-aos-duration="1000">
          Blogs
        </h2>
        <h2 id="heading_bar" data-aos="zoom-out" data-aos-duration="2000">
          {}
        </h2>
      </div>
      <div id="blogs-section">
        {POSTS.slice(0, 3).map((post) => (
          <SingleBlog key={post.title} {...post} />
        ))}
      </div>
    </div>
  );
}
