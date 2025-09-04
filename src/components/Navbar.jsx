import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 sticky top-0 z-50 shadow-md">
      <a href="#profile"><h1 className="text-2xl font-bold text-teal-400">Portfolio</h1></a>
      
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-teal-400">About</a></li>
        <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
        <li><a href="#experience" className="hover:text-teal-400">Experience</a></li>
        <li><a href="#education" className="hover:text-teal-400">Education</a></li>
        <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

