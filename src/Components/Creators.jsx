import {React, useRef} from 'react'
import GG from '../assets/GG.jpg'
import DT from '../assets/DT.jpg'
import { motion, useScroll } from "framer-motion";

const Creators = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
      target: ref,
      offset: ["0 4", "1 1.5"],
   });
  return (
    <div            
    ref = {ref}
    style={{
      scale : scrollYProgress,
      opacity: scrollYProgress,
    }}>
        <section className='mt-12 mb-32 mx-44 flex flex-col justify-center items-center'>
        <span className="achieve-head mb-12 w-[20vw] rounded-xl px-2 py-3 text-center flex justify-center items-center text-4xl font-bold text-yellow-400">
          Creators{" "}
        </span>
        <main>
            <motion.div
                ref = {ref}
                style={{
                  scale : scrollYProgress,
                  opacity: scrollYProgress,
                }}
                 className="cards flex flex-row flex-wrap justify-around gap-12 mx-32">
              <div className="crea-1 lg:w-[20vw] lg:h-[40vh] w-[45vw] h-[20vh] rounded-full shadow-md ">
                <div className="img-1 lg:w-[20vw] lg:h-[42vh] w-[45vw] h-[21vh] rounded-full shadow-lg shadow-yellow-200 border-t-8 border-t-yellow-300 border-b-8 border-b-orange-300 border-l-4 border-l-yellow-300 border-r-4 border-r-orange-300 ">
                  <img src={DT} alt="" className='lg:w-[20vw] lg:h-[40vh] w-[45vw] h-[20vh] rounded-full object-cover shadow-md shadow-yellow-200' />
                </div>
                {/* <p>Creator 1</p> */}
              </div>
              <div className="crea-1 w-[45vw] h-[20vh] lg:w-[20vw] lg:h-[40vh] rounded-full shadow-md shadow-yellow-200">
              <div className="img-1 lg:w-[20vw] lg:h-[42vh] w-[45vw] h-[21vh] rounded-full shadow-lg shadow-yellow-200 border-t-8 border-t-yellow-300 border-b-8 border-b-orange-300 border-l-4 border-l-yellow-300 border-r-4 border-r-orange-300 ">
              <img src={GG} alt="" className='lg:w-[20vw] lg:h-[40vh] w-[45vw] h-[20vh] rounded-full object-cover shadow-md shadow-yellow-200' />
                </div>
                {/* <p>Creator 2</p> */}
              </div>
              <div className="crea-1 w-[45vw] h-[20vh] lg:w-[20vw] lg:h-[40vh] rounded-full shadow-md shadow-yellow-200">
              <div className="img-1 lg:w-[20vw] lg:h-[42vh] w-[45vw] h-[21vh] rounded-full shadow-lg shadow-yellow-200 border-t-8 border-t-yellow-300 border-b-8 border-b-orange-300 border-l-4 border-l-yellow-300 border-r-4 border-r-orange-300 ">
                  
                </div>
                {/* <p>Creator 3</p> */}
              </div>
              <div className="crea-1 w-[45vw] h-[20vh] lg:w-[20vw] lg:h-[40vh] rounded-full shadow-md shadow-yellow-200">
              <div className="img-1 lg:w-[20vw] lg:h-[42vh] w-[45vw] h-[21vh] rounded-full shadow-lg shadow-yellow-200 border-t-8 border-t-yellow-300 border-b-8 border-b-orange-300 border-l-4 border-l-yellow-300 border-r-4 border-r-orange-300 ">
              <img src="" alt="" />
                </div>
                {/* <p>Creator 1</p> */}
              </div>
              <div className="crea-1 w-[45vw] h-[20vh] lg:w-[20vw] lg:h-[40vh] rounded-full shadow-md shadow-yellow-200">
              <div className="img-1 lg:w-[20vw] lg:h-[42vh] w-[45vw] h-[21vh] rounded-full shadow-lg shadow-yellow-200 border-t-8 border-t-yellow-300 border-b-8 border-b-orange-300 border-l-4 border-l-yellow-300 border-r-4 border-r-orange-300 ">
                  
                </div>
                {/* <p>Creator 2</p> */}
              </div>
              <div className="crea-1 w-[45vw] h-[20vh] lg:w-[20vw] lg:h-[40vh] rounded-full shadow-md shadow-yellow-200">
              <div className="img-1 lg:w-[20vw] lg:h-[42vh] w-[45vw] h-[21vh] rounded-full shadow-lg shadow-yellow-200 border-t-8 border-t-yellow-300 border-b-8 border-b-orange-300 border-l-4 border-l-yellow-300 border-r-4 border-r-orange-300 ">
                  
                </div>
                {/* <p>Creator 3</p> */}
              </div>

            </motion.div>
        </main>
        </section>
    </div>
  )
}

export default Creators