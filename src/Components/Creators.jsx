import { React, useRef } from "react";
import GG from "../assets/GG.jpg";
import DT from "../assets/DT.jpg";
import MS from "../assets/ms.jpg";
import HS from "../assets/HS.jpg";
import MA from "../assets/MA.jpg";
import JT from "../assets/JT.jpg";
import KS from "../assets/KS.jpg";
import HM from "../assets/HM.jpg";
import { motion, useScroll } from "framer-motion";

const Creators = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 4", "1 1.5"],
  });
  return (
    <div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    >
      <section className="mt-12 mb-32 mx-44 flex flex-col justify-center items-center">
        <span className="achieve-head mb-12 w-[20vw] rounded-xl px-2 py-3 text-center flex justify-center items-center text-4xl font-bold text-yellow-400">
          Creators{" "}
        </span>

        <motion.div
          ref={ref}
          style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,
          }}
          className="cards flex flex-row flex-wrap justify-around gap-12 mx-32"
        >
          <div className="crea-1 relative lg:w-[20vw] lg:h-[40vh] w-[45vw] h-[20vh] rounded-full shadow-md ">
            <div className="img-1 lg:w-[20vw] lg:h-[42vh] w-[45vw] h-[21vh] rounded-full shadow-lg shadow-yellow-200 border-t-8 border-t-yellow-300 border-b-8 border-b-orange-300 border-l-4 border-l-yellow-300 border-r-4 border-r-orange-300 ">
              <img
                src={DT}
                alt=""
                className="lg:w-[20vw] lg:h-[40vh] w-[45vw] h-[20vh] rounded-full object-cover shadow-md shadow-yellow-200"
              />
              <div className="name absolute hover:bg-black hover:bg-opacity-60 opacity-0 top-24 lg:top-44 py-12 text-lg lg:text-2xl font-extrabold  hover:opacity-100 transition-opacity text-center w-full h-44 text-yellow-400">Dhruv Tambekar</div>
            </div>
            {/* <p>Creator 1</p> */}
          </div>
          <div className="crea-1 w-[45vw] h-[20vh] lg:w-[20vw] lg:h-[40vh] rounded-full shadow-md shadow-yellow-200 relative">
            <div className="img-1 lg:w-[20vw] lg:h-[42vh] w-[45vw] h-[21vh] rounded-full shadow-lg shadow-yellow-200 border-t-8 border-t-yellow-300 border-b-8 border-b-orange-300 border-l-4 border-l-yellow-300 border-r-4 border-r-orange-300 ">
              <img
                src={GG}
                alt=""
                className="lg:w-[20vw] lg:h-[40vh] w-[45vw] h-[20vh] rounded-full object-cover shadow-md shadow-yellow-200"
              />
              <div className="name absolute hover:bg-black hover:bg-opacity-60 opacity-0 top-24 lg:top-44 py-12 text-lg lg:text-2xl font-extrabold  hover:opacity-100 transition-opacity text-center w-full h-44 text-yellow-400">GG</div>
            </div>
            {/* <p>Creator 2</p> */}
          </div>
          <div className="crea-1 w-[45vw] h-[20vh] lg:w-[20vw] lg:h-[40vh] rounded-full shadow-md shadow-yellow-200 relative">
            <div className="img-1 lg:w-[20vw] lg:h-[42vh] w-[45vw] h-[21vh] rounded-full shadow-lg shadow-yellow-200 border-t-8 border-t-yellow-300 border-b-8 border-b-orange-300 border-l-4 border-l-yellow-300 border-r-4 border-r-orange-300 ">
              <img
                src={MS}
                alt="ms"
                className="lg:w-[20vw] lg:h-[40vh] w-[45vw] h-[20vh] rounded-full object-cover shadow-md shadow-yellow-200"
              />
              <div className="name absolute hover:bg-black hover:bg-opacity-60 opacity-0 top-24 lg:top-44 py-12 text-lg lg:text-2xl font-extrabold  hover:opacity-100 transition-opacity text-center w-full h-44 text-yellow-400">Mohd. Shayan</div>
            </div>
            {/* <p>Creator 3</p> */}
          </div>
          <div className="crea-1 w-[45vw] h-[20vh] lg:w-[20vw] lg:h-[40vh] rounded-full shadow-md shadow-yellow-200 relative">
            <div className="img-1 lg:w-[20vw] lg:h-[42vh] w-[45vw] h-[21vh] rounded-full shadow-lg shadow-yellow-200 border-t-8 border-t-yellow-300 border-b-8 border-b-orange-300 border-l-4 border-l-yellow-300 border-r-4 border-r-orange-300 ">
              <img
                src={JT}
                alt=""
                className="lg:w-[20vw] lg:h-[40vh] w-[45vw] h-[20vh] rounded-full object-cover shadow-md shadow-yellow-200"
              />
              <div className="name absolute hover:bg-black hover:bg-opacity-60 opacity-0 top-24 lg:top-44 py-12 text-lg lg:text-2xl font-extrabold  hover:opacity-100 transition-opacity text-center w-full h-44 text-yellow-400">Jyotiraditya Tripathi</div>
            </div>
            {/* <p>Creator 1</p> */}
          </div>
          <div className="crea-1 w-[45vw] h-[20vh] lg:w-[20vw] lg:h-[40vh] rounded-full shadow-md shadow-yellow-200 relative">
            <div className="img-1 lg:w-[20vw] lg:h-[42vh] w-[45vw] h-[21vh] rounded-full shadow-lg shadow-yellow-200 border-t-8 border-t-yellow-300 border-b-8 border-b-orange-300 border-l-4 border-l-yellow-300 border-r-4 border-r-orange-300 ">
              <img
                src={HS}
                alt=""
                className="lg:w-[20vw] lg:h-[40vh] w-[45vw] h-[20vh] rounded-full object-cover shadow-md shadow-yellow-200"
              />
              <div className="name absolute hover:bg-black hover:bg-opacity-60 opacity-0 top-24 lg:top-44 py-12 text-lg lg:text-2xl font-extrabold  hover:opacity-100 transition-opacity text-center w-full h-44 text-yellow-400">Harshit Sahu</div>
            </div>
            {/* <p>Creator 2</p> */}
          </div>
          <div className="crea-1 w-[45vw] h-[20vh] lg:w-[20vw] lg:h-[40vh] rounded-full shadow-md shadow-yellow-200 relative">
            <div className="img-1 lg:w-[20vw] lg:h-[42vh] w-[45vw] h-[21vh] rounded-full shadow-lg shadow-yellow-200 border-t-8 border-t-yellow-300 border-b-8 border-b-orange-300 border-l-4 border-l-yellow-300 border-r-4 border-r-orange-300 ">
              <img
                src={MA}
                alt=""
                className="lg:w-[20vw] lg:h-[40vh] w-[45vw] h-[20vh] rounded-full object-cover shadow-md shadow-yellow-200"
              />
              <div className="name absolute hover:bg-black hover:bg-opacity-60 opacity-0 top-24 lg:top-44 py-12 text-lg lg:text-2xl font-extrabold  hover:opacity-100 transition-opacity text-center w-full h-44 text-yellow-400">Moli Agarwal</div>
            </div>
            {/* <p>Creator 3</p> */}
          </div>
          <div className="crea-1 w-[45vw] h-[20vh] lg:w-[20vw] lg:h-[40vh] rounded-full shadow-md shadow-yellow-200 relative">
            <div className="img-1 lg:w-[20vw] lg:h-[42vh] w-[45vw] h-[21vh] rounded-full shadow-lg shadow-yellow-200 border-t-8 border-t-yellow-300 border-b-8 border-b-orange-300 border-l-4 border-l-yellow-300 border-r-4 border-r-orange-300 ">
              <img
                src={HM}
                alt=""
                className="lg:w-[20vw] lg:h-[40vh] w-[45vw] h-[20vh] rounded-full object-cover shadow-md shadow-yellow-200"
              />
              <div className="name absolute hover:bg-black hover:bg-opacity-60 opacity-0 top-24 lg:top-44 py-12 text-lg lg:text-2xl font-extrabold  hover:opacity-100 transition-opacity text-center w-full h-44 text-yellow-400">Hassan Mansuri</div>
            </div>
            {/* <p>Creator 3</p> */}
          </div>
          <div className="crea-1 w-[45vw] h-[20vh] lg:w-[20vw] lg:h-[40vh] rounded-full shadow-md shadow-yellow-200 relative">
            <div className="img-1 lg:w-[20vw] lg:h-[42vh] w-[45vw] h-[23vh] rounded-full shadow-lg shadow-yellow-200 border-t-8 border-t-yellow-300 border-b-8 border-b-orange-300 border-l-4 border-l-yellow-300 border-r-4 border-r-orange-300 ">
              <img
                src={KS}
                alt=""
                className="lg:w-[20vw] lg:h-[40vh] w-[45vw] h-[22vh] rounded-full object-cover shadow-md shadow-yellow-200"
              />
              <div id="creators" className="name absolute hover:bg-black hover:bg-opacity-60 opacity-0 top-24 lg:top-44 py-12 text-lg lg:text-2xl font-extrabold  hover:opacity-100 transition-opacity text-center w-full h-44 text-yellow-400">Kartik Suckak</div>
            </div>
            {/* <p>Creator 3</p> */}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Creators;
