import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Certifications from './components/Certifications';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects/>
      <Certifications/>
      <Contact/>
    </div>
  );
}

export default App;