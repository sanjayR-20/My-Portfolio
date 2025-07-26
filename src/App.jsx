import Opening from './components/Opening.jsx';
import Bio from './components/Bio.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';
import Footer from './components/Footer.jsx';


import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-in-on-scroll');
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth &&
        rect.right > 0
      ) {
        el.classList.add('fade-in-visible');
      } else {
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-content">
      <header>
        <nav>
          <a href="#opening">Opening</a>
          <a href="#bio">Bio</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </nav>
      </header>
      <div id="opening"><Opening /></div>
      <div id="bio"><Bio /></div>
      <div id="education"><Education /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <div id="resume"><Resume /></div>
      <Footer />
    </div>
  );
}

export default App;