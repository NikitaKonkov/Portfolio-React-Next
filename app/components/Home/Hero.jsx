"use client";
import React, { useState } from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import AnimatedDots from './Dots';

function Hero() {
  const [key, setKey] = useState(0);
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <HeroBackground />
      <AnimatedDots key={key} setKey={setKey} />
      <div className="relative z-10 h-full flex items-center justify-center">
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;