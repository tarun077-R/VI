import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Intro = ({ setShowContent }) => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-text", {
      scale: 2,
      rotate:5,
      duration: 3,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%", // grow from center
    })
    .to(".fade-black", {
      opacity: 1,
      duration:0.1,
      onComplete: () => setShowContent(true),
    });
  });

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="viMask">
            <rect width="100%" height="100%" fill="black" />
            <text
              className="vi-text"
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="100"
              fontFamily="Arial Black"
              fill="white"
            >
             TARUN
            </text>
          </mask>
        </defs>

        {/* Background image visible only inside VI */}
        <image
          href="./sky.png"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#viMask)"
        />

        {/* Full black overlay for smooth ending */}
        <rect className="fade-black" width="100%" height="100%" fill="black" opacity="0" />
      </svg>
    </div>
  );
};

export default Intro;
