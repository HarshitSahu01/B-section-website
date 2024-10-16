import React from 'react';
import '../index.css';
import buttonImage from '../assets/button.svg';  
import aboutImage from '../assets/about.svg';    

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-12 px-6 max-w-5xl mx-auto">
      
      <div className="flex flex-col items-start md:max-w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold text-left mb-4 text-yellow-400">ABOUT</h1>
        <p className="text-lg text-white text-left mb-6">
          The B section, considered the highlight, truly embodies the essence of the celebration. 
          It exudes vibrant energy, communal joy, and cross-cultural unity, defining the global event. 
          The B section turns the night into a low-key yet memorable and cherished experience for everyone involved in the Manzar event.
        </p>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <a href="#" className="inline-block relative group">
            <span 
              className="inline-block px-6 py-2 text-black font-bold group-hover:text-yellow-800 transition duration-300 rounded-full bg-yellow-500"
              style={{
                backgroundImage: `url(${buttonImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '150px', 
                height: '50px'  
              }}
            >
              Know More
            </span>
          </a>

          <p className="text-white text-xl text-bold md:ml-4">← Redirect to our insta handle</p>
        </div>
      </div>

      <div className="w-full md:w-[1250px] flex justify-center md:justify-end">
        <img src={aboutImage} alt="About Section Illustration" className="w-full max-w-lg" />
      </div>
    </div>
  );
};

export default HeroSection;
