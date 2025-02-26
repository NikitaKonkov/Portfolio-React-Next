import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate frontend developer with a strong focus on creating 
              responsive and user-friendly web applications. With 3 years of experience 
              in the field, I've worked on various projects ranging from small business 
              websites to complex web applications.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              My journey in web development started when I was in college, and since then, 
              I've been constantly learning and improving my skills. I enjoy solving problems 
              and turning ideas into reality through code.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me hiking, reading, or experimenting with 
              new recipes in the kitchen.
            </p>

            {/* Skills Tags */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">Next.js</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">JavaScript</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">TypeScript</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* About Details */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Name</h3>
                  <p className="text-lg font-semibold text-gray-800">John Doe</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p className="text-lg font-semibold text-gray-800">john.doe@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Location</h3>
                  <p className="text-lg font-semibold text-gray-800">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-briefcase text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Availability</h3>
                  <p className="text-lg font-semibold text-gray-800">Open to opportunities</p>
                </div>
              </div>

              <a 
                href="/resume.pdf" 
                download
                className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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