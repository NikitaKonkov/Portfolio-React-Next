import React, { useEffect, useRef } from 'react';

export default function AnimatedDots({ animationKey, setKey }) {
  const dotsRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastUpdateTimeRef = useRef(0);
  const dotsStateRef = useRef([]);

  const getRandomColor = () => {
    return `rgba(${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${0.5 + Math.random() * 0.5})`;
  };

  const createDots = () => {
    if (!dotsRef.current) return;
    const dotsContainer = dotsRef.current;
    const numberOfDots = 160;
    dotsContainer.innerHTML = '';
    dotsStateRef.current = [];
    
    for (let i = 0; i < numberOfDots; i++) {
      const dot = document.createElement('div');
      const yPosition = Math.random();
      const size = 5 + (yPosition * 25);
      const left = Math.random() * 100;
      const top = yPosition * 100;
      
      dot.className = 'absolute rounded-full';
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${left}%`;
      dot.style.top = `${top}%`;
      dot.style.opacity = 0.1 + (yPosition * 0.7);
      dot.style.backgroundColor = size;
      
      dotsStateRef.current.push({
        element: dot,
        current: { x: 0, y: 0, rotation: 0, scale: 1, color: dot.style.backgroundColor },
        target: { x: 0, y: 0, rotation: 0, scale: 1, color: dot.style.backgroundColor },
        transitionDuration: 1 + Math.random() * 2,
        lastTargetUpdateTime: 0
      });
      
      dotsContainer.appendChild(dot);
    }
  };

  const updateDotTargets = (timestamp) => {
    dotsStateRef.current.forEach(dot => {
      if (timestamp - dot.lastTargetUpdateTime > (dot.transitionDuration * 1000)) {
        dot.target.x = (Math.random() - 0.5) * 200;
        dot.target.y = (Math.random() - 0.5) * 100;
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
      
      dot.element.style.transform = `translate(${dot.current.x}px, ${dot.current.y}px)
        rotate(${dot.current.rotation}deg)
        scale(${dot.current.scale})`;
      dot.element.style.backgroundColor = dot.target.color;
    });
    
    animationFrameRef.current = requestAnimationFrame(animateDots);
  };

  useEffect(() => {
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
  }, [animationKey]);

  return (
    <div
      ref={dotsRef}
      className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none"
    ></div>
  );
}