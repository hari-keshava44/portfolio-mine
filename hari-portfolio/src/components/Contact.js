import React from 'react';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-card">
        <p>
          Whether it's a collaboration, opportunity, or simply a good tech convo—I'm happy to connect 💬
        </p>
        <div className="contact-links">
          <a href="mailto:harikeshava11@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope /> harikeshava11@gmail.com
          </a>
          <a href="https://github.com/hari-keshava44" target="_blank" rel="noopener noreferrer">
            <FaGithub /> github.com/hari-keshava44
          </a>
          <a href="https://www.linkedin.com/in/hari-keshava-kethineni-9b7226234/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn/Hari Keshava
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
