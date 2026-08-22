import React from 'react';
import { IconMail, IconGitHub, IconLinkedIn, IconDownload, IconZap } from './Icons';

const ContactFooter = () => {
  return (
    <footer
      style={{
        paddingTop: '5rem',
        paddingBottom: '3rem',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="container">
        {/* Contact Banner */}
        <div
          className="glass-card"
          style={{
            padding: '3rem 2.5rem',
            textAlign: 'center',
            marginBottom: '4rem',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(56, 189, 248, 0.05) 100%)',
            border: '1px solid var(--border-accent)',
          }}
        >
          <span className="section-tag" style={{ marginBottom: '1rem' }}>
            Get In Touch
          </span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
            Let's Build <span className="gradient-text-accent">Mission-Critical Systems</span> Together
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 2rem', color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Open to discussing high-throughput distributed systems, fintech payment architectures, or technical leadership opportunities.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="mailto:kumawatsachin009@gmail.com"
              className="btn btn-primary"
              style={{ padding: '0.85rem 1.6rem' }}
            >
              <IconMail size={18} />
              kumawatsachin009@gmail.com
            </a>

            <a
              href="./assets/cv.pdf"
              download="Sachin_Kumawat_CV.pdf"
              className="btn btn-secondary"
              style={{ padding: '0.85rem 1.6rem' }}
            >
              <IconDownload size={18} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              Sachin Kumawat
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Senior Software Engineer · Distributed Systems & FinTech
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a
              href="https://github.com/kumawatsachin009"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = 'var(--border-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <IconGitHub size={18} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = 'var(--border-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <IconLinkedIn size={18} />
            </a>
          </div>

          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Sachin Kumawat · Optimized for GitHub Pages
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
