import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import FeaturedSystems from './FeaturedSystems';
import ExperienceTimeline from './ExperienceTimeline';
import SkillsMatrix from './SkillsMatrix';
import Projects from './Projects';
import EducationAndAwards from './EducationAndAwards';
import ContactFooter from './ContactFooter';
import CanvasBackground from './CanvasBackground';

const Portfolio = () => {
  return (
    <div className="portfolio-app" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Subtle Ambient Background */}
      <CanvasBackground />

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <FeaturedSystems />
        <ExperienceTimeline />
        <SkillsMatrix />
        <Projects />
        <EducationAndAwards />
      </main>

      {/* Footer & Contact */}
      <ContactFooter />
    </div>
  );
};

export default Portfolio;
