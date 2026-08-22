import React, { useState, useEffect } from 'react';
import { IconDownload, IconGitBranch } from './Icons';

const Navbar = ({ onOpenArchitectureModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Architecture', href: '#architecture', isModal: true },
    { label: 'Featured Systems', href: '#systems' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
  ];

  const handleLinkClick = (e, link) => {
    if (link.isModal && onOpenArchitectureModal) {
      e.preventDefault();
      onOpenArchitectureModal();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        backgroundColor: scrolled ? 'rgba(8, 12, 20, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all var(--transition-normal)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
            }}
          >
            SK
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              Sachin Kumawat
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
              Senior Software Engineer
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              style={{
                fontSize: '0.88rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                padding: '0.4rem 0.6rem',
                borderRadius: '6px',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}

          <a
            href="./assets/cv.pdf"
            download="Sachin_Kumawat_CV.pdf"
            className="btn btn-primary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.84rem' }}
          >
            <IconDownload size={16} />
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle Menu"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-primary)',
            padding: '0.5rem',
            cursor: 'pointer',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(8, 12, 20, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              style={{
                fontSize: '1rem',
                color: 'var(--text-primary)',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="./assets/cv.pdf"
            download="Sachin_Kumawat_CV.pdf"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <IconDownload size={16} />
            Download Resume (PDF)
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
