import React from "react";

const Skills = () => {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React"],
    Backend: ["Node.js"],
    Database: ["MySQL", "MongoDB"],
    Tools: ["Git", "GitHub"],
    Others: ["IoT", "Arduino", "Biomedical Sensors"],
  };

  return (
    <section id="skills" className="py-16 px-8 md:px-20 bg-gray-800">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-2">{category}</h3>
            <ul className="space-y-1">
              {items.map((skill) => (
                <li key={skill} className="text-gray-300">• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

