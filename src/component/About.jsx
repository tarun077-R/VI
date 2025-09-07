import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-5 sm:px-10 bg-black">
      <div className="cntr relative w-full flex flex-col lg:flex-row text-white h-full lg:h-[80%]">

        {/* Left Image */}
         <div className=" limg w-1/2 lg:block hidden h-full ">
          <img
            className="character drop-shadow-[0_0_10px_#ffffaa] drop-shadow-[0_0_25px_#1F1204] drop-shadow-[0_0_45px_#333] h-[33rem] scale-[1.3] absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2"
            src="./boy2.png"
            alt=""
          />
        </div>

        {/* About Text */}
        <div className="about-section w-full lg:w-[40%] py-8 lg:py-0 text-center lg:text-left px-2 sm:px-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
            About Me
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-2 sm:mt-4 text-yellow-500">
            Hi, I'm Tarun
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-mono leading-relaxed">
            I’m a <span className="font-semibold">BCA student</span> with a strong passion for crafting digital experiences. As a <span className="text-yellow-400">frontend developer</span>, I love transforming ideas into visually appealing and interactive websites.
          </p>

          <p className="mt-3 text-sm sm:text-base md:text-lg font-mono leading-relaxed">
            My journey in web development started with curiosity and has now grown into building modern sites using technologies like <span className="font-semibold">HTML, CSS, JavaScript</span>, and frameworks such as <span className="text-yellow-400">React & Tailwind CSS</span>.
          </p>

          <p className="mt-3 text-sm sm:text-base md:text-lg font-mono leading-relaxed">
            Apart from coding, I enjoy learning new skills, creating engaging UI animations, and improving user experiences. Collaborating with creative minds to bring impactful projects to life excites me.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-10 justify-center lg:justify-start">
            <button className="bg-yellow-500 px-6 py-3 sm:py-4 text-black text-lg sm:text-2xl hover:bg-yellow-400 transition">
              Download Resume
            </button>
            <button className="border-2 border-yellow-500 px-6 py-3 sm:py-4 text-yellow-500 text-lg sm:text-2xl hover:bg-yellow-500 hover:text-black transition">
              Contact Me
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
