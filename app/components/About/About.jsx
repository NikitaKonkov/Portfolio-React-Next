import React from 'react';

function About() {
  // Define skills with their corresponding icons
  const skills = [
    { name: 'VS Code', icon:        '/icons/vsc.png' },
    { name: 'VS Studio', icon:      '/icons/vss.png' },
    { name: 'PyCharm', icon:   '/icons/pycharm.png' },
    { name: 'IntelliJ', icon:   '/icons/IntelliJ.png' },
    { name: 'Blender', icon:    '/icons/blender.png' },
    { name: 'Unreal Engine', icon:      '/icons/unreal.png' }
  ];

  return (
    <section id="about" className="py-20 bg-light-secondary dark:bg-dark-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative" role="region" aria-label="About Me Section">
          {/* Heading with enhanced typography */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-light-text dark:text-dark-text mb-4 relative inline-block group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              About Me
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </h2>
          {/* Stylized paragraph */}
          <p className="text-light-text/80 dark:text-dark-text/80 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            <span className="italic text-blue-600 dark:text-blue-400 font-medium">Here's an overview</span> about my self, hobbies and favorite software.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
          <p className="text-light-text/80 dark:text-dark-text/80 leading-relaxed">
              I'm a passionate freelance frontend developer with a strong focus on creating
              responsive and user-friendly web applications. With 3 years of experience
              in the field, I've worked on various projects ranging from small business
              websites to complex web applications, while maintaining the flexibility of
              independent work.
            </p>
            <p className="text-light-text/80 dark:text-dark-text/80 leading-relaxed">
              I'm deeply fascinated by the universe and its wonders, from the smallest subatomic
              particles to the vast cosmic structures. My interest in science has led me to explore
              what makes up our universe and our place within it. This scientific curiosity influences
              my approach to problem-solving and fuels my passion for understanding complex systems.
            </p>
            <p className="text-light-text/80 dark:text-dark-text/80 leading-relaxed">
              When I'm not working, you can find me developing games, creating hashing algorithms,
              designing encryption systems, or working on compression algorithms. I'm also an enthusiast
              of retro computing, particularly enjoying working with old game consoles and writing code
              in various programming languages to push their capabilities beyond their original design.
              I'm fascinated by the mathematical challenges behind these technologies and enjoy exploring the
              theoretical aspects of computer science through practical projects.
            </p>
            {/* Skills Tags with Icons */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-light-accent dark:text-dark-accent rounded-full text-sm transition-colors duration-300 flex items-center"
                  >
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`} 
                      className="w-4 h-4 mr-2" 
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* About Details */}
          <div className="bg-light-primary dark:bg-dark-primary rounded-xl shadow-lg p-8 transition-colors duration-300">
            <div className="space-y-6">
              {/* Name */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-light-accent dark:bg-dark-accent rounded-full flex items-center justify-center transition-colors duration-300">
                  <i className="fas fa-user text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-light-text/70 dark:text-dark-text/70">Name</h3>
                  <p className="text-lg font-semibold text-light-text dark:text-dark-text">Nikita Wagner</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-light-accent dark:bg-dark-accent rounded-full flex items-center justify-center transition-colors duration-300">
                  <i className="fas fa-envelope text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-light-text/70 dark:text-dark-text/70">Email</h3>
                  <p className="text-lg font-semibold text-light-text dark:text-dark-text">nikita.wagner97@gmail.com</p>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-light-accent dark:bg-dark-accent rounded-full flex items-center justify-center transition-colors duration-300">
                  <i className="fas fa-map-marker-alt text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-light-text/70 dark:text-dark-text/70">Location</h3>
                  <p className="text-lg font-semibold text-light-text dark:text-dark-text">Homburg</p>
                </div>
              </div>
              {/* Availability */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-light-accent dark:bg-dark-accent rounded-full flex items-center justify-center transition-colors duration-300">
                  <i className="fas fa-briefcase text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-light-text/70 dark:text-dark-text/70">Availability</h3>
                  <p className="text-lg font-semibold text-light-text dark:text-dark-text">Open to opportunities</p>
                </div>
              </div>
              {/* Resume Download Button */}
              <a
                href="/dummy.pdf"
                download
                className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-light-accent hover:bg-light-accent/90 dark:bg-dark-accent dark:hover:bg-dark-accent/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-accent dark:focus:ring-dark-accent"
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;