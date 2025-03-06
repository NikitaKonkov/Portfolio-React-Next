import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-[-2] overflow-hidden">
      {/* Parallax Background Image */}
      <div className="parallax-background"></div>

      {/* Synthwave Sky Background - Modified to be more pastel and transparent */}
      <div className="absolute inset-0 bg-gradient-to-b from-pastel-indigo via-pastel-purple to-pastel-fuchsia hue-rotate-animation"></div>

      {/* Grid */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] perspective">
        <div className="grid-floor"></div>
      </div>

      <style jsx>{`
        /* Parallax Background */
        .parallax-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -3; /* Ensure it's behind other elements */
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        /* Default background (when dark mode is disabled) */
        .parallax-background {
          background-image: url('/stari.webp');
        }

        /* Dark mode background (when dark mode is enabled) */
        :global(.dark) .parallax-background {
          background-image: url('/star.webp');
        }

        /* Pastel color definitions with transparency */
        .from-pastel-indigo {
          --pastel-indigo: rgba(156, 146, 209, 0.5); /* 50% transparency */
        }
        .via-pastel-purple {
          --pastel-purple: rgba(187, 158, 209, 0.5); /* 50% transparency */
        }
        .to-pastel-fuchsia {
          --pastel-fuchsia: rgba(209, 162, 192, 0.5); /* 50% transparency */
        }

        /* Background gradient with pastel colors */
        .bg-gradient-to-b {
          background-image: linear-gradient(
            to bottom,
            var(--pastel-indigo),
            var(--pastel-purple),
            var(--pastel-fuchsia)
          );
        }

        /* Hue rotation animation */
        .hue-rotate-animation {
          animation: hueRotate 60s infinite linear;
          filter: saturate(0.8); /* Reduce saturation for more pastel look */
        }
        @keyframes hueRotate {
          0% { filter: hue-rotate(0deg) saturate(0.8); }
          100% { filter: hue-rotate(360deg) saturate(0.8); }
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
          animation: gridMove 30s infinite linear;
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