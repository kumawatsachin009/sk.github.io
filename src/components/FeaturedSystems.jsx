import React from 'react';
import { IconServer, IconZap, IconShield, IconActivity, IconCpu, IconGitBranch } from './Icons';

const FeaturedSystems = ({ onOpenArchitectureModal }) => {
  const systems = [
    {
      title: 'Distributed Payout & Banking Gateway',
      category: 'Distributed Systems · Payment Infrastructure',
      icon: IconServer,
      badge: 'Core Architecture',
      badgeClass: 'badge-accent',
      description:
        'Architected high-throughput payment orchestration platform consolidating multi-bank payout pipelines with partner-specific cryptography, deterministic state machines, and zero double-credit risk.',
      highlights: [
        'Consolidated 4 legacy runtime services into a unified, event-driven microservices architecture',
        'Implemented 17-transition deterministic state machine with CAS concurrency and transactional outbox pattern',
        'Direct cryptographic bank wire integration across major banking rails with automated status reconciliation',
        'Decoupled terminal wallet lifecycle (lock, debit, unlock, revert) through distributed event streaming',
      ],
      stack: ['Go', 'gRPC', 'Ruby on Rails', 'Apache Kafka', 'Redis', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'Automated Partner Health & Circuit Breaker Engine',
      category: 'Fault Tolerance · High Availability',
      icon: IconActivity,
      badge: 'Resilience',
      badgeClass: 'badge-emerald',
      description:
        'Engineered real-time reactive health telemetry and automated circuit breakers that detect degraded banking rails and dynamically redistribute transaction volume.',
      highlights: [
        'Automated health anomaly detection based on terminal payout telemetry and rolling error rates',
        'Real-time traffic exclusion for degraded partner rails without requiring manual configuration deployments',
        'Dramatically reduced customer-facing payout drop-offs during banking partner maintenance windows',
      ],
      stack: ['Ruby on Rails', 'Redis', 'Datadog Telemetry', 'Circuit Breakers', 'Grafana'],
    },
    {
      title: '3-Tier Deposit Attribution & Normalization Engine',
      category: 'Financial Correctness · Data Integrity',
      icon: IconShield,
      badge: 'Data Integrity',
      badgeClass: 'badge-cyan',
      description:
        'Architected multi-tier bidirectional account normalization and virtual account anchor resolution algorithms to eliminate cross-user collision defects.',
      highlights: [
        'Anchor-based detection guaranteeing incoming deposits resolve strictly against active beneficiary accounts',
        '3-tier normalization engine (exact match, leading-zero strip, non-digit sanitization) across banking partners',
        'Zero false auto-refund regressions with structured real-time telemetry validation on every transaction',
      ],
      stack: ['Ruby on Rails', 'PostgreSQL', 'Datadog Telemetry', 'Algorithms'],
    },
    {
      title: 'Agentic Workflow & Rule Engine Infrastructure',
      category: 'Automation · Intelligent Workflows',
      icon: IconCpu,
      badge: 'Automation',
      badgeClass: 'badge-accent',
      description:
        'Implemented tool-calling infrastructure supporting 10+ business workflows for payment operations, user lifecycle management, and rule-based automation.',
      highlights: [
        'Standardized tool-calling schemas and execution sandboxes for automated operations',
        'Integrated with live banking state queries, user verification, and automated dispute resolution',
        'Reduced manual engineering intervention and accelerated transaction resolution times',
      ],
      stack: ['Node.js', 'Model Context Protocol (MCP)', 'Microservices', 'Redis', 'Event Streams'],
    },
  ];

  return (
    <section id="systems" className="section" style={{ backgroundColor: 'rgba(14, 20, 34, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconGitBranch size={14} />
            Engineering Projects
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text-accent">Distributed Systems</span>
          </h2>
          <p className="section-subtitle">
            Core financial platforms, mission-critical banking connectors, and high-concurrency microservices engineered for high reliability and financial correctness.
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
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
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
                      Key Deliverables:
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
