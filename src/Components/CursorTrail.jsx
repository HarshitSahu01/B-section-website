// CursorTrail.js
import React, { useEffect } from 'react';
import styles from '../Stylesheets/cursor.module.css';

const CursorTrail = () => {
  useEffect(() => {
    const cursorTailAnimation = document.querySelector('#cursor-tail-animation');
    const coords = { x: 0, y: 0 };

    for (let i = 0; i < 25; i++) {
      const circle = document.createElement('div');
      circle.classList.add(styles.circle);
      cursorTailAnimation.appendChild(circle);
    }

    const circles = document.querySelectorAll(`.${styles.circle}`);

    // CHOOSE COLOR
    const colors = [];
    for (let i = 0; i < 25; i++) {
      colors.push(`hsl(${i + 15}, 100%, ${i % 2 === 0 ? 50 : 70}%)`);
    }

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateCircles();

    window.addEventListener("click", createBlast);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      // Clean up circles
      cursorTailAnimation.innerHTML = '';
    };
  }, []);

  function createBlast(e) {
    const blastCount = 30; // Number of particles
    const particles = [];

    for (let i = 0; i < blastCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add(styles.particle);
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      document.body.appendChild(particle);
      particles.push(particle);

      // Randomize the direction and speed of each particle
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 5 + 2;
      const xSpeed = Math.cos(angle) * speed;
      const ySpeed = Math.sin(angle) * speed;

      // Animate each particle
      setTimeout(() => {
        particle.style.transform = `translate(${xSpeed * 20}px, ${
          ySpeed * 20
        }px) scale(0)`;
        particle.style.opacity = "0";
      }, 0);

      // Remove particle after animation
      setTimeout(() => {
        document.body.removeChild(particle);
      }, 1000);
    }
  }


  return (
    <div className={styles.cursorTailAnimation} id="cursor-tail-animation">
      <h1 className={styles.mobileText} id="mobile-text"></h1>
    </div>
  );
};

export default CursorTrail;
