import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "SkillUp Tracker App",
      description: "A console based learning app for learners to attempt quizzes and track scores.",
      tech: ["Java","MySQL"],
      github: "https://github.com/Kaleeswaran04/SkillUpTracker",
      demo: "/SkillUp_Tracker.pdf"
    },
    {
      title: "Todo List Web App",
      description: "A simple and responsive todo app with CRUD operations.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Kaleeswaran04/ToDo-app",
      demo: "https://mytodoapp-ak.netlify.app/"
    },
    
  ];

  return (
    <section id="projects" className="py-16 px-8 md:px-20">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-teal-300">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <p className="mt-2 text-sm text-gray-400">Tech: {project.tech.join(", ")}</p>
            <div className="mt-4 flex gap-4">
              <a href={project.github} target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">GitHub</a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
