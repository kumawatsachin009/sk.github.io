import React from 'react';
import { IconDownload, IconGitHub, IconLinkedIn, IconMail } from './Icons';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from './Hero';

const ContactFooter = () => (
  <footer className="site-footer" id="contact">
    <div className="wrap">
      <h2 className="footer-lead">Get in touch</h2>
      <p className="footer-note">
        Happy to talk about backend systems, platform work, or anything in between. Email is the
        fastest way to reach me.
      </p>

      <div className="footer-links">
        <a href={`mailto:${EMAIL}`}>
          <IconMail size={15} />
          {EMAIL}
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer">
          <IconGitHub size={15} />
          GitHub
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
          <IconLinkedIn size={15} />
          LinkedIn
        </a>
        <a href="./assets/cv.pdf" download="Sachin_Kumawat_CV.pdf">
          <IconDownload size={15} />
          CV (PDF)
        </a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sachin Kumawat</span>
        <span>Bengaluru, India</span>
      </div>
    </div>
  </footer>
);

export default ContactFooter;
