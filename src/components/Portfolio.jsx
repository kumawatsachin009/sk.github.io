import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Background from './Background';
import ContactFooter from './ContactFooter';

const Portfolio = () => (
  <>
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <Navbar />
    <main id="main">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Background />
    </main>
    <ContactFooter />
  </>
);

export default Portfolio;
