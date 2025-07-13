import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <h1 className="tagline">Crafting Code with Purpose & Passion</h1>

      <h2>About Me</h2>

      <ul className="about-list">
        <li><span role="img" aria-label="Brain">🧠</span> AI Student — Python, ML, NLP</li>
        <li><span role="img" aria-label="Laptop">💻</span> Full Stack Developer — Java, Spring Boot, React</li>
        <li><span role="img" aria-label="Tools">🛠️</span> Passionate about building efficient, impactful solutions</li>
      </ul>
    </section>
  );
};

export default AboutMe;
