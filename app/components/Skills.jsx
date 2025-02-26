import React from 'react';

function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Hi, I'm <span className="text-blue-600">John Doe</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Full Stack Developer
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              I create beautiful and functional web applications using modern technologies.
              Let's work together to bring your ideas to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Get in Touch
              </a>
              
              <a 
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-300"
              >
                <i className="fas fa-code mr-2"></i>
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-600 transition-colors duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-600 transition-colors duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-600 transition-colors duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Image/Animation Container */}
          <div className="relative">
            <div className="w-full h-[500px] relative">
              <div className="absolute inset-0 bg-blue-100 rounded-full animate-blob"></div>
              <img
                src="/your-image.png" // Replace with your image path
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;