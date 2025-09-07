import React, { useRef } from "react";
import { motion } from "framer-motion";

function Card({ title, description, skills, color, reference, index }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className={`absolute flex flex-col items-center justify-start
        w-60 sm:w-64 md:w-72 h-64 sm:h-72 md:h-80 px-4 sm:px-6 py-6 sm:py-8
        rounded-3xl text-white ${color} overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing`}
      style={{
        top: `${40 + index * 10}%`, // stagger cards vertically on small screens
        left: `${50 + index * 5}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <h3 className="text-xl sm:text-2xl font-bold mb-2 tracking-wide">{title}</h3>
      <p className="font-sans text-xs sm:text-sm md:text-sm text-gray-200 text-center">
        {description}
      </p>

      <div className="font-sans mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
          >
            <i className={`ri-${skill.icon} text-2xl sm:text-3xl`} />
            <span className="text-xs sm:text-xs mt-1">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function SkillsPage() {
  const ref = useRef(null);

  const skillGroups = [
    {
      title: "Frontend",
      description: "Modern web technologies for building UI",
      color: "bg-gradient-to-tr from-orange-500 to-pink-500",
      skills: [
        { name: "HTML", icon: "html5-fill" },
        { name: "CSS", icon: "css3-fill" },
        { name: "JavaScript", icon: "javascript-fill" },
        { name: "React", icon: "reactjs-fill" },
      ],
    },
    {
      title: "Styling & Animations",
      description: "Libraries for styling and motion effects",
      color: "bg-gradient-to-tr from-sky-400 to-cyan-500",
      skills: [
        { name: "Tailwind", icon: "tailwind-css-fill" },
        { name: "GSAP", icon: "magic-fill" },
        { name: "Framer", icon: "layout-masonry-fill" },
        { name: "Motion", icon: "slideshow-fill" },
      ],
    },
    {
      title: "Tools",
      description: "Productivity & collaboration essentials",
      color: "bg-gradient-to-tr from-gray-700 to-gray-900",
      skills: [
        { name: "GitHub", icon: "github-fill" },
        { name: "VS Code", icon: "code-box-fill" },
        { name: "Figma", icon: "brush-fill" },
        { name: "NPM", icon: "npmjs-fill" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative w-full min-h-screen bg-black text-center overflow-hidden p-6 sm:p-10"
    >
      <h1 className="absolute top-0 w-full mr-5 text-center
        text-6xl sm:text-7xl md:text-9xl opacity-10 select-none text-yellow-400">
        Ski<span className="text-white">lls</span>
      </h1>

      {skillGroups.map((group, index) => (
        <Card
          key={index}
          title={group.title}
          description={group.description}
          skills={group.skills}
          color={group.color}
          reference={ref}
          index={index}
        />
      ))}
    </section>
  );
}

export default SkillsPage;
