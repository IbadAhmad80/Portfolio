import React from "react";
import About from "./components/about";
import Blogs from "./components/blogs";
import ContactUS from "./components/contact";
import NavBar from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    Aos.init({
      offset: 120,
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="contact">
        <ContactUS />
      </section>
      <Footer />
    </div>
  );
}

export default App;
