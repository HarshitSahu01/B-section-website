import { transform } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Slide1 from "../assets/slide5.jpg";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";
import Slide4 from "../assets/slide4.jpg";
import Slide5 from "../assets/slide1.jpg";
import { motion, useScroll } from "framer-motion";

const slides = [
  {
    id: 1,
    image: Slide1,
    title: "Welcome to Be Scholar Scholarship Portal",
    description:
      "Unprecedented expansion of direct benefits to the deprived and deserving",
  },
  {
    id: 2,
    image: Slide2,
    title: "Scholarships for All",
    description: "Empowering students through financial support.",
  },
  {
    id: 3,
    image:
      Slide3,
    title: "Apply Now",
    description: "Join thousands of successful scholars.",
  },
  {
    id: 4,
    image:
      Slide4,
    title: "Start Your Journey",
    description: "A brighter future awaits you.",
  },
  {
    id: 5,
    image:
      Slide5,
    title: "Start Your Journey",
    description: "A brighter future awaits you.",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 4", "1 1"],
  });
  return (
    <>
      <section className="mx-auto flex flex-col justify-center items-center">
        <span className="achieve-head w-[25vw] rounded-xl px-2 py-3 text-center flex justify-center items-center text-4xl font-bold text-yellow-400">
          Our Memories
        </span>
        <div className="w-[90vw] h-[50vh]  mx-auto mt-12 flex justify-center items-center bg-black text-yellow-50 font-medium">
          <motion.div
            ref={ref}
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
            }}
            className="flex items-center h-72  rounded-lg"
          >
            <div className="flex gap-5 px-24 py-2 w-[95vw] items-center justify-center">
              <button
                onClick={goToPrevSlide}
                className="px-4 py-2 mx-2 text-yellow-400 font-extrabold "
              >
                <lord-icon
                  src="https://cdn.lordicon.com/vduvxizq.json"
                  trigger="hover"
                  colors="primary:#ffff00,secondary:#ffff00"
                  style={{
                    width: "50px",
                    height: "250px",
                    transform: "rotate(180deg)",
                  }}
                ></lord-icon>
              </button>
              <img
                src={slides[currentIndex].image}
                alt={`Slide ${slides[currentIndex].id}`}
                className="flex-1 px-0 items-center justify-center rounded-lg w-[60vw] h-[35vh] lg:w-[70vw] lg:h-[50vh] object-cover shadow-md shadow-yellow-200 transition-all"
              />
              {/* <div className="flex-1 p-6">
            <h2 className="text-orange-500 text-2xl font-bold">{slides[currentIndex].title}</h2>
            <p className="text-lg mt-4">{slides[currentIndex].description}</p>
            </div> */}
              <button
                onClick={goToNextSlide}
                className="px-4 py-2 mx-2 text-yellow-400 font-extrabold "
              >
                <lord-icon
                  src="https://cdn.lordicon.com/vduvxizq.json"
                  trigger="hover"
                  colors="primary:#ffff00,secondary:#ffff00"
                  style={{ width: "50px", height: "250px" }}
                ></lord-icon>
              </button>
            </div>
          </motion.div>
          {/* <div className="mt-4 text-center">
      </div> */}
        </div>
      </section>
    </>
  );
};

export default Slider;