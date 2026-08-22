import React, { useState } from 'react';
import { IconCheckCircle, IconZap } from './Icons';

const ExperienceTimeline = () => {
  const [activeCompany, setActiveCompany] = useState('coindcx');

  const experiences = [
    {
      id: 'coindcx',
      role: 'Senior Software Engineer',
      company: 'CoinDCX',
      location: 'Bangalore, India',
      period: 'June 2022 – Present',
      badge: 'Current Role',
      badgeClass: 'badge-emerald',
      summary:
        'Senior backend engineer driving high-performance microservices, automated profile lifecycle engines, event-driven streaming, and AI tool-calling infrastructure.',
      bullets: [
        'Designed and deployed a microservices-based customer platform processing 10,000+ monthly queries with 99.9% uptime, leveraging Apache Kafka for event-driven architecture and Redis for caching.',
        'Developed automated profile management APIs that eliminated 16,000 manual operations monthly, reducing operational costs by 40% through streamlined verification workflows.',
        'Built high-performance RESTful APIs with sub-200ms P95 latency, implementing comprehensive monitoring with Datadog and Grafana to maintain SLO compliance and proactive incident response.',
        'Optimized customer onboarding flows, reducing user friction by 20% and increasing conversion rates by 5% across user verification processes.',
        'Led cross-functional collaboration with product, design, QA, and external vendors, accelerating deployment velocity by 60% while maintaining high code quality standards.',
        'Implemented Model Context Protocol (MCP) infrastructure for 10+ business flows for rule-engine-based workflows and data-driven chatbot automation.',
        'Engineered high-concurrency state machines with CAS concurrency, automated failover, and zero orphaned transaction locks.',
      ],
      skills: ['Go', 'Node.js', 'Ruby on Rails', 'Apache Kafka', 'Redis', 'PostgreSQL', 'AWS', 'Datadog', 'Docker', 'MCP'],
    },
    {
      id: 'intellewings',
      role: 'Data Science Engineer Intern',
      company: 'IntelleWings',
      location: 'Remote',
      period: 'May 2021 – November 2021',
      badge: 'Internship',
      badgeClass: 'badge-accent',
      summary:
        'Engineered production-grade Natural Language Processing (NLP) pipelines, distributed web scrapers, and computer vision recognition modules for high-throughput data intelligence.',
      bullets: [
        'Built production-ready Named Entity Recognition (NER) pipeline achieving 92% F1-score using spaCy and NLTK, deployed as REST APIs serving 10,000+ daily requests with sub-150ms latency.',
        'Developed distributed web scraping infrastructure processing 50,000+ documents daily using Beautiful Soup for parallel data extraction from multiple online sources.',
        'Implemented YOLO-based face recognition module and optimized Elasticsearch queries, reducing search latency by 50% and improving ML pipeline accuracy by 25%.',
        'Conducted comprehensive load testing with JMeter and designed caching strategies that improved API throughput by 3x, supporting 100+ concurrent users under peak load.',
      ],
      skills: ['Python', 'spaCy', 'NLTK', 'Elasticsearch', 'Beautiful Soup', 'OpenCV', 'JMeter', 'REST APIs'],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconZap size={14} />
            Career History
          </span>
          <h2 className="section-title">
            Professional <span className="gradient-text-accent">Experience</span>
          </h2>
          <p className="section-subtitle">
            Track record of delivering measurable, high-impact backend systems, APIs, and automation at scale.
          </p>
        </div>

        {/* Company Selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.25rem', flexWrap: 'wrap' }}>
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveCompany(exp.id)}
              style={{
                padding: '0.55rem 1.2rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: activeCompany === exp.id ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                background: activeCompany === exp.id ? 'var(--accent-primary-soft)' : 'rgba(255, 255, 255, 0.02)',
                color: activeCompany === exp.id ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
            >
              {exp.company} — {exp.role}
            </button>
          ))}
        </div>

        {/* Experience Details Card */}
        {experiences
          .filter((exp) => exp.id === activeCompany)
          .map((exp) => (
            <div
              key={exp.id}
              className="glass-card"
              style={{
                padding: '2.25rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                    <span className={`badge ${exp.badgeClass}`}>{exp.badge}</span>
                  </div>
                  <div style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    {exp.company} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>· {exp.location}</span>
                  </div>
                </div>

                <div className="mono" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', background: 'rgba(255, 255, 255, 0.04)', padding: '0.35rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  {exp.period}
                </div>
              </div>

              <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {exp.summary}
              </p>

              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#e2e8f0', marginBottom: '0.85rem' }}>
                  Impact & Key Contributions
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <div style={{ color: 'var(--accent-primary)', marginTop: '0.2rem', flexShrink: 0 }}>
                        <IconCheckCircle size={16} />
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                  Technologies & Frameworks
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="badge badge-accent mono" style={{ fontSize: '0.78rem', padding: '0.25rem 0.65rem' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
