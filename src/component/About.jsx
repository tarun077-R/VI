import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-10 bg-black">
      <div className="cntr w-full flex text-white h-[80%]">
        {/* Left Image */}
        <div className="limg w-1/2 h-full relative">
          <img
            className="character drop-shadow-[0_0_10px_#ffffaa] drop-shadow-[0_0_25px_#1F1204] drop-shadow-[0_0_45px_#333] h-[33rem] scale-[1.3] absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2"
            src="./boy2.png"
            alt=""
          />
        </div>

        {/* About Text */}
        <div className="about-section w-[40%] py-0">
          <h1 className="text-8xl font-bold">About Me</h1>
          <h2 className="text-6xl mt-4 text-yellow-500">Hi, I'm Tarun</h2>

          <p className="mt-9 text-sm font-mono leading-relaxed">
            I’m a <span className="font-semibold">BCA student</span> with a
            strong passion for crafting digital experiences. As a{" "}
            <span className="text-yellow-400">frontend developer</span>, I love
            transforming ideas into visually appealing and interactive websites.
          </p>

          <p className="mt-3 text-sm font-mono leading-relaxed">
            My journey in web development started with curiosity and has now
            grown into building modern sites using technologies like{" "}
            <span className="font-semibold">HTML, CSS, JavaScript</span>, and
            frameworks such as{" "}
            <span className="text-yellow-400">React & Tailwind CSS</span>.
          </p>

          <p className="mt-5 text-sm font-mono leading-relaxed">
            Apart from coding, I always look forward to learning new skills,
            creating engaging UI animations, and improving user experiences. I
            enjoy collaborating with creative minds to bring impactful projects
            to life.
          </p>

          <div className="flex gap-6 mt-10">
            <button className="bg-yellow-500 px-6 py-4 text-black text-2xl hover:bg-yellow-400 transition">
              Download Resume
            </button>
            <button className="border-2 border-yellow-500 px-6 py-4 text-yellow-500 text-2xl hover:bg-yellow-500 hover:text-black transition">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
