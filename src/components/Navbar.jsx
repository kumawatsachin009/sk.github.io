import React from 'react';
import { IconDownload } from './Icons';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Background', href: '#background' },
];

const Navbar = () => (
  <header className="site-header">
    <div className="wrap">
      <a className="brand" href="#top">
        Sachin Kumawat
      </a>

      <nav className="site-nav" aria-label="Sections">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a className="nav-cv" href="./assets/cv.pdf" download="Sachin_Kumawat_CV.pdf">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <IconDownload size={14} />
            CV
          </span>
        </a>
      </nav>
    </div>
  </header>
);

export default Navbar;
