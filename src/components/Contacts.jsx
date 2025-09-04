import React from "react";

const Contacts = () => {
  return (
    <section id="contact" className="py-16 px-8 md:px-20 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-4">Feel free to reach out via email or connect on social platforms.</p>
      <div className="space-y-2">
        <p>Email: {" "}<a href="https://mail.google.com/mail/?view=cm&fs=1&to=kaleeswaran0905@gmail.com" className="text-teal-400 hover:underline" rel="noopener noreferrer" target="_blank">kaleeswaran0905@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/kalees4/" target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">linkedin.com/kaleeswaran</a></p>
        <p>GitHub: <a href="https://github.com/Kaleeswaran04" target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">github.com/kaleeswaran</a></p>
      </div>
    </section>
  );
};

export default Contacts;