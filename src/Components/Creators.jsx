import { React, useRef } from "react";
import { motion, useScroll } from "framer-motion";

// Import images
import GG from "../assets/GG.jpg";
import DT from "../assets/DT.jpg";
import MS from "../assets/ms.jpg";
import HS from "../assets/HS.jpg";
import MA from "../assets/MA.jpg";
import JT from "../assets/JNT.jpg";
import KS from "../assets/KS.jpg";
import HM from "../assets/HM.jpg";
import DK from "../assets/DK.jpg"
// Array of creator details (image and name)
const creators = [
  { img: DT, name: "Dhruv Tambekar" },
  { img: MS, name: "Mohd. Shayan" },
  { img: JT, name: "Jyotiraditya Tripathi" },
  { img: GG, name: "GG" },
  { img: DK, name: "Devyani Keche" },
  { img: HS, name: "Harshit Sahu" },
  { img: MA, name: "Moli Agarwal" },
  { img: HM, name: "Hassan Mansoori" },
  { img: KS, name: "Kartik Suchak" }
];

const Creators = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1.7", "1 1.5"],
  });

  return (
    <div ref={ref} className="mt-0 mb-32 mx-44">
      <section id="creators" className="flex flex-col justify-center items-center">
{/* <<<<<<< HEAD */}
{/* ======= */}
        <span  className="achieve-head mb-12 w-[20vw] rounded-xl px-2 py-3 text-center flex justify-center items-center text-4xl font-bold text-yellow-400">
{/* >>>>>>> 2610ece1b01f3138546f2b5b533c93584a51a8f9 */}
          Creators
        </span>

        {/* Map through the creators array to generate cards */}
        <motion.div
          style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,
          }}
          className="cards flex flex-row flex-wrap justify-around gap-12 mx-32"
        >
          {creators.map((creator, index) => (
            <div
              key={index}
              className="crea-1 relative lg:w-[20vw] lg:h-[40vh] w-[45vw] h-[20vh] rounded-full shadow-md"
            >
              <div className="img-1 lg:w-[20vw] lg:h-[42vh] w-[45vw] h-[21vh] rounded-full shadow-lg shadow-yellow-200 border-t-8 border-t-yellow-300 border-b-8 border-b-orange-300 border-l-4 border-l-yellow-300 border-r-4 border-r-orange-300">
                <img
                  src={creator.img}
                  alt={creator.name}
                  className="lg:w-[20vw] lg:h-[40vh] w-[45vw] h-[20vh] rounded-full object-cover shadow-md shadow-yellow-200"
                />
                <div className="name absolute hover:bg-black hover:bg-opacity-60 opacity-0 top-24 lg:top-44 py-12 text-lg lg:text-2xl font-extrabold hover:opacity-100 transition-opacity text-center w-full h-44 text-yellow-400">
                  {creator.name}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Creators;
