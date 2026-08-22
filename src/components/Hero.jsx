import React from 'react';
import { IconDownload, IconLayers, IconActivity, IconZap, IconShield, IconGitBranch } from './Icons';

const Hero = ({ onOpenArchitectureModal }) => {
  const metrics = [
    { value: '10K+', label: 'Monthly Processed Queries', sub: '99.9% Uptime SLA' },
    { value: 'Sub-200ms', label: 'P95 API Latency', sub: 'Datadog & Grafana Monitored' },
    { value: '17-State', label: 'Deterministic FSM', sub: 'CAS Concurrency & Zero Double-Debit' },
    { value: '16K+', label: 'Manual Ops Automated/mo', sub: '40% Cost Reduction' },
  ];

  return (
    <section
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '4rem',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="container">
        {/* Availability Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid var(--border-emerald)',
              fontSize: '0.84rem',
              color: '#34d399',
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 10px #10b981',
                display: 'inline-block',
              }}
            />
            Senior Software Engineer · CoinDCX · IIT Ropar
          </div>
        </div>

        {/* Hero Title */}
        <div style={{ maxWidth: '920px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
              fontWeight: 800,
            }}
          >
            Architecting <span className="gradient-text-accent">High-Throughput</span> Distributed Systems & Resilient FinTech Engines.
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              maxWidth: '780px',
              marginBottom: '2.5rem',
              lineHeight: 1.65,
            }}
          >
            Specialized in designing mission-critical payment gateways, idempotent state machines, event-driven microservices, and multi-bank orchestration pipelines supporting high-volume financial scale.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
            <a href="#systems" className="btn btn-primary" style={{ padding: '0.85rem 1.6rem', fontSize: '0.96rem' }}>
              <IconLayers size={18} />
              Explore Core Systems
            </a>

            <button
              onClick={onOpenArchitectureModal}
              className="btn btn-secondary"
              style={{ padding: '0.85rem 1.6rem', fontSize: '0.96rem' }}
            >
              <IconGitBranch size={18} />
              Interactive Architecture Blueprint
            </button>

            <a
              href="./assets/cv.pdf"
              download="Sachin_Kumawat_CV.pdf"
              className="btn btn-emerald"
              style={{ padding: '0.85rem 1.6rem', fontSize: '0.96rem' }}
            >
              <IconDownload size={18} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginTop: '1rem',
          }}
        >
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                borderLeft: idx === 0 ? '3px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
              }}
            >
              <div
                className="mono gradient-text-accent"
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  marginBottom: '0.35rem',
                  letterSpacing: '-0.03em',
                }}
              >
                {metric.value}
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                {metric.label}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
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
