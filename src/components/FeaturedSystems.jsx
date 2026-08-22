import React from 'react';
import { IconServer, IconZap, IconShield, IconActivity, IconCpu, IconGitBranch } from './Icons';

const FeaturedSystems = ({ onOpenArchitectureModal }) => {
  const systems = [
    {
      title: 'Distributed Fiat Payout & Banking Gateway',
      category: 'Distributed Systems · FinTech Core',
      icon: IconServer,
      badge: 'Core Platform',
      badgeClass: 'badge-accent',
      description:
        'Architected high-throughput payment orchestration engine consolidating withdrawal flows across 4 banking connectors with partner-specific encryption, deterministic 17-state FSM, and zero double-credit risk.',
      highlights: [
        'Consolidated 4 legacy runtimes (Ruby, Node, Go gRPC, Go SQS) into a unified event-driven microservices architecture',
        'Implemented 17-transition state machine with CAS concurrency and transactional outbox pattern',
        'Direct cryptographic bank wire connectors for AU Small Finance Bank, PNB, Equitas, and InstantPay',
        'Decoupled terminal wallet lock/debit/revert through Apache Kafka events to prevent orphaned balances',
      ],
      stack: ['Go', 'gRPC', 'Ruby on Rails', 'Apache Kafka', 'Redis', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'Automated Bank Partner Health & Circuit Breaker',
      category: 'High Availability · Resilient Routing',
      icon: IconActivity,
      badge: 'Fault Tolerance',
      badgeClass: 'badge-emerald',
      description:
        'Engineered real-time reactive bank health detection and dynamic circuit breakers that automatically isolate failing bank payout rails and redistribute transaction volume.',
      highlights: [
        'Automated health anomaly detection based on terminal payout telemetry and rolling error rates',
        'Real-time traffic exclusion for degraded banking rails without manual configuration deployments',
        'Eliminated customer-facing payout drop-offs during banking partner downtimes and maintenance windows',
      ],
      stack: ['Ruby on Rails', 'Redis', 'Datadog Telemetry', 'Circuit Breaker Pattern', 'Grafana'],
    },
    {
      title: '3-Tier VBA Deposit Normalization & Attribution Engine',
      category: 'Financial Correctness · Anti-Collision',
      icon: IconShield,
      badge: 'Data Integrity',
      badgeClass: 'badge-cyan',
      description:
        'Architected multi-tier bidirectional remitter account normalization and Virtual Bank Account (VBA) anchor resolution algorithms, resolving critical cross-user account collision RCA defects.',
      highlights: [
        'Anchor-to-VBA owner detection guaranteeing incoming deposits match only active destination accounts',
        '3-tier normalization engine (exact match, leading-zero strip, non-digit sanitization) across AU & Indian Bank',
        'Zero false auto-refund regressions with structured Datadog observability on every resolution transaction',
      ],
      stack: ['Ruby on Rails', 'PostgreSQL', 'RCA Remediation', 'Datadog Structured Logs'],
    },
    {
      title: 'Agentic MCP Infrastructure for Financial Workflows',
      category: 'AI Infrastructure · Automation',
      icon: IconCpu,
      badge: 'AI & Automation',
      badgeClass: 'badge-accent',
      description:
        'Implemented Model Context Protocol (MCP) infrastructure supporting 10+ business flows for payments on-ramps, off-ramps, and rule engine based chatbot functionality.',
      highlights: [
        'Unified tool-calling schema and security sandboxing for autonomous agent interactions',
        'Integrated with live banking state queries, user verification, and automated dispute resolution',
        'Dramatically accelerated contextual response times with real-time distributed telemetry',
      ],
      stack: ['Node.js', 'Model Context Protocol (MCP)', 'LLM Tool Calling', 'Microservices', 'Redis'],
    },
  ];

  return (
    <section id="systems" className="section" style={{ backgroundColor: 'rgba(14, 19, 32, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconGitBranch size={14} />
            Architectural Highlights
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text-accent">Distributed Systems</span>
          </h2>
          <p className="section-subtitle">
            Core financial platforms, mission-critical banking connectors, and high-concurrency microservices engineered for zero downtime and financial correctness.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
          {systems.map((sys, idx) => {
            const Icon = sys.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'rgba(99, 102, 241, 0.12)',
                        border: '1px solid var(--border-accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#a5b4fc',
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span className={`badge ${sys.badgeClass}`}>{sys.badge}</span>
                  </div>

                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                    {sys.category}
                  </div>

                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.9rem', color: 'var(--text-primary)' }}>
                    {sys.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                    {sys.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.6rem' }}>
                      Key Architectural Deliverables:
                    </div>
                    <ul style={{ paddingLeft: '1.1rem', fontSize: '0.86rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {sys.highlights.map((item, hIdx) => (
                        <li key={hIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
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

        {/* Blueprint Callout */}
        <div
          className="glass-card"
          style={{
            marginTop: '3rem',
            padding: '2rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(6, 182, 212, 0.08) 100%)',
            border: '1px solid var(--border-accent)',
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>
              Want to see the end-to-end Payout & Concurrency Blueprint?
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              Explore how CAS transitions, transactional outbox events, and circuit breakers interact under high transaction concurrency.
            </p>
          </div>

          <button onClick={onOpenArchitectureModal} className="btn btn-primary">
            <IconGitBranch size={18} />
            View Architecture Blueprint
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSystems;
