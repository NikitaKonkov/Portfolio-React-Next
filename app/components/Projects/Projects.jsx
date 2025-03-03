"use client";

import React, { useEffect, useRef, useState } from 'react';

function Projects() {
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
    
    // Create dots with circular positioning
    for (let i = 0; i < numberOfDots; i++) {
      const dot = document.createElement('div');
      
      // Calculate position on a circle
      // For top-heavy distribution, we'll use a non-uniform angle distribution
      const angle = Math.pow(Math.random(), 0.5) * Math.PI * 2; // 0 to 2π (full circle)
      const radius = 40 + Math.random() * 40; // Varied distance from center (40-80% of container)
      
      // Size based on position (larger at edges)
      const distanceFromCenter = Math.abs(Math.PI - angle) / Math.PI; // 0 at center, 1 at edges
      const size = 5 + (distanceFromCenter * 25);
      
      // Calculate initial position
      // Center the circle in the container
      const containerWidth = dotsContainer.clientWidth;
      const containerHeight = dotsContainer.clientHeight;
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;
      
      const x = centerX + Math.cos(angle) * (radius / 100 * containerWidth);
      const y = centerY + Math.sin(angle) * (radius / 100 * containerHeight);
      
      // Convert to percentage for responsive positioning
      const left = (x / containerWidth) * 100;
      const top = (y / containerHeight) * 100;
      
      // Set dot styles
      dot.className = 'absolute rounded-full';
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${left}%`;
      dot.style.top = `${top}%`;
      dot.style.opacity = 0.1 + (distanceFromCenter * 0.7);
      dot.style.backgroundColor = getRandomColor();
      
      // Store initial state and target state for animation
      // Include orbital properties for circular movement
      dotsStateRef.current.push({
        element: dot,
        initialAngle: angle,
        initialRadius: radius,
        orbitSpeed: 0.1 + Math.random() * 0.2, // Speed of rotation
        orbitDirection: Math.random() > 0.5 ? 1 : -1, // Clockwise or counterclockwise
        current: { 
          x: 0, y: 0, rotation: 0, scale: 1, 
          angle: angle,
          radius: radius,
          color: dot.style.backgroundColor 
        },
        target: { 
          x: 0, y: 0, rotation: 0, scale: 1, 
          angle: angle,
          radius: radius,
          color: dot.style.backgroundColor 
        },
        transitionDuration: 1 + Math.random() * 2, // seconds
        lastTargetUpdateTime: 0
      });
      
      dotsContainer.appendChild(dot);
    }
  };

  // Function to update dot target states
  const updateDotTargets = (timestamp) => {
    if (!dotsRef.current) return;
    
    const containerWidth = dotsRef.current.clientWidth;
    const containerHeight = dotsRef.current.clientHeight;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    
    dotsStateRef.current.forEach(dot => {
      // Only update targets every few seconds for each dot
      if (timestamp - dot.lastTargetUpdateTime > (dot.transitionDuration * 1000)) {
        // Update the angle for orbital movement
        dot.target.angle += dot.orbitDirection * dot.orbitSpeed;
        
        // Slightly vary the radius for more dynamic movement
        dot.target.radius = dot.initialRadius + (Math.random() * 10 - 5);
        
        // Calculate new position based on updated angle and radius
        const x = centerX + Math.cos(dot.target.angle) * (dot.target.radius / 100 * containerWidth);
        const y = centerY + Math.sin(dot.target.angle) * (dot.target.radius / 100 * containerHeight);
        
        // Convert to percentage for responsive positioning
        const left = (x / containerWidth) * 100;
        const top = (y / containerHeight) * 100;
        
        // Calculate the difference from current position to get the translation amount
        const currentLeft = parseFloat(dot.element.style.left);
        const currentTop = parseFloat(dot.element.style.top);
        
        dot.target.x = ((left - currentLeft) / 100) * containerWidth;
        dot.target.y = ((top - currentTop) / 100) * containerHeight;
        
        // Random rotation and scale
        dot.target.rotation = Math.random() * 360;
        dot.target.scale = 0.8 + Math.random() * 0.4;
        
        // New color
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
      dot.current.angle += (dot.target.angle - dot.current.angle) * progress;
      dot.current.radius += (dot.target.radius - dot.current.radius) * progress;
      
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
    
    // Start the animation loop
    animationFrameRef.current = requestAnimationFrame(animateDots);
    
    // Add window resize handler
    const handleResize = () => {
      setKey(prevKey => prevKey + 1);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up on unmount
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [key]);

  const projects = [
    {
      id: 1,
      title: 'PS4 HEN VTX',
      description: 'A fully responsive e-commerce website with product filtering, cart functionality, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://wololo.net/wagic/wp-content/uploads/2024/05/goldhen_pppwn.jpg',
      liveLink: 'https://github.com/NikitaKonkov/ps4-hen-vtx',
      codeLink: 'https://github.com/NikitaKonkov/ps4-hen-vtx'
    },
    {
      id: 2,
      title: 'THF Encryption',
      description: 'A drag-and-drop task management application with user authentication and real-time updates.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: 'https://kinsta.com/wp-content/uploads/2023/07/what-is-encryption.jpg',
      liveLink: 'https://github.com/NikitaKonkov/THF_Encryption',
      codeLink: 'https://github.com/NikitaKonkov/THF_Encryption'
    },
    {
      id: 3,
      title: 'RaspberryPi Projects',
      description: 'A weather application that displays current and forecasted weather data based on user location or search.',
      technologies: ['JavaScript', 'OpenWeather API', 'CSS3'],
      image: 'https://heise.cloudimg.io/width/610/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/2/5/0/5/4/3/8/Bildschirmfoto_2018-09-21_um_11-bf75b0b94648525a.png',
      liveLink: 'https://github.com/NikitaKonkov/RaspberryPi',
      codeLink: 'https://github.com/NikitaKonkov/RaspberryPi'
    }
  ];

  return (
    <section id="projects" className="relative py-20 transition-colors duration-300">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/big.jpg')",
          zIndex: -1
        }}
      ></div>
      
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-light-primary/70 dark:bg-dark-primary/80 z-0"></div>
      
      {/* Animated Dots Container */}
      <div 
        ref={dotsRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="text-center mb-16 relative">
          {/* Heading with enhanced typography */}
          <h2 className="text-5xl font-extrabold text-light-text dark:text-dark-text mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            My Projects
            </span>
          </h2>
          {/* Stylized paragraph */}
          <p className="text-light-text/80 dark:text-dark-text/80 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            <span className="italic text-blue-600 dark:text-blue-400 font-medium">Here's an overview</span> of my recent projects that showcase my skills and experience in development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-light-secondary dark:bg-dark-secondary rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image Container */}
              <div className="relative group h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay with buttons */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-light-accent dark:bg-dark-accent text-white rounded-lg hover:bg-light-accent/90 dark:hover:bg-dark-accent/90 transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text rounded-lg hover:bg-light-secondary dark:hover:bg-dark-secondary transition-colors duration-300 flex items-center"
                  >
                    <i className="fab fa-github mr-2"></i>
                    Code
                  </a>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">
                  {project.title}
                </h3>
                <p className="text-light-text/70 dark:text-dark-text/70 mb-4 min-h-[60px]">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-light-primary dark:bg-dark-primary text-light-accent dark:text-dark-accent rounded-full text-sm font-medium transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/NikitaKonkov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-light-accent dark:bg-dark-accent text-white rounded-lg hover:bg-light-accent/90 dark:hover:bg-dark-accent/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-accent dark:focus:ring-dark-accent"
          >
            <i className="fab fa-github mr-2"></i>
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;