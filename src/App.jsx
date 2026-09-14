import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./index.css";

function App() {
  return (
    <div>
      {/* BACKGROUND LAYER */}
      <div className="background-container">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
