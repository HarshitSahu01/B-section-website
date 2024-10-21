import React, { useState, useEffect } from 'react';
import HomeAbout from '../Components/HomeAbout';
import Achievements from '../Components/Achievements';
import Creators from '../Components/Creators';
import ContactUs from '../Components/ContactUs';

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle the scroll behavior
  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 300) {
      setShowScroll(false);
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen for the scroll event
  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div>
      <HomeAbout />
      <Achievements />
      <Creators />
      <ContactUs />

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            background: isHovered ? '#444' : '#333', // Darker background on hover
            color: isHovered ? '#FF7C2D' : '#F97316', // Brighter arrow color on hover
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            fontSize: '20px',
            fontWeight: 'bold', // Increased font weight
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'background 0.3s, color 0.3s', // Smooth transition for hover effect
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
}
