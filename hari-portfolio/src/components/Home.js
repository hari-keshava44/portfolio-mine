import React from 'react';
import './Home.css';
import ProfileImage from '../assets/copilot-img2.png'; // update name if needed

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-banner">
        <img src={ProfileImage} alt="Hari" className="profile-pic" />
        <div className="intro-text">
          <h2>Welcome to My Portfolio</h2>
          <p>I'm Hari, an AI student skilled in Python, ML, NLP, and Java Full Stack Development.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
