import React from 'react';
import { IconDownload, IconGitHub, IconLinkedIn, IconMail } from './Icons';

export const GITHUB_URL = 'https://github.com/kumawatsachin009';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/kumawatsachin009';
export const EMAIL = 'kumawatsachin009@gmail.com';

const Hero = () => (
  <section className="hero" id="top">
    <div className="wrap">
      <p className="eyebrow">
        <span className="dot" aria-hidden="true" />
        Software engineer · Bengaluru, India
      </p>

      <h1>Sachin Kumawat</h1>

      <p className="lede">
        I am a software engineer at CoinDCX, working on payment infrastructure: bank routing for
        IMPS, NEFT and RTGS, the INR withdrawals ledger, and the monitoring around them. Day to
        day I work mostly with <strong>Go and Ruby on Rails</strong>.
      </p>

      <div className="actions">
        <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
          <IconMail size={16} />
          Email me
        </a>
        <a className="btn" href="./assets/cv.pdf" download="Sachin_Kumawat_CV.pdf">
          <IconDownload size={16} />
          Download CV
        </a>
        <a className="btn" href={GITHUB_URL} target="_blank" rel="noreferrer">
          <IconGitHub size={16} />
          GitHub
        </a>
        <a className="btn" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
          <IconLinkedIn size={16} />
          LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
