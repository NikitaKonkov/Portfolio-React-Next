"use client";
import React, { useState } from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import AnimatedDots from './Dots';

function Hero() {
  const [key, setKey] = useState(0);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <AnimatedDots key={key} setKey={setKey} />
      <HeroContent />
    </section>
  );
}

export default Hero;