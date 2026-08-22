import React from 'react';
import { IconServer, IconZap, IconShield, IconActivity, IconCpu, IconLayers } from './Icons';

const FeaturedSystems = () => {
  const systems = [
    {
      title: 'Event-Driven Customer & Workflow Platform',
      category: 'Microservices · Event Streaming',
      icon: IconServer,
      badge: '10K+ Queries/mo · 99.9% Uptime',
      badgeClass: 'badge-accent',
      description:
        'Designed and deployed a microservices-based customer platform processing 10,000+ monthly queries with 99.9% production uptime SLA.',
      highlights: [
        'Leveraged Apache Kafka for asynchronous event-driven workflow processing and reliable decoupling',
        'Implemented distributed Redis caching, cutting database load and maintaining sub-150ms response times',
        'Built resilient fallback and automated retry queues to ensure zero dropped operations under peak traffic',
      ],
      stack: ['Node.js', 'Apache Kafka', 'Redis', 'PostgreSQL', 'Docker', 'AWS'],
    },
    {
      title: 'Automated Profile & Lifecycle Management Engine',
      category: 'Backend Automation · Scalability',
      icon: IconZap,
      badge: '16K+ Ops/mo · 40% Cost Drop',
      badgeClass: 'badge-emerald',
      description:
        'Architected automated profile and identity verification APIs that eliminated 16,000 manual operations monthly, reducing operational costs by 40%.',
      highlights: [
        'Streamlined verification workflows for user profile management, eliminating operational bottlenecks',
        'Reduced user friction by 20% and increased onboarding conversion rates by 5%',
        'Implemented strict data sanitization, audit trails, and concurrency-safe database mutations',
      ],
      stack: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'RESTful APIs', 'Async Workers'],
    },
    {
      title: 'High-Throughput APIs & SLO Observability Engine',
      category: 'API Performance · Reliability',
      icon: IconActivity,
      badge: 'Sub-200ms P95 Latency',
      badgeClass: 'badge-cyan',
      description:
        'Engineered high-performance RESTful and gRPC services maintaining sub-200ms P95 latency with comprehensive observability and proactive alerting.',
      highlights: [
        'Integrated real-time Datadog APM and Grafana dashboards for proactive incident detection and SLO enforcement',
        'Optimized database queries, indexes, and connection pooling to eliminate latency spikes under load',
        'Accelerated engineering deployment velocity by 60% through CI/CD pipeline automation and standards',
      ],
      stack: ['Go (Golang)', 'Ruby on Rails', 'Datadog', 'Grafana', 'PostgreSQL', 'CI/CD'],
    },
    {
      title: 'Agentic Tooling & Rule Engine Automation',
      category: 'AI Tooling · Automation Infrastructure',
      icon: IconCpu,
      badge: '10+ Automated Business Flows',
      badgeClass: 'badge-accent',
      description:
        'Implemented Model Context Protocol (MCP) infrastructure supporting 10+ business workflows for rule engine automation and data-driven assistance.',
      highlights: [
        'Built secure tool-calling schemas and execution sandboxes for autonomous workflow operations',
        'Connected real-time distributed state queries with automated rule-based validation logic',
        'Dramatically accelerated contextual response and incident resolution times',
      ],
      stack: ['Node.js', 'Model Context Protocol (MCP)', 'Microservices', 'Redis', 'Event Streams'],
    },
  ];

  return (
    <section id="systems" className="section" style={{ backgroundColor: 'rgba(14, 20, 34, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconLayers size={14} />
            Key Engineering Platforms
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text-accent">Production Systems</span>
          </h2>
          <p className="section-subtitle">
            Measurable, high-impact backend systems and scalable microservices delivered in production.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem' }}>
          {systems.map((sys, idx) => {
            const Icon = sys.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'var(--accent-primary-soft)',
                        border: '1px solid var(--border-accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#a5b4fc',
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span className={`badge ${sys.badgeClass}`}>{sys.badge}</span>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                    {sys.category}
                  </div>

                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                    {sys.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.15rem', lineHeight: 1.6 }}>
                    {sys.description}
                  </p>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
                      Measurable Outcomes:
                    </div>
                    <ul style={{ paddingLeft: '1.1rem', fontSize: '0.84rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {sys.highlights.map((item, hIdx) => (
                        <li key={hIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                    {sys.stack.map((tech, tIdx) => (
                      <span key={tIdx} className="badge mono" style={{ fontSize: '0.74rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSystems;
