import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; // Import the new component
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./index.css"; // Ensure global styles are imported

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
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
