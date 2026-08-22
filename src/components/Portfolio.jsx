import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import FeaturedSystems from './FeaturedSystems';
import ExperienceTimeline from './ExperienceTimeline';
import SkillsMatrix from './SkillsMatrix';
import Projects from './Projects';
import EducationAndAwards from './EducationAndAwards';
import ContactFooter from './ContactFooter';
import SystemArchitectureModal from './SystemArchitectureModal';
import CanvasBackground from './CanvasBackground';

const Portfolio = () => {
  const [isArchitectureModalOpen, setIsArchitectureModalOpen] = useState(false);

  return (
    <div className="portfolio-app" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Dynamic Network Canvas Background */}
      <CanvasBackground />

      {/* Main Navigation */}
      <Navbar onOpenArchitectureModal={() => setIsArchitectureModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenArchitectureModal={() => setIsArchitectureModalOpen(true)} />
        <FeaturedSystems onOpenArchitectureModal={() => setIsArchitectureModalOpen(true)} />
        <ExperienceTimeline />
        <SkillsMatrix />
        <Projects />
        <EducationAndAwards />
      </main>

      {/* Footer & Contact */}
      <ContactFooter />

      {/* Interactive System Architecture Deep-Dive Modal */}
      <SystemArchitectureModal
        isOpen={isArchitectureModalOpen}
        onClose={() => setIsArchitectureModalOpen(false)}
      />
    </div>
  );
};

export default Portfolio;
