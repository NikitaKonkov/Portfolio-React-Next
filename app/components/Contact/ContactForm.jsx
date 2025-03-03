import React from "react";

const formFields = [
  { name: "name", type: "text", placeholder: "Your Name" },
  { name: "email", type: "email", placeholder: "Your Email" },
  { name: "subject", type: "text", placeholder: "Subject" },
];

const ContactForm = ({ formData, formStatus, handleChange, handleSubmit }) => (
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
      
      {/* Textarea */}
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
);

export default ContactForm;