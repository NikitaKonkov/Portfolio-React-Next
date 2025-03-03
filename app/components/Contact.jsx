"use client";
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  // Contact information data
  const contactInfo = [
    { 
      id: "location", 
      icon: "/icons/germany.png", 
      title: "Location", 
      value: "Germany" 
    },
    { 
      id: "email", 
      icon: "/icons/mail.png", 
      title: "Email", 
      value: "nikita.wagner1997@gmail.com" 
    },
    { 
      id: "phone", 
      icon: "/icons/telephone.png", 
      title: "Phone", 
      value: "+49 176 23434567" 
    },
  ];

  // Social links data
  const socialLinks = [
    { 
      url: "https://github.com/NikitaKonkov", 
      icon: "/icons/github.png", 
      name: "GitHub" 
    },
    { 
      url: "https://www.linkedin.com/in/mikita-wagner-253361350/", 
      icon: "/icons/linkedin.png", 
      name: "LinkedIn" 
    },
    { 
      url: "https://www.sololearn.com/de/profile/19875051", 
      icon: "/icons/sololearn.png", 
      name: "Sololearn" 
    },
    { 
      url: "https://circuitverse.org/users/139370", 
      icon: "/icons/cv.png", 
      name: "YouTube" 
    },
    { 
      url: "https://www.youtube.com/@Symbitron", 
      icon: "/icons/youtube.png", 
      name: "YouTube" 
    },
    { 
      url: "https://www.hackerrank.com/profile/nikita_konkov", 
      icon: "/icons/hr.png", 
      name: "YouTube" 
    },
    { 
      url: "https://leetcode.com/u/user6235Pw/", 
      icon: "/icons/lc.png", 
      name: "YouTube" 
    },
  ];

  // Form fields data
  const formFields = [
    { name: "name", type: "text", placeholder: "Your Name" },
    { name: "email", type: "email", placeholder: "Your Email" },
    { name: "subject", type: "text", placeholder: "Subject" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 bg-light-secondary dark:bg-dark-secondary transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 relative" role="region" aria-label="About Me Section">
          {/* Heading with enhanced typography */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-light-text dark:text-dark-text mb-4 relative inline-block group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Get In Touch
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Items */}
            {contactInfo.map((item) => (
              <div key={item.id} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center overflow-hidden transition-colors duration-300">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                    {item.title}
                  </h3>
                  <p className="text-light-text/70 dark:text-dark-text/70 mt-1">{item.value}</p>
                </div>
              </div>
            ))}
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity duration-300"
                >
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-light-primary dark:bg-dark-primary rounded-lg shadow-lg p-8 transition-colors duration-300">
            {formStatus.submitted && (
              <div
                className={`mb-6 p-4 rounded-md ${
                  formStatus.success
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100"
                    : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100"
                }`}
              >
                {formStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Fields */}
              {formFields.map((field) => (
                <div key={field.name}>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-light-secondary dark:bg-dark-secondary border border-light-text/10 dark:border-dark-text/10 rounded-md focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent text-light-text dark:text-dark-text placeholder-light-text/50 dark:placeholder-dark-text/50 transition-colors duration-300"
                  />
                </div>
              ))}
              
              {/* Textarea (handled separately since it has different attributes) */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-light-secondary dark:bg-dark-secondary border border-light-text/10 dark:border-dark-text/10 rounded-md focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent text-light-text dark:text-dark-text placeholder-light-text/50 dark:placeholder-dark-text/50 transition-colors duration-300"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-light-accent dark:bg-dark-accent text-white py-2 px-6 rounded-md hover:bg-light-accent/90 dark:hover:bg-dark-accent/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;