import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contacts />
    </div>
  );
}

export default App;
