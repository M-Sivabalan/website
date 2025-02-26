import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Navbar/Home"
import About from "./Components/Navbar/About"
import Skill from "./Components/Navbar/Skills"
import Projects from "./Components/Navbar/Projects";
import Contact from "./Components/Navbar/Contact";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact/>

      
    </div>
  );
};

export default App;
