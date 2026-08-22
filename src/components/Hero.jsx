import React, { useState } from 'react';
import { IconDownload, IconLayers, IconGitBranch } from './Icons';

const Hero = ({ onOpenArchitectureModal }) => {
  const [imageError, setImageError] = useState(false);

  const metrics = [
    { value: '10K+', label: 'Monthly Queries Processed', sub: '99.9% Production Uptime' },
    { value: '<200ms', label: 'P95 API Latency', sub: 'Telemetry & SLO Monitored' },
    { value: '17-State', label: 'Deterministic FSM', sub: 'CAS Concurrency & Zero Double-Debit' },
    { value: '16K+', label: 'Manual Ops Automated/mo', sub: '40% Operational Cost Reduction' },
  ];

  return (
    <section
      style={{
        paddingTop: '8rem',
        paddingBottom: '3.5rem',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '2.5rem', marginBottom: '3.5rem' }}>
          
          {/* Left Text Block */}
          <div style={{ flex: '1 1 600px', maxWidth: '780px' }}>
            {/* Status Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--accent-emerald-soft)',
                  border: '1px solid var(--border-emerald)',
                  fontSize: '0.82rem',
                  color: '#34d399',
                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    display: 'inline-block',
                  }}
                />
                Senior Software Engineer · Distributed Systems & Backend
              </div>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                lineHeight: 1.18,
                marginBottom: '1.25rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
              }}
            >
              Building <span className="gradient-text-accent">High-Throughput</span> Distributed Engines & Resilient Financial Systems.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                lineHeight: 1.6,
              }}
            >
              Specialized in designing mission-critical payout gateways, idempotent state machines, event-driven microservices, and automated health failover for high-volume transactions.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              <a href="#systems" className="btn btn-primary">
                <IconLayers size={17} />
                Explore Systems
              </a>

              <button
                onClick={onOpenArchitectureModal}
                className="btn btn-secondary"
              >
                <IconGitBranch size={17} />
                Architecture Blueprint
              </button>

              <a
                href="./assets/cv.pdf"
                download="Sachin_Kumawat_CV.pdf"
                className="btn btn-emerald"
              >
                <IconDownload size={17} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Avatar Frame */}
          <div style={{ flexShrink: 0 }}>
            <div className="avatar-frame">
              {!imageError ? (
                <img
                  src="./assets/profile.jpg"
                  alt="Sachin Kumawat"
                  className="avatar-image"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="avatar-placeholder">
                  SK
                </div>
              )}
            </div>
            <div style={{ textAlign: 'center', marginTop: '0.6rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              IIT Ropar Alumnus
            </div>
          </div>
        </div>

        {/* Soothing Metrics Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.4rem',
              }}
            >
              <div
                className="mono gradient-text-accent"
                style={{
                  fontSize: '1.85rem',
                  fontWeight: 700,
                  marginBottom: '0.25rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {metric.value}
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                {metric.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                {metric.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
