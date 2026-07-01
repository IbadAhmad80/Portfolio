import React from "react";
import "./App.css";
import About from "./components/about";
import Blogs from "./components/blogs";
import ContactUS from "./components/contact";
import NavBar from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Aos from "aos";
import "aos/dist/aos.css";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    Aos.init({
      offset: 200, // offset (in px) from the original trigger point
      duration: 1000, // values from 0 to 3000, with step 50m
    });

    // screen width eventlistner
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 0);

    window.addEventListener("resize", debouncedHandleResize);

    //window scroll eventlisner
    const changeHeaderPosition = () => {
      if (window.scrollY >= 450) setScrolled(true);
      else setScrolled(false);
    };
    //attaching event listner for scroll value
    window.addEventListener("scroll", changeHeaderPosition);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
      window.removeEventListener("scroll", changeHeaderPosition);
    };
  }, []);

  return (
    <div className="App">
      <div id="home">
        {dimensions.width < 778 && <NavBar width={window.innerWidth} />}
        {dimensions.width > 777 && scrolled && (
          <NavBar width={window.innerWidth} />
        )}

        <Home />
      </div>
      <span id="about">
        <About />
      </span>
      <span id="projects">
        <Projects />
      </span>
      <span id="blogs">
        <Blogs />
      </span>
      <span id="contact">
        <ContactUS />
      </span>
      <span>
        <Footer />
      </span>
    </div>
  );
}

export default App;
