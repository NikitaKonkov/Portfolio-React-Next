import { useRef, useEffect } from 'react';
// Dot Component
export const Dots = ({ getRandomColor, dotsStateRef, dotsRef }) => {
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

export default Dots;