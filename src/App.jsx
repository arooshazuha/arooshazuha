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
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import AmbientBackground from './components/AmbientBackground';
import BackToTop from './components/BackToTop';
import "./index.css";

function App() {
  return (
    <div className="portfolio-app-root">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Desktop Context-Aware Interactive Cursor */}
      <CustomCursor />

      {/* Interactive Ambient Canvas & Constellation Background */}
      <AmbientBackground />

      {/* Main Content Sections */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

      {/* Floating Back-to-Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
