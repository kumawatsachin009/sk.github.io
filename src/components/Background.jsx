import React from 'react';
import Section from './Section';

const Background = () => (
  <Section id="background" index="04" title="Background">
    <div className="rows">
      <div className="row">
        <div className="row-label">Education</div>
        <div className="row-value">
          <strong>B.Tech</strong> — Indian Institute of Technology, Ropar
          <br />
          Aug 2018 – May 2022 · Punjab, India
        </div>
      </div>

      <div className="row">
        <div className="row-label">Recognition</div>
        <div className="row-value">
          <strong>Whale of the Quarter</strong> and <strong>2× Super Satoshi Award</strong> · 2024
        </div>
      </div>

      <div className="row">
        <div className="row-label">Certification</div>
        <div className="row-value">Deep Learning Specialization — HSE University (Coursera), 2021</div>
      </div>
    </div>
  </Section>
);

export default Background;
