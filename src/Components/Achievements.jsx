import React from "react";
import ach1img from "../assets/tabletennis.jpg";
import ach2img from "../assets/axis.png";
import ach3img from "../assets/BKP.png";
import ach4img from "../assets/DevHack.jpeg";
import ach5img from "../assets/HackSphere.jpeg";

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
  return (
    <>
      <section className="mt-32 min-h-screen mx-auto">
        <span className="achieve-head px-2 py-2 text-center flex justify-center items-center text-4xl font-bold text-yellow-400 shadow-md shadow-yellow-200">
          Achievements Gallery{" "}
        </span>
        <div className="bento-grid my-12 flex flex-col justify-center items-center mx-auto gap-5">
          <div className="div-1-grid-1 bg-white bg-opacity-10 backdrop-blur-md rounded-lg h-[20vh] lg:h-[40vh] w-[80vw] lg:w-[85vh] flex flex-col items-center justify-center overflow-hidden shadow-[0px_2px_2px_rgba(255,215,0,0.1)] transition-transform duration-300 transform hover:scale-105 hover:-rotate-2"> {/* Tilt to left */}
            <img
              src={ach1img}
              alt="tt event"
              className="w-[80%] h-[90%] object-cover -mt-8" // Set width to 80% and crop from top
            />
            <h2 className="text-center font-semibold text-lg text-white">
              Secured 3rd place at the RTMNU University tournament, 2024 in Table Tennis
            </h2>
            {/* Display title below the image */}
          </div>

          <div className="block-2 flex justify-center items-center gap-5">
            <div className="div-2 flex flex-col justify-center gap-5">
              <div className="grid-2 bg-white bg-opacity-10 backdrop-blur-md rounded-lg h-[30vh] w-[30vw] lg:h-[50vh] lg:w-[20vw] flex flex-col items-center justify-center overflow-hidden shadow-[0px_2px_2px_rgba(255,215,0,0.1)] transition-transform duration-300 transform hover:scale-105 hover:-rotate-3"> {/* Tilt to left */}
                <img
                  src={ach2img}
                  alt="Axis Vnit"
                  className="w-[80%] h-[calc(90%-10px)] object-cover -mt-8 mb-2" // Set width to 80%, crop from top, and adjust height
                />
                <h2 className="text-center font-semibold text-lg text-white">
                  Secured 3rd Position  at Axis Vnit 2024

                </h2>
              </div>

              <div className="grid-3 bg-white bg-opacity-10 backdrop-blur-md rounded-lg lg:h-[35vh] lg:w-[20vw] h-[20vh] w-[30vw] flex flex-col items-center justify-center overflow-hidden shadow-[0px_2px_2px_rgba(255,215,0,0.1)] transition-transform duration-300 transform hover:scale-105 hover:-rotate-3"> {/* Tilt to left */}
                <img
                  src={ach4img}
                  alt="Qualified Internal Hackathon"
                  className="w-[80%] h-[calc(90%-10px)] object-cover -mt-8 mb-2" // Set width to 80%, crop from top and adjust height
                />
                <h2 className="text-center font-semibold text-lg text-white">
                  Qualified Internal Hackathon
                </h2>
                {/* Display title below the image */}
              </div>
            </div>
            <div className="div-3 flex flex-col justify-center gap-5">
              <div className="grid-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg lg:h-[35vh] lg:w-[20vw] h-[20vh] w-[30vw] flex flex-col items-center justify-center overflow-hidden shadow-[0px_2px_2px_rgba(255,215,0,0.1)] transition-transform duration-300 transform hover:scale-105 hover:rotate-3"> {/* Tilt to right */}
                <img
                  src={ach3img}
                  alt="Harshit Sahu BKP 4.0 Winner"
                  className="w-[80%] h-[calc(90%-10px)] object-cover -mt-8 mb-2" // Set width to 80%, crop from top and adjust height
                />
                <h2 className="text-center font-semibold text-lg text-white">
                  Harshit Sahu BKP Winner
                </h2>
                {/* Display title below the image */}
              </div>
              <div className="grid-5 bg-white bg-opacity-10 backdrop-blur-md rounded-lg h-[30vh] w-[30vw] lg:h-[50vh] lg:w-[20vw] flex flex-col items-center justify-center overflow-hidden shadow-[0px_2px_2px_rgba(255,215,0,0.1)] transition-transform duration-300 transform hover:scale-105 hover:rotate-3"> {/* Tilt to right */}
                <img
                  src={ach5img}
                  alt="Winner of HackSphere"
                  className="w-[calc(100%+40px)] h-[90%] object-cover -mx-20" // Set width to 100% + margins for cropping, adjust height
                />
                <h2 className="text-center font-semibold text-lg text-white">
                  Winner of HackSphere 🏆
                </h2>
                {/* Display title below the image */}
              </div>
            </div>
          </div>
        </div>
        <div className="crousal max-w-[124rem] px-4 py-16 mx-auto">
          <main className="w-full max-w-[1200px] mx-auto">
            {/* Injecting keyframes */}
            <style>{sliderKeyframes}</style>

            {/* <Crousel images={sliderImages1} width="100px" height="50px" quantity={10} /> */}

            {/* <Crousel images={sliderImages2} reverse width="200px" height="200px" quantity={9} /> */}
            {/* <Crousel/> */}
          </main>
        </div>
      </section>
    </>
  );
};

export default Achievements;
