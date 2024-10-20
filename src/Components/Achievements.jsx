import React, { useRef } from "react";
import Crousel from "./Crousel";
import ach1img from "../assets/tabletennis.jpg";
import ach2img from "../assets/axis.png";
import ach3img from "../assets/BKP.png";
import ach4img from "../assets/DevHack.jpeg";
import ach5img from "../assets/HackSphere.jpeg";
import ach6img from "../assets/num.jpg";
import ach7img from "../assets/auc.jpg";
import ach8img from "../assets/auct.jpg";
import { motion, useScroll } from "framer-motion";

// Keyframes for animations
const sliderKeyframes = `
  @keyframes autoRun {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  @keyframes reversePlay {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const Achievements = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 4", "1 1.5"],
  });

  return (
    <div className="mb-3">
      <section className="mt-32 min-h-screen mx-auto">
        <span className="achieve-head px-2 py-2 text-center flex justify-center items-center text-4xl font-bold text-yellow-400 shadow-md shadow-yellow-200">
          Achievements Gallery
        </span>
        <motion.div
          className="bento-grid my-6 min-h-screen flex flex-col justify-center items-center mx-auto gap-12"
          ref={ref}
          style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,
          }}
        >
          <div className="div-1-grid-1 bg-black hover:bg-slate-900 hover:opacity-100 opacity-90 bg-opacity-50 backdrop-blur-lg rounded-lg h-[20vh] lg:h-[40vh] w-[80vw] lg:w-[85vh] flex flex-col items-center justify-center overflow-hidden shadow-[0px_2px_2px_rgba(255,215,0,0.1)] transition-transform duration-300 transform hover:scale-105 hover:-rotate-2">
            <img
              src={ach1img}
              alt="tt event"
              className="w-[80%] h-[90%] object-cover -mt-8"
            />
            <h2 className="text-center font-semibold text-lg text-white">
              3rd Place at RTMNU University Tournament 2024 (Table Tennis)
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 justify-center items-center w-full">
            <div className="flex flex-col gap-5">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg h-[30vh] lg:h-[50vh] w-[90vw] max-w-[400px] flex flex-col items-center justify-center overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 hover:-rotate-3">
                <img
                  src={ach2img}
                  alt="Axis Vnit"
                  className="w-[80%] h-[90%] object-cover object-top -mt-8 mb-2"
                />
                <h2 className="text-center font-semibold text-lg text-white">
                  3rd Position at Axis Vnit 2024
                </h2>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg h-[20vh] lg:h-[35vh] w-[90vw] max-w-[400px] flex flex-col items-center justify-center overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 hover:-rotate-3">
                <img
                  src={ach4img}
                  alt="Qualified Internal Hackathon"
                  className="w-[80%] h-[calc(90%-10px)] object-cover -mt-8 mb-2"
                />
                <h2 className="text-center font-semibold text-lg text-white">
                  Qualified for Internal Hackathon
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg h-[20vh] lg:h-[35vh] w-[90vw] max-w-[400px] flex flex-col items-center justify-center overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 hover:rotate-3">
                <img
                  src={ach3img}
                  alt="Harshit Sahu BKP Winner"
                  className="w-[80%] h-[calc(90%-10px)] object-cover -mt-8 mb-2"
                />
                <h2 className="text-center font-semibold text-lg text-white">
                  Harshit Sahu - BKP Winner 4.0
                </h2>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg h-[30vh] lg:h-[50vh] w-[90vw] max-w-[400px] flex flex-col items-center justify-center overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 hover:rotate-3">
                <img
                  src={ach5img}
                  alt="HackSphere Winner"
                  className="w-[calc(100%+40px)] h-[90%] object-cover -mx-20"
                />
                <h2 className="text-center font-semibold text-lg text-white">
                  Winner of HackSphere 🏆
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg h-[20vh] lg:h-[40vh] w-[90vw] max-w-[800px] flex flex-col items-center justify-center overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 hover:-rotate-2">
            <img
              src={ach7img}
              alt="Auction Frenzy"
              className="w-[80%] h-[90%] object-cover -mt-8"
            />
            <h2 className="text-center font-semibold text-lg text-white">
              1st Position at Auction Frenzy
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 justify-center items-center w-full">
            <div className="flex flex-col gap-5">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg h-[40vh] lg:h-[60vh] w-[90vw] max-w-[400px] flex flex-col items-center justify-center overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 hover:-rotate-3">
                <img
                  src={ach8img}
                  alt="Auction Frenzy"
                  className="w-[50%] h-[90%] object-cover object-bottom -mt-8 mb-2"
                />
                <h2 className="text-center font-semibold text-lg text-white">
                  1st Position at Auction Frenzy
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg h-[40vh] lg:h-[60vh] w-[90vw] max-w-[400px] flex flex-col items-center justify-center overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 hover:rotate-3">
                <img
                  src={ach6img}
                  alt="Numan Siddiqui"
                  className="w-[80%] h-[calc(90%-10px)] object-cover -mt-8 mb-2"
                />
                <h2 className="text-center font-semibold text-lg text-white">
                  Numan Siddiqui: 2nd Position at DNC (Cricket)
                </h2>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="crousal w-full px-4 py-5 mx-auto">
          <main className="w-full mx-auto">
            <style>{sliderKeyframes}</style>
            <Crousel />
          </main>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
