import React from 'react';
import './Projects.css';
import LoanProjectImage from '../assets/loan_approval_pic.jpg';
import ObjectDetectionImage from '../assets/image_detection.png'; // Update name as needed

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-heading">Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src={LoanProjectImage} alt="Loan Approval Prediction" className="project-image" />
          <h3>Loan Approval Prediction</h3>
          <p>
            Developed a supervised learning model using Python, Pandas, and Scikit-learn to predict whether a loan application should be approved
</p>
          <a
    href="https://colab.research.google.com/drive/135Ffh51TF625jtK3KCP4XleOADvOpQ5P?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    📂 View Colab Notebook
  </a>

        </div>
        <div className="project-card">
    <img src={ObjectDetectionImage} alt="Image Detection & Segmentation" className="project-image" />
    <h3>Image Detection & Segmentation</h3>
    <p>Implemented object recognition and segmentation using OpenCV and deep learning models. Identified pedestrians, vehicles, traffic signals in urban scenes.</p>
   <a
    href="https://colab.research.google.com/drive/1kPnma6oZLModKmabsB13PLrhj9FjoqJ_?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    📂 View Colab Notebook
  </a>
  </div>

        {/* Add more project cards here */}

      </div>
    </section>
  );
};

export default Projects;