import React from "react";

const Education = () => {
  const education = [
    {
      degree: "B.E. Biomedical Engineering",
      institution: "V.S.B. Engineering college, Karur",
      duration: "2022 - 2026",
      details: "Specialized in Biomedical Instrumentation, hospital management and IoT in Healthcare."
    },
    {
      degree: "Certifications",
      institution: "Online Platforms",
      duration: "2024 - Present",
      details: "Java Programming, Web Development, Python."
    }
  ];

  return (
    <section id="education" className="py-16 px-8 md:px-20">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-teal-300">{edu.degree}</h3>
            <p className="text-gray-400">{edu.institution} | {edu.duration}</p>
            <p className="mt-2 text-gray-300">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
