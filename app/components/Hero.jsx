"use client";
import React, { useEffect, useRef, useState } from 'react';

function Hero() {
  const dotsRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastUpdateTimeRef = useRef(0);
  const dotsStateRef = useRef([]);
  const [key, setKey] = useState(0);
  
  // Function to generate a random color
  const getRandomColor = () => {
    return `rgba(${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${0.5 + Math.random() * 0.5})`;
  };
  
  // Function to create dots and initialize their state
  const createDots = () => {
    if (!dotsRef.current) return;
    const dotsContainer = dotsRef.current;
    const numberOfDots = 80;
    // Clear any existing dots
    dotsContainer.innerHTML = '';
    dotsStateRef.current = [];
    // Create dots with random properties
    for (let i = 0; i < numberOfDots; i++) {
      const dot = document.createElement('div');
      // Random size (larger at bottom)
      const yPosition = Math.random();
      const size = 5 + (yPosition * 25);
      // Initial position
      const left = Math.random() * 100;
      const top = yPosition * 100;
      // Set dot styles
      dot.className = 'absolute rounded-full';
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${left}%`;
      dot.style.top = `${top}%`;
      dot.style.opacity = 0.1 + (yPosition * 0.7);
      dot.style.backgroundColor = getRandomColor();
      // Store initial state and target state for animation
      dotsStateRef.current.push({
        element: dot,
        current: { x: 0, y: 0, rotation: 0, scale: 1, color: dot.style.backgroundColor },
        target: { x: 0, y: 0, rotation: 0, scale: 1, color: dot.style.backgroundColor },
        transitionDuration: 1 + Math.random() * 2, // seconds
        lastTargetUpdateTime: 0
      });
      dotsContainer.appendChild(dot);
    }
  };
  
  // Function to update dot target states
  const updateDotTargets = (timestamp) => {
    dotsStateRef.current.forEach(dot => {
      // Only update targets every few seconds for each dot
      if (timestamp - dot.lastTargetUpdateTime > (dot.transitionDuration * 1000)) {
        // Random movement with translation, rotation and scaling
        dot.target.x = (Math.random() - 0.5) * 200;
        dot.target.y = (Math.random() - 0.5) * 100;
        dot.target.rotation = Math.random() * 360;
        dot.target.scale = 0.8 + Math.random() * 0.4;
        dot.target.color = getRandomColor();
        dot.lastTargetUpdateTime = timestamp;
      }
    });
  };
  
  // Function to animate dots smoothly
  const animateDots = (timestamp) => {
    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = timestamp;
    }
    const deltaTime = timestamp - lastUpdateTimeRef.current;
    lastUpdateTimeRef.current = timestamp;
    // Update target states periodically
    updateDotTargets(timestamp);
    // Animate each dot toward its target state
    dotsStateRef.current.forEach(dot => {
      const progress = deltaTime / (dot.transitionDuration * 1000);
      // Interpolate current state toward target state
      dot.current.x += (dot.target.x - dot.current.x) * progress;
      dot.current.y += (dot.target.y - dot.current.y) * progress;
      dot.current.rotation += (dot.target.rotation - dot.current.rotation) * progress;
      dot.current.scale += (dot.target.scale - dot.current.scale) * progress;
      // Apply the updated state to the DOM element
      dot.element.style.transform = `translate(${dot.current.x}px, ${dot.current.y}px)
      rotate(${dot.current.rotation}deg)
      scale(${dot.current.scale})`;
      // Smoothly transition color
      dot.element.style.backgroundColor = dot.target.color;
    });
    // Continue the animation loop
    animationFrameRef.current = requestAnimationFrame(animateDots);
  };
  
  // Setup animation
  useEffect(() => {
    // Create the dots
    createDots();
    animationFrameRef.current = requestAnimationFrame(animateDots);
    const handleResize = () => {
      setKey(prevKey => prevKey + 1);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [key]);
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Synthwave Ocean Background */}
      <div className="absolute inset-0 z-[-2] overflow-hidden">
        {/* Synthwave Sky Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-800 to-fuchsia-700 hue-rotate-animation"></div>
        {/* Grid */}
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] perspective">
          <div className="grid-floor"></div>
        </div>
        {/* CSS for the synthwave elements */}
        <style jsx>{`
          /* Hue rotation animation */
          .hue-rotate-animation {
            animation: hueRotate 180s infinite linear;
          }
          @keyframes hueRotate {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
          /* Perspective for grid */
          .perspective {
            perspective: 1000px;
            perspective-origin: center bottom;
          }
          /* Grid floor with thicker lines using multi-position color stops */
          .grid-floor {
            position: absolute;
            bottom: 0;
            left: -120%;
            right: -120%;
            height: 120%;
            background-image: linear-gradient(to bottom, 
                rgba(255, 255, 255, 1) 0px, 
                rgba(255, 255, 255, 1) 5px, 
                transparent 5px),
              linear-gradient(to right, 
                rgba(255, 255, 255, 1) 0px, 
                rgba(255, 255, 255, 1) 5px, 
                transparent 5px);
            background-size: 100px 100px;
            transform: rotateX(60deg);
            transform-origin: center bottom;
            animation: gridMove 20s infinite linear;
          }
          
          /* Dark mode specific styles */
          :global(.dark) .grid-floor {
            background-image: linear-gradient(to bottom, 
                rgba(0, 0, 0, 1) 0px, 
                rgba(0, 0, 0, 1) 5px, 
                transparent 5px),
              linear-gradient(to right, 
                rgba(0, 0, 0, 1) 0px, 
                rgba(0, 0, 0, 1) 5px, 
                transparent 5px);
          }
          
          @keyframes gridMove {
            0% { background-position: 0 0; }
            100% { background-position: 0 2500px; }
          }
        `}</style>
      </div>
      {/* Animated Dots Container */}
      <div
        ref={dotsRef}
        className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none"
      ></div>
      {/* Content Container with Background Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-light-secondary/70 dark:bg-dark-secondary/70 py-20 rounded-lg backdrop-blur-sm">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-light-text dark:text-dark-text sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm Nikita</span>
            <span className="block text-light-accent dark:text-dark-accent">I am a Hobby Software Developer</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-light-text/70 dark:text-dark-text/70 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            With experience in web development, backend systems, and low-level programming, I enjoy creating efficient solutions across the technology stack. From building full-stack applications to optimizing algorithms, I'm passionate about exploring diverse areas of software development.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#projects"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-light-accent hover:bg-light-accent/90 dark:bg-dark-accent dark:hover:bg-dark-accent/90 transition-colors duration-300 md:py-4 md:text-lg md:px-10"
              >
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;