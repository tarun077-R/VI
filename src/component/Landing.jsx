import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";

const Landing = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const main = containerRef.current;

    const handleMouseMove = (e) => {
      const { innerWidth } = window;
      const offsetX = e.clientX - innerWidth / 2;

      // Text parallax (desktop only)
      gsap.to(".Text", {
        x: offsetX * 0.06 - 80,
        duration: 0.6,
        ease: "power3.out",
      });

      // Background parallax
      gsap.to(".bg", {
        x: offsetX * 0.02,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    if (window.innerWidth > 768) {
      // only for desktop
      main?.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      main?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="Landing main w-full h-screen bg-black overflow-hidden relative"
    >
      {/* Navbar */}
      <div className="Navbar absolute top-0 z-10 left-0 w-full md:py-10 py-3 md:px-10 px-4">
        <div className="logo flex gap-5 items-center">
          <div className="lines flex flex-col gap-[5px]">
            <div className="line md:w-10 w-6 h-1 bg-white"></div>
            <div className="line md:w-8 w-4 h-1 bg-white"></div>
            <div className="line md:w-5 w-2 h-1 bg-white"></div>
          </div>
          <h3 className="md:text-3xl text-lg text-white leading-none md:-mt-[9px] -mt-[2px]">
            Tarun Rawat
          </h3>
        </div>
      </div>

      {/* Background */}
      <div className="Imagediv relative w-full h-screen overflow-hidden">
        <img
          className="sky absolute top-0 left-0 w-full h-full object-cover"
          src="/sky.png"
          alt="Sky"
        />
        <img
          className="bg absolute top-0 left-0 w-full h-full object-cover"
          src="/bg.png"
          alt="Background"
        />

        {/* Text */}
        <div className="Text text-white absolute flex flex-col gap-2 md:gap-3 md:top-10 top-64 left-1/2 -translate-x-1/2 scale-100 md:scale-[1.4] rotate-[-5] md:rotate-[-10]">
          <h1 className="md:text-[10rem] text-[6rem] leading-none md:-ml-40 -ml-6">
            Tarun
          </h1>
          <h1 className="md:text-[10rem] text-[6rem] leading-none md:ml-20 ml-10">
            Singh
          </h1>
          <h1 className="md:text-[10rem] text-[6rem] leading-none md:-ml-40 -ml-6">
            Rawat
          </h1>
        </div>

        {/* Character */}
        <img
          className="character absolute bottom-0 md:-bottom-[200px] w-[300px] md:w-[400px] left-1/2 -translate-x-1/2 scale-[1.5] md:scale-[3] rotate-[-10deg]"
          src="/boy.png"
          alt="Character"
        />
      </div>

      {/* Bottom bar */}
      <div className="Btmbar text-white absolute bottom-0 left-0 w-full py-5 px-2 bg-gradient-to-t from-black to-transparent">
        <div className="flex gap-4 items-center">
          <i className="md:text-4xl text-xl ri-arrow-down-line"></i>
          <h3 className="md:text-xl text-sm md:block hidden -mt-[2px]">
            Scroll Down
          </h3>
        </div>
        <img
          className="md:h-[35px] h-[20px] absolute top-7 left-1/2 -translate-y-1/2 -translate-x-1/2"
          src="/ps5.png"
          alt="PS5"
        />
      </div>
    </div>
  );
};

export default Landing;
