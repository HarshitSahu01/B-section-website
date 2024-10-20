// import React, { useRef } from "react";
// import CR1 from "../assets/cr-1.jpg";
// import CR2 from "../assets/cr-2.jpg";
// import CR3 from "../assets/cr-3.jpg";
// import CR4 from "../assets/cr-4.jpg";
// import { motion, useScroll } from "framer-motion";
// import styles from '../Stylesheets/Crousel.module.css';  // Import the CSS module

// const Crousel = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 4", "1 1"],
//   });

//   return (
//     <div className="container flex flex-col justify-center items-center">
//       <span className="achieve-head mb-12 w-[20vw] rounded-xl px-2 py-1 text-center flex justify-center items-center text-2xl font-bold text-yellow-400">
//         and many more...
//       </span>
//       {/* First wrapper with left scrolling items */}
//       <motion.div
//         ref={ref}
//         style={{
//           scale: scrollYProgress,
//           opacity: scrollYProgress,
//         }}
//         className={`wrapper h-[15vh] lg:h-[40vh] py-5 mx-auto flex flex-row justify-evenly items-center gap-0 relative overflow-hidden ${styles.wrapper}`} // Apply Tailwind and CSS module classes
//       >
//         {/* Image items with custom animation */}
//         <div
//           className={`${styles.item} ${styles['item-1']} cr-item h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all`}
//         >
//           <img
//             src={CR1}
//             alt=""
//             className="object-cover w-full h-full shadow-lg shadow-slate-200"
//           />
//         </div>
//         <div
//           className={`${styles.item} ${styles['item-2']} cr-item h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all`}
//         >
//           <img
//             src={CR2}
//             alt=""
//             className="object-cover w-full h-full shadow-lg shadow-slate-200"
//           />
//         </div>
//         <div
//           className={`${styles.item} ${styles['item-3']} cr-item h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all`}
//         >
//           <img
//             src={CR3}
//             alt=""
//             className="object-cover w-full h-full shadow-lg shadow-slate-200"
//           />
//         </div>
//         <div
//           className={`${styles.item} ${styles['item-4']} cr-item h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all`}
//         >
//           <img
//             src={CR4} 
//             alt=""
//             className="object-cover w-full h-full shadow-lg shadow-slate-200"
//           />
//         </div>
//         {/* Additional items... */}
//       </motion.div>

//       {/* Second wrapper with right scrolling items */}
//       <motion.div
//         ref={ref}
//         style={{
//           scale: scrollYProgress,
//           opacity: scrollYProgress,
//         }}
//         className={`wrapper h-[15vh] lg:h-[40vh] py-5 mx-auto flex flex-row justify-evenly items-center gap-0 relative overflow-hidden ${styles.wrapper}`}
//       >
//         <div
//           className={`${styles.items} ${styles['items-6']} cr-item h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:-rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all`}
//         ></div>
//         <div
//           className={`${styles.items} ${styles['items-7']} cr-item h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:-rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all`}
//         ></div>
//       </motion.div>
//     </div>
//   );
// };

// export default Crousel;
import { React, useRef } from "react";
import CR1 from "../assets/cr-1.jpg";
import CR2 from "../assets/cr-2.jpg";
import CR3 from "../assets/cr-3.jpg";
import CR4 from "../assets/cr-4.jpg";
import CR5 from "../assets/cr-5.jpg";
import CR6 from "../assets/cr-6.jpg";
import CR7 from "../assets/cr-7.jpg";
import CR8 from "../assets/cr-8.jpg";
import CR9 from "../assets/cr-9.jpg";

import { motion, useScroll } from "framer-motion";

const Crousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 4", "1 1"],
  });
  return (
    <>
      <div className="container flex flex-col justify-center items-center">
        <span className="achieve-head mb-12 w-[20vw] rounded-xl px-2 py-1 text-center flex justify-center items-center text-2xl font-bold text-yellow-400">
          and many more...{" "}
        </span>
        <motion.div
          ref={ref}
          style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,
          }}
          className="wrapper h-[15vh] lg:h-[40vh] py-5 mx-auto flex flex-row justify-evenly items-center gap-0 relative overflow-hidden"
        >
          <div className="item item-1 h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all">
            <img
              src={CR1}
              alt=""
              className="object-cover w-full h-full shadow-lg shadow-slate-200"
            />
          </div>
          <div className="item item-2 h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all">
            <img
              src={CR2}
              alt=""
              className="object-cover w-full h-full shadow-lg shadow-slate-200"
            />
          </div>
          <div className="item item-3 h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all">
            <img
              src={CR3}
              alt=""
              className="object-cover w-full h-full shadow-lg shadow-slate-200"
            />
          </div>
          <div className="item item-4 h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all">
            <img
              src={CR4}
              alt=""
              className="object-cover w-full h-full shadow-lg shadow-slate-200"
            />
          </div>
          <div className="item item-5 h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all">
            <img
              src={CR5}
              alt=""
              className="object-cover w-full h-full shadow-lg shadow-slate-200"
            />
          </div>
          {/* <div className="item item-5 h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all">
            <img src={CR1} alt="" className="object-cover w-full h-full"/>
          </div> */}
        </motion.div>
        <motion.div
          ref={ref}
          style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,
          }}
          className="wrapper h-[15vh] lg:h-[40vh] py-5 mx-auto flex flex-row justify-evenly items-center gap-0 relative overflow-hidden"
        >
          <div className="items items-6 h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:-rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all">
            <img
              src={CR6}
              alt=""
              className="object-cover w-full h-full shadow-lg shadow-slate-200"
            />
          </div>
          <div className="items items-7 h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:-rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all">
            <img
              src={CR7}
              alt=""
              className="object-cover w-full h-full shadow-lg shadow-slate-200"
            />
          </div>
          <div className="items items-8 h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:-rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all">
          <img
              src={CR8}
              alt=""
              className="object-cover w-full h-full shadow-lg shadow-slate-200"
            />
          </div>
          <div className="items items-9 h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm bg-red-500 hover:scale-105 hover:-rotate-1 rounded-lg shadow-slate-100 absolute hover:-translate-y-3 transition-all">
          <img
              src={CR9}
              alt=""
              className="object-cover w-full h-full shadow-lg shadow-slate-200"
            />
          </div>
          <div className="items items-10 h-[20vh] lg:h-[30vh] w-[17vw] lg:w-[13vw] shadow-sm shadow-slate-100 bg-red-500 hover:scale-105 hover:-rotate-1 rounded-lg absolute hover:-translate-y-3 transition-all"></div>
        </motion.div>
      </div>
    </>
  );
};
export default Crousel;
