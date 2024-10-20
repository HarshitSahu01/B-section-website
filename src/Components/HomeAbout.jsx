import React from 'react';
import '../index.css';
import buttonImage from '../assets/button.svg';  
import aboutImage from '../assets/about.svg';    
import Slider from './Slider';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center py-12 px-6">
      {/* Full-Width Slider */}
      <div className="w-full">
        <Slider />
      </div>

      {/* About Section */}
      <div className="flex flex-col items-start md:max-w-[60%] mb-8 md:mb-0 w-full mt-8 text-left">
        <h1 className="text-4xl font-bold mb-4 text-yellow-400">ABOUT</h1>
        <p className="text-lg text-white mb-6">
          The B section, considered the highlight, truly embodies the essence of the celebration. 
          It exudes vibrant energy, communal joy, and cross-cultural unity, defining the global event. 
          The B section turns the night into a low-key yet memorable and cherished experience for everyone involved in the Manzar event.
        </p>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <a href="https://www.instagram.com/section_b_rcoem/" className="inline-block relative group">
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

          <p className="text-white text-xl font-bold md:ml-4">← Redirect to our insta handle</p>
        </div>
      </div>

      {/* About Image */}
      <div className="w-full flex justify-center mt-6">
        <img src={aboutImage} alt="About Section Illustration" className="max-w-lg w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
