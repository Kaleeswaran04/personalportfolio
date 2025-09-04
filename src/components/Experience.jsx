import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Intern - Biomedical Engineer",
      company: "Rohan polyclinic",
      duration: "June 2024 - July 2024",
      tasks: [
        "Calibrated and maintained medical equipment.",
        "Worked with biomedical sensors and IoT systems.",
        "Learned real-world healthcare technology management."
      ]
    },
    // {
    //   role: "Hackathon Participant",
    //   company: "Zoho Hackathon",
    //   duration: "2025",
    //   tasks: [
    //     "Built a web application prototype in 24 hours.",
    //     "Worked on full-stack features including frontend, backend, and database."
    //   ]
    // }
  ];

  return (
    <section id="experience" className="py-16 px-8 md:px-20 bg-gray-800">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-teal-300">{exp.role}</h3>
            <p className="text-gray-400">{exp.company} | {exp.duration}</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {exp.tasks.map((task, i) => (
                <li key={i} className="text-gray-300">{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

