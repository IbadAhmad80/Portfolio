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
  const [theme, setTheme] = React.useState(
    () => localStorage.getItem("theme") || "light"
  );

  React.useEffect(() => {
    Aos.init({
      offset: 120,
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className="App">
      <NavBar theme={theme} onToggleTheme={toggleTheme} />
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
