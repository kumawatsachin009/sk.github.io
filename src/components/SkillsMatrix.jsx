import React, { useState } from 'react';
import { IconCpu, IconServer, IconDatabase, IconActivity, IconLayers, IconCode } from './Icons';

const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Expertise', icon: IconLayers },
    { id: 'distributed', label: 'Distributed Systems', icon: IconServer },
    { id: 'backend', label: 'Languages & Frameworks', icon: IconCode },
    { id: 'data', label: 'Databases & Caching', icon: IconDatabase },
    { id: 'devops', label: 'Cloud & Infrastructure', icon: IconCpu },
    { id: 'reliability', label: 'Observability & SLOs', icon: IconActivity },
  ];

  const skillGroups = [
    {
      category: 'distributed',
      title: 'Distributed Systems & Architecture',
      skills: [
        'Finite State Machines (FSM)',
        'Event-Driven Architecture',
        'Compare-And-Swap (CAS) Concurrency',
        'Transactional Outbox Pattern',
        'Circuit Breakers & Health Routing',
        'Microservices Orchestration',
        'gRPC & Protocol Buffers',
        'Idempotency & Deduplication',
        'Distributed Caching & Locking',
      ],
    },
    {
      category: 'backend',
      title: 'Languages & Core Frameworks',
      skills: [
        'Go (Golang)',
        'TypeScript / JavaScript',
        'Ruby on Rails',
        'Python',
        'C++',
        'Node.js (Express)',
        'Gin & gRPC Frameworks',
        'RESTful API Design',
        'Model Context Protocol (MCP)',
      ],
    },
    {
      category: 'data',
      title: 'Databases, Queues & Storage',
      skills: [
        'Apache Kafka',
        'Redis (Distributed Cache & Pub/Sub)',
        'PostgreSQL',
        'Amazon SQS',
        'Elasticsearch',
        'MongoDB',
        'SQL Optimization & Indexing',
        'Schema Migrations & Governance',
      ],
    },
    {
      category: 'devops',
      title: 'Cloud & DevOps Infrastructure',
      skills: [
        'Amazon Web Services (AWS)',
        'AWS Lambda, SQS, EC2, S3',
        'Docker & Containerization',
        'Kubernetes',
        'CI/CD Pipelines',
        'Git & GitHub Release Governance',
      ],
    },
    {
      category: 'reliability',
      title: 'Observability, Reliability & Testing',
      skills: [
        'Datadog Telemetry & APM',
        'Grafana Dashboards',
        'Prometheus Metrics',
        'SLO / SLA Management',
        'JMeter Load & Stress Testing',
        'RCA Investigation & Post-Mortems',
      ],
    },
  ];

  const filteredGroups =
    activeCategory === 'all'
      ? skillGroups
      : skillGroups.filter((group) => group.category === activeCategory);

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'rgba(14, 19, 32, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconCpu size={14} />
            Technical Proficiency
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text-accent">Architectural Competency</span>
          </h2>
          <p className="section-subtitle">
            Core strengths across distributed systems design, high-concurrency payment rails, data integrity, and production reliability.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.55rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                  background: isActive ? 'rgba(99, 102, 241, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? '#a5b4fc' : 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <Icon size={15} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skill Groups Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
          {filteredGroups.map((group, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1.25rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                {group.title}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="badge"
                    style={{
                      fontSize: '0.82rem',
                      padding: '0.35rem 0.75rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      borderColor: 'rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
