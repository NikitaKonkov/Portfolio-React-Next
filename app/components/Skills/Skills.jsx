// CombinedSkills.jsx
"use client";
import React, { useRef, useState, useEffect } from 'react';

// Dot Component
const Dot = ({ getRandomColor, dotsStateRef, dotsRef }) => {
  const animationFrameRef = useRef(null);
  const lastUpdateTimeRef = useRef(0);

  const createDots = () => {
    if (!dotsRef.current) return;
    const dotsContainer = dotsRef.current;
    const isMobile = window.innerWidth < 768;
    const numberOfDots = isMobile ? 30 : 80;

    dotsContainer.innerHTML = '';
    dotsStateRef.current = [];

    for (let i = 0; i < numberOfDots; i++) {
      const dot = document.createElement('div');
      const angle = Math.pow(Math.random(), 0.5) * Math.PI;
      const radius = 40 + Math.random() * 40;
      const yPosition = 1 - Math.sin(angle);
      const size = isMobile ? (3 + (yPosition * 15)) : (5 + (yPosition * 25));

      const containerWidth = dotsContainer.clientWidth;
      const containerHeight = dotsContainer.clientHeight;
      const centerX = containerWidth / 2;
      const centerY = containerHeight * 0.3;

      const x = centerX + Math.cos(angle) * (radius / 100 * containerWidth);
      const y = centerY + Math.sin(angle) * (radius / 100 * containerHeight);

      const left = (x / containerWidth) * 100;
      const top = (y / containerHeight) * 100;

      dot.className = 'absolute rounded-full';
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${left}%`;
      dot.style.top = `${top}%`;
      dot.style.opacity = 0.1 + (yPosition * 0.7);
      dot.style.backgroundColor = getRandomColor();

      dotsStateRef.current.push({
        element: dot,
        initialAngle: angle,
        initialRadius: radius,
        orbitSpeed: 0.1 + Math.random() * 0.2,
        orbitDirection: Math.random() > 0.5 ? 1 : -1,
        current: { x: 0, y: 0, rotation: 0, scale: 1, angle, radius, color: dot.style.backgroundColor },
        target: { x: 0, y: 0, rotation: 0, scale: 1, angle, radius, color: dot.style.backgroundColor },
        transitionDuration: 1 + Math.random() * 2,
        lastTargetUpdateTime: 0
      });

      dotsContainer.appendChild(dot);
    }
  };

  const updateDotTargets = (timestamp) => {
    if (!dotsRef.current) return;
    const containerWidth = dotsRef.current.clientWidth;
    const containerHeight = dotsRef.current.clientHeight;
    const centerX = containerWidth / 2;
    const centerY = containerHeight * 0.3;

    dotsStateRef.current.forEach(dot => {
      if (timestamp - dot.lastTargetUpdateTime > (dot.transitionDuration * 1000)) {
        dot.target.angle += dot.orbitDirection * dot.orbitSpeed;
        dot.target.radius = dot.initialRadius + (Math.random() * 10 - 5);

        const x = centerX + Math.cos(dot.target.angle) * (dot.target.radius / 100 * containerWidth);
        const y = centerY + Math.sin(dot.target.angle) * (dot.target.radius / 100 * containerHeight);

        const left = (x / containerWidth) * 100;
        const top = (y / containerHeight) * 100;

        const currentLeft = parseFloat(dot.element.style.left);
        const currentTop = parseFloat(dot.element.style.top);

        dot.target.x = ((left - currentLeft) / 100) * containerWidth;
        dot.target.y = ((top - currentTop) / 100) * containerHeight;
        dot.target.rotation = Math.random() * 360;
        dot.target.scale = 0.8 + Math.random() * 0.4;
        dot.target.color = getRandomColor();
        dot.lastTargetUpdateTime = timestamp;
      }
    });
  };

  const animateDots = (timestamp) => {
    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = timestamp;
    }

    const deltaTime = timestamp - lastUpdateTimeRef.current;
    lastUpdateTimeRef.current = timestamp;

    updateDotTargets(timestamp);

    dotsStateRef.current.forEach(dot => {
      const progress = deltaTime / (dot.transitionDuration * 1000);

      dot.current.x += (dot.target.x - dot.current.x) * progress;
      dot.current.y += (dot.target.y - dot.current.y) * progress;
      dot.current.rotation += (dot.target.rotation - dot.current.rotation) * progress;
      dot.current.scale += (dot.target.scale - dot.current.scale) * progress;
      dot.current.angle += (dot.target.angle - dot.current.angle) * progress;
      dot.current.radius += (dot.target.radius - dot.current.radius) * progress;

      dot.element.style.transform = `translate(${dot.current.x}px, ${dot.current.y}px)
        rotate(${dot.current.rotation}deg)
        scale(${dot.current.scale})`;
      dot.element.style.backgroundColor = dot.target.color;
    });

    animationFrameRef.current = requestAnimationFrame(animateDots);
  };

  useEffect(() => {
    const handleResize = () => {
      createDots();
    };

    window.addEventListener('resize', handleResize);
    createDots();
    animationFrameRef.current = requestAnimationFrame(animateDots);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return null;
};

const SkillItem = ({ skill, onClick }) => {
  return (
    <div
      className="w-[180px] mx-auto xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4 cursor-pointer"
      onClick={() => onClick(skill)}
    >
      <div className="relative rounded-lg shadow-xl p-2 md:p-6 flex flex-row xs:flex-col items-center justify-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-light-secondary/90 dark:bg-dark-secondary/90 border border-blue-500/20 hover:border-blue-500/50 h-[100px] xs:h-auto xs:aspect-square">
        <div className="w-16 h-16 md:w-16 md:h-16 mr-3 xs:mr-0 xs:mb-2 md:mb-4 overflow-hidden bg-white/90 dark:bg-dark-primary/90 p-1.5 md:p-2 rounded-full flex items-center justify-center shrink-0">
          <img src={skill.image} alt={`${skill.name} logo`} className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col items-start xs:items-center justify-center">
          <h3 className="text-xs md:text-xl font-semibold text-light-text dark:text-dark-text mb-0.5 py-0.5 px-1.5 md:px-3 rounded bg-light-primary/80 dark:bg-dark-primary/80 text-center max-w-[100px] truncate">
            {skill.name}
          </h3>
          <h3 className="text-[10px] md:text-base text-light-text/90 dark:text-dark-text/90 py-0.5 px-1.5 md:px-3 rounded bg-light-primary/70 dark:bg-dark-primary/70 text-center">
            {skill.level}
          </h3>
        </div>
      </div>
    </div>
  );
};

// SkillCategory Component
const SkillCategory = ({ category, onSkillClick }) => {
  return (
    <div className="relative z-10 p-8 bg-light-secondary/30 dark:bg-dark-secondary/30 rounded-xl shadow-lg">
      <div className="absolute inset-0 -m-4 z-0 rounded-xl overflow-hidden" style={{
        backgroundImage: `url(${category.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(1px)', // Added blur effect
        opacity: 0.8
      }}></div>
      <div className="flex items-center justify-center mb-10">
        <div className="h-1 w-16 bg-blue-500 mr-4"></div>
        <div className="relative px-6 py-2 rounded-lg shadow-lg"
          style={{
            background: `linear-gradient(to right, ${category.gradientColors.from}, ${category.gradientColors.to})`,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
          }}>
          <h3 className="text-2xl font-bold text-white" style={{
            textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)',
            letterSpacing: '0.05em'
          }}>
            {category.title}
          </h3>
        </div>
        <div className="h-1 w-16 bg-blue-500 ml-4"></div>
      </div>
      <div className="mb-10 rounded-xl relative z-10 px-4 py-8">
        <div className="flex flex-wrap justify-center" style={{ margin: '-64px' }}>
          {category.skills.map((skill, skillIndex) => (
            <SkillItem key={skillIndex} skill={skill} onClick={onSkillClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Typography Components
export function Title({ children, className = '' }) {
  return (
    <div className="flex justify-center items-center w-full text-center">
      <h2 className={`w-full text-3xl md:text-4xl lg:text-5xl font-extrabold text-light-text dark:text-dark-text mb-3 md:mb-4 relative ${className}`}>
        <span className="block w-full bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-center">
          {children}
        </span>
        <span className="absolute -bottom-2 left-0 right-0 mx-auto w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </h2>
    </div>
  );
}

export function Description({ children, className = '' }) {
  return (
    <div className="flex justify-center items-center w-full text-center">
      <p className={`text-light-text/80 dark:text-dark-text/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light ${className}`}>
        <span className="italic text-blue-600 dark:text-blue-400 font-medium text-center">
          {children}
        </span>
      </p>
    </div>
  );
}

// Skills Component
function Skills() {
  const dotsRef = useRef(null);
  const dotsStateRef = useRef([]);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const getRandomColor = () => {
    return `rgba(${Math.floor(Math.random() * 255)}, 
                 ${Math.floor(Math.random() * 255)}, 
                 ${Math.floor(Math.random() * 255)}, 
                 ${0.5 + Math.random() * 0.5})`;
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setSelectedSkill(null);
    }
  };

  return (
    <section id="skills" className="relative py-20 transition-colors duration-300">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/big.jpg')", zIndex: -1 }}
      ></div>
      <div className="absolute inset-0 bg-dark-trinary/70 dark:bg-dark-primary/80 z-0"></div>
      <div ref={dotsRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Dot getRandomColor={getRandomColor} dotsStateRef={dotsStateRef} dotsRef={dotsRef} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl font-extrabold text-light-text dark:text-dark-text mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">My Skills</span>
          </h2>
          <Description>Here's an overview of my technical expertise across different domains</Description>
        </div>

        {/* Skills Grid */}
        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory 
              key={categoryIndex} 
              category={category}
              selectedSkill={selectedSkill}
              onSkillClick={handleSkillClick}
            />
          ))}
        </div>
      </div>

      {/* Skill Details Overlay */}
      {selectedSkill && (
        <div 
          className="modal-overlay fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={handleOverlayClick}
        >
          <div className="bg-light-primary dark:bg-dark-primary rounded-lg p-8 max-w-md w-full mx-4 shadow-xl relative">
            <h3 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
              {selectedSkill.name}
            </h3>
            <p className="text-base leading-relaxed text-light-text/90 dark:text-dark-text/90">
              Here you can add detailed information about {selectedSkill.name}. This could include:
              <ul className="mt-4 space-y-2 list-disc pl-6">
                <li>Experience level: {selectedSkill.level}</li>
                <li>Projects completed</li>
                <li>Specific technologies used</li>
                <li>Achievements and accomplishments</li>
              </ul>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;

// Content Data
export const skillCategories = [
  {
    title: "Web Development",
    backgroundImage: '/backgrounds/web.gif',
    gradientColors: {
      from: 'rgba(59, 130, 246, 0.9)',
      to: 'rgba(147, 51, 234, 0.9)'
    },
    skills: [
      { name: 'HTML', level: 'Intermediate', image: '/skills/html.png' },
      { name: 'JS', level: 'Intermediate', image: '/skills/javascript.png' },
      { name: 'React', level: 'Beginner', image: '/skills/react.png' },
      { name: 'CSS3', level: 'Beginner', image: '/skills/css.png' }
    ]
  },
  {
    title: "Backend Development",
    backgroundImage: '/backgrounds/back.gif',
    gradientColors: {
      from: 'rgba(16, 185, 129, 0.9)',
      to: 'rgba(6, 182, 212, 0.9)'
    },
    skills: [
      { name: 'MySQL', level: 'Intermediate', image: '/skills/mysql.png' },
      { name: 'Python', level: 'Advanced', image: '/skills/python.png' },
      { name: 'Java', level: 'Advanced', image: '/skills/java.png' }
    ]
  },
  {
    title: "System/Low Level Development",
    backgroundImage: '/backgrounds/cpu.gif',
    gradientColors: {
      from: 'rgba(250, 150, 0, 1)',
      to: 'rgba(200, 0, 0, 0.9)'
    },
    skills: [
      { name: 'C++', level: 'Advanced', image: '/skills/cpp.png' },
      { name: 'x86', level: 'Advanced', image: '/skills/x86.png' },
      { name: 'ARM', level: 'Intermediate', image: '/skills/pi.png' }
    ]
  }
];