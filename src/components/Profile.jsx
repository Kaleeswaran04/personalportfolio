import React from "react";

const Profile = () => {
  return (
    <section id="profile" className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-4xl md:text-6xl font-bold">Hi, I’m <span className="text-teal-400">Kaleeswaran</span></h2>
      <p className="mt-4 text-lg md:text-xl max-w-xl">
        Full Stack Developer | Biomedical Engineer  
      </p>
      <div className="mt-6 flex gap-4">
        <a href="#projects" className="px-4 py-2 bg-teal-400 text-black rounded-xl shadow-md hover:bg-teal-500">
          View Projects
        </a>
        <a href="./KALEESWARAN_webdev.pdf" download className="px-4 py-2 border border-teal-400 rounded-xl hover:bg-teal-400 hover:text-black">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Profile;

