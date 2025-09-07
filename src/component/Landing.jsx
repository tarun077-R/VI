import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";

const Landing = () => {
  const containerRef = useRef(null); // ✅ defined container ref

  useGSAP(() => {
    const main = containerRef.current;

const handleMouseMove = (e) => {
  const { innerWidth, innerHeight } = window;
  const offsetX = e.clientX - innerWidth / 2; // distance from center

  // Text parallax
  gsap.to(".Text", {
    x: ((offsetX )* 0.06) -130,

    duration: 0.6,
    ease: "power3.out",
  });

  // Background
  gsap.to(".bg", {
    x: offsetX * 0.02,
    duration: 0.6,
    ease: "power3.out",
  });

};



    main?.addEventListener("mousemove", handleMouseMove);

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
      <div className="Navbar absolute top-0 z-10 left-0 w-full py-10 px-10">
        <div className="logo flex gap-5">
          <div className="lines flex flex-col gap-[5px]">
            <div className="line w-10 h-1 bg-white"></div>
            <div className="line w-8 h-1 bg-white"></div>
            <div className="line w-5 h-1 bg-white"></div>
          </div>
          <h3 className="text-3xl text-white leading-none -mt-[9px]">
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
        <div className="Text text-white absolute flex flex-col gap-3 top-10 left-1/2 -translate-x-1/3 scale-[1.4] rotate-[-10deg]">
          <h1 className="text-[10rem] leading-none -ml-40">Tarun</h1>
          <h1 className="text-[10rem] leading-none ml-20">Singh</h1>
          <h1 className="text-[10rem] leading-none -ml-40">Rawat</h1>
        </div>

        {/* Character */}
        <img
          className="character absolute -bottom-[550px] w-[400px] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]"
          src="/boy.png"
          alt="Character"
        />
      </div>

      {/* Bottom bar */}
      <div className="Btmbar text-white absolute bottom-0 left-0 w-full py-5 px-2 bg-gradient-to-t from-black to-transparent">
        <div className="flex gap-4 items-center">
          <i className="text-4xl ri-arrow-down-line"></i>
          <h3 className="text-xl -mt-[5px]">Scroll Down</h3>
        </div>
        <img
          className="h-[35px] absolute top-7 left-1/2 -translate-y-1/2 -translate-x-1/2"
          src="/ps5.png"
          alt="PS5"
        />
      </div>
    </div>
  );
};

export default Landing;
