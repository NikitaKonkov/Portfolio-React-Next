"use client";

import React, { useEffect, useRef, useState } from 'react';

function Skills() {
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
      // More dots at the top, fewer at the bottom
      const angle = Math.pow(Math.random(), 0.5) * Math.PI; // 0 to π (top half emphasis)
      const radius = 40 + Math.random() * 40; // Varied distance from center (40-80% of container)
      
      // Size based on position (larger at top)
      const yPosition = 1 - Math.sin(angle); // 0 at bottom, 1 at top
      const size = 5 + (yPosition * 25);
      
      // Calculate initial position
      // Center the circle in the top portion of the container
      const containerWidth = dotsContainer.clientWidth;
      const containerHeight = dotsContainer.clientHeight;
      const centerX = containerWidth / 2;
      const centerY = containerHeight * 0.3; // Position circle center at 30% from top
      
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
      dot.style.opacity = 0.1 + (yPosition * 0.7);
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
    const centerY = containerHeight * 0.3; // Position circle center at 30% from top
    
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
  const skillCategories = [
    {
      title: "Web Development",
      backgroundImage: '/backgrounds/web.gif',
      gradientColors: {
        from: 'rgba(59, 130, 246, 0.9)', // blue
        to: 'rgba(147, 51, 234, 0.9)'    // purple
      },
      skills: [
        {
          name: 'HTML',
          level: 'Intermediate',
          image: '/skills/html.png'
        },
        {
          name: 'JavaScript',
          level: 'Intermediate',
          image: '/skills/javascript.png'
        },
        {
          name: 'React',
          level: 'Beginner',
          image: '/skills/react.png'
        },
        {
          name: 'CSS3',
          level: 'Beginner',
          image: '/skills/css.png'
        }
      ]
    },
    {
      title: "Backend Development",
      backgroundImage: '/backgrounds/back.gif',
      gradientColors: {
        from: 'rgba(16, 185, 129, 0.9)',  // green
        to: 'rgba(6, 182, 212, 0.9)'      // cyan
      },
      skills: [
        {
          name: 'MySQL',
          level: 'Intermediate',
          image: '/skills/mysql.png'
        },
        {
          name: 'Python',
          level: 'Advanced',
          image: '/skills/python.png'
        },
        {
          name: 'Java',
          level: 'Advanced',
          image: '/skills/java.png'
        }
      ]
    },
    {
      title: "System/Low Level Development",
      backgroundImage: '/backgrounds/cpu.gif',
      gradientColors: {
        from: 'rgba(250, 150, 0, 1)',   // yellow
        to:   'rgba(200, 0, 0, 0.9)'      // orange
      },
      skills: [
        {
          name: 'C++',
          level: 'Advanced',
          image: '/skills/cpp.png'
        },
        {
          name: 'x86',
          level: 'Advanced',
          image: '/skills/x86.png'
        },
        {
          name: 'ARM',
          level: 'Intermediate',
          image: '/skills/pi.png'
        }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 transition-colors duration-300">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/big.jpg')",
          zIndex: -1
        }}
      ></div>
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-dark-trinary/70 dark:bg-dark-primary/80 z-0"></div>
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
              My Skills
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </h2>
          {/* Stylized paragraph */}
          <p className="text-light-text/80 dark:text-dark-text/80 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            <span className="italic text-blue-600 dark:text-blue-400 font-medium">Here's an overview</span> of my technical expertise across different domains
          </p>
        </div>
        
        <div className="space-y-20"> {/* Large vertical spacing between categories */}
          {skillCategories.map((category, categoryIndex) => {
            return (
              <div 
                key={categoryIndex} 
                className="relative z-10 p-8 bg-light-secondary/30 dark:bg-dark-secondary/30 rounded-xl shadow-lg"
              >
                {/* Background container with larger dimensions - removed blur filter */}
                <div className="absolute inset-0 -m-4 z-0 rounded-xl overflow-hidden" style={{
                  backgroundImage: `url(${category.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                {/* Added a solid overlay instead of blur for better clarity */}
                <div className="flex items-center justify-center mb-10">
                  <div className="h-1 w-16 bg-blue-500 mr-4"></div>
                  {/* Enhanced category title with better readability */}
                  <div className="relative px-6 py-2 rounded-lg shadow-lg" style={{
                    background: `linear-gradient(to right, ${category.gradientColors.from}, ${category.gradientColors.to})`,
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
                  }}>
                    <h3 className="text-2xl font-bold text-white" style={{
                      textShadow: '0px 1px 2px rgba(0, 0, 0, 1)',
                      letterSpacing: '0.05em'
                    }}>
                      {category.title}
                    </h3>
                  </div>
                  <div className="h-1 w-16 bg-blue-500 ml-4"></div>
                </div>
                <div className="mb-10 rounded-xl relative z-10 px-4 py-8">
                  {/* Container with increased padding */}
                  <div className="flex flex-wrap justify-center" style={{ margin: '-64px' }}>
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        style={{ padding: '16px' }}
                        className="w-[240px]" // Wider container to allow for padding
                      >
                        <div
                          className="relative rounded-lg shadow-xl p-6 flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden bg-light-secondary/90 dark:bg-dark-secondary/90 border border-blue-500/20 hover:border-blue-500/50 h-full"
                        >
                          <div className="w-16 h-16 mb-4 overflow-hidden bg-white/90 dark:bg-dark-primary/90 p-2 rounded-full flex items-center justify-center">
                            <img
                              src={skill.image}
                              alt={`${skill.name} logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          {/* Enhanced text container with solid background instead of semi-transparent */}
                          <div className="text-center w-full">
                            <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2 py-1 px-3 rounded bg-light-primary/80 dark:bg-dark-primary/80 inline-block">
                              {skill.name}
                            </h3>
                            <p className="text-light-text/90 dark:text-dark-text/90 mt-2 py-1 px-3 rounded bg-light-primary/70 dark:bg-dark-primary/70 inline-block">
                              {skill.level}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    );
}

export default Skills;


