import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Intro from "./component/Intro";
import Landing from "./component/Landing";
import About from "./component/About";
import SkillsPage from "./component/skills/SkillsPage";
import Project from "./component/Project";
import FeedbackPage from "./component/FeedbackPage";


const App = () => {
  const [showContent, setShowContent] = useState(false);

  // Animate hero AFTER intro finishes
  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.3,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.3,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 1,
      bottom: "0%",
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".Text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });
  }, [showContent]);

  return (
    <>
      {!showContent && <Intro setShowContent={setShowContent} />}

      {showContent && (
        <div className="main overflow-hidden w-full rotate-[-10deg] scale-[1.7] md:scale-[1.7]">
          <Landing />
          <About />
          <SkillsPage />
          <Project/>
          <FeedbackPage />
        </div>
      )}
    </>
  );
};

export default App;
