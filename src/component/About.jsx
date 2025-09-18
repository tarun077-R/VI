import React from "react";
import { Link } from "react-router-dom";   // ✅ import Link

const About = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 bg-black">
      <div className="cntr relative w-full flex flex-col lg:flex-row items-center text-white h-full lg:h-[80%]">
        
        {/* Left Image (hidden on mobile) */}
        <div className="limg w-full lg:w-1/2 hidden lg:flex items-center justify-center relative">
          <img
            className="character drop-shadow-[0_0_10px_#ffffaa] drop-shadow-[0_0_25px_#1F1204] drop-shadow-[0_0_45px_#333] 
                       h-[20rem] md:h-[28rem] lg:h-[33rem] scale-[1.1] lg:scale-[1.3]"
            src="/boy2.png"
            alt="Tarun Character"
          />
        </div>

        {/* About Text */}
        <div className="about-section w-full lg:w-[40%] py-8 lg:py-0 text-center lg:text-left px-2 sm:px-6">
          {/* Headings */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
            About Me
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-3 sm:mt-4 text-yellow-500">
            Hi, I'm Tarun
          </h2>

          {/* Paragraphs */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-mono leading-relaxed">
            I’m a <span className="font-semibold">BCA student</span> with a strong passion for crafting digital experiences. 
            As a <span className="text-yellow-400">frontend developer</span>, I love transforming ideas into visually appealing 
            and interactive websites.
          </p>

          <p className="mt-3 text-sm sm:text-base md:text-lg font-mono leading-relaxed">
            My journey in web development started with curiosity and has now grown into building modern sites using 
            technologies like <span className="font-semibold">HTML, CSS, JavaScript</span>, and frameworks such as 
            <span className="text-yellow-400"> React & Tailwind CSS</span>.
          </p>

          <p className="mt-3 text-sm sm:text-base md:text-lg font-mono leading-relaxed">
            Apart from coding, I enjoy learning new skills, creating engaging UI animations, and improving user experiences. 
            Collaborating with creative minds to bring impactful projects to life excites me.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-10 justify-center lg:justify-start">
            {/* Resume Button */}
            <a
              href="/Tarun-Resume.pdf"
              download="Tarun-Resume.pdf"
              className="bg-yellow-500 px-6 py-3 sm:px-8 sm:py-4 text-black 
                         text-base sm:text-lg lg:text-xl font-semibold 
                         hover:bg-yellow-400 transition text-center"
            >
              Download Resume
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
