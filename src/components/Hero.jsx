import React from 'react';
import { IconDownload, IconGitHub, IconLinkedIn, IconMail } from './Icons';

export const GITHUB_URL = 'https://github.com/kumawatsachin009';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/kumawatsachin009';
export const EMAIL = 'kumawatsachin009@gmail.com';

const Hero = () => (
  <section className="hero" id="top">
    <div className="wrap hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          <span>Software engineer</span>
          <span className="eyebrow-divider" aria-hidden="true">/</span>
          Bengaluru, India
        </p>

        <h1>
          I build things
          <br />
          that <span className="headline-accent">move money.</span>
        </h1>

        <p className="hero-name">Sachin Kumawat <span>— engineer, systems thinker, curious human.</span></p>

        <p className="lede">
          I work on the infrastructure behind reliable payments: bank routing, withdrawal ledgers,
          and the systems that keep them humming. I build with <strong>Go and Ruby on Rails</strong>.
        </p>

        <div className="actions">
          <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
            <IconMail size={16} />
            Let’s talk
          </a>
          <a className="btn" href="./assets/cv.pdf" download="Sachin_Kumawat_CV.pdf">
            <IconDownload size={16} />
            Download CV
          </a>
          <a className="social-link" href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <IconGitHub size={18} />
          </a>
          <a className="social-link" href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <IconLinkedIn size={18} />
          </a>
        </div>

        <div className="hero-proof" aria-label="Selected impact">
          <div><strong>10k</strong><span>peak TPS</span></div>
          <div><strong>0.78%</strong><span>withdrawal failures</span></div>
          <div><strong>250k+</strong><span>profiles migrated</span></div>
        </div>
      </div>

      <aside className="hero-visual" aria-label="Payment infrastructure visual">
        <div className="visual-topline"><span>FIELD NOTES&nbsp; / &nbsp;01</span><span>PAYMENTS, AT SCALE</span></div>
        <div className="visual-orbit orbit-one" aria-hidden="true" />
        <div className="visual-orbit orbit-two" aria-hidden="true" />
        <div className="visual-core" aria-hidden="true">
          <span className="core-ring ring-one" />
          <span className="core-ring ring-two" />
          <span className="core-center">₹</span>
          <span className="core-label">FLOW<br />STATE: LIVE</span>
        </div>
        <span className="orbit-label label-top">ROUTE / 03</span>
        <span className="orbit-label label-side">LEDGER<br />SYNCED</span>
        <div className="visual-caption"><span className="caption-mark">↗</span><span>Thoughtful systems.<br /><strong>Human outcomes.</strong></span></div>
        <span className="visual-index">12° 58′ 17.4″ N&nbsp; / &nbsp;77° 35′ 0.6″ E</span>
      </aside>
    </div>
  </section>
);

export default Hero;
