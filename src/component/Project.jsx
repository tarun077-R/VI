import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Practice Projects",
      desc: "See My Efforts.",
      image: "./work.png",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://tarun8.netlify.app/",
    },
    {
      title: "Practice Projects",
      desc: "See My Efforts.",
      image: "./CrativeDeveloper.png",
      github: "#",
      demo: "https://tungtung1.netlify.app/",
    },
    {
      title: "Practice Projects",
      desc: "See My Efforts.",
      image: "./App.png",
      github: "#",
      demo: "https://tarun14.netlify.app/",
    },
    {
      title: "Practice Projects",
      desc: "See My Efforts.",
      image: "./Course.png",
      github: "#",
      demo: "https://tarun15.netlify.app/",
    },
    {
      title: "Practice Projects",
      desc: "See My Efforts.",
      image: "./agence.png",
      github: "https://github.com/tarun077-R/k72.git",
      demo: "https://tarrun.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-black text-white py-16 px-6 overflow-hidden"
    >
      <h1 className="lg:text-9xl text-6xl font-bold mb-14 text-center text-yellow-400">
        Pro<span className="text-white">jects</span>
      </h1>

      {/* Horizontal Scroll */}
      <div className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide snap-x snap-mandatory">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="w-[300px] sm:w-[350px] bg-zinc-800 rounded-2xl shadow-lg overflow-hidden flex-shrink-0 hover:scale-105 transition-transform snap-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl sm:text-2xl font-semibold">{project.title}</h2>
              <p className="text-gray-400 font-sans font-bold text-sm sm:text-lg mt-2">
                {project.desc}
              </p>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black text-sm sm:text-lg"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm sm:text-lg"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
