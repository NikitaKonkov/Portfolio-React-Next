import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-[-2] overflow-hidden">
      {/* Synthwave Sky Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-800 to-fuchsia-700 hue-rotate-animation"></div>
      {/* Grid */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] perspective">
        <div className="grid-floor"></div>
      </div>
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
  );
}