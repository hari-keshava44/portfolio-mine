import React from 'react';
import './Certifications.css';

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {/* Hover-to-Reveal Certificate Card */}
        <div className="cert-card">
          <div className="cert-text">
            <h3>Java Full Stack Development</h3>
            <p>Simplilearn SkillUp</p>
          </div>
          <div className="cert-preview-wrapper">
            <img
              src="/certificates/simplilearn_fsd.png"
              alt="Java Full Stack Certificate"
              className="cert-preview"
            />
          </div>
        </div>

        {/* Other Certification Cards */}
        <div className="cert-card">
          <h3>AWS Fundamentals</h3>
          <p>SimpliLearn</p>
          <div className="cert-preview-wrapper">
            <img
              src="/certificates/aws_simplilearn.png"
              alt="AWS Fundamentals"
              className="cert-preview"
            />
          </div>
        </div>

        <div className="cert-card">
          <h3>Frontend Development</h3>
          <p>GeeksforGeeks</p>
          <div className="cert-preview-wrapper">
            <img
              src="/certificates/gfg_fsd.png"
              alt="Full Stack Development"
              className="cert-preview"
            />
          </div>
        </div>

        <div className="cert-card">
          <h3>Python Bootcamp</h3>
          <p>Udemy</p>
           <div className="cert-preview-wrapper">
            <img
              src="/certificates/python_udemy.png"
              alt="Python Bootcamp"
              className="cert-preview"
            />
          </div>
        </div>

        <div className="cert-card">
          <h3>NLP with spaCy</h3>
          <p>Udemy</p>
           <div className="cert-preview-wrapper">
            <img
              src="/certificates/nlp_udemy.png"
              alt="NLP Using Spacy"
              className="cert-preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;