import React from 'react';
import { IconCode, IconExternalLink, IconGitHub, IconDatabase, IconZap } from './Icons';

const Projects = () => {
  const projects = [
    {
      title: 'Faculty Leave Application Portal',
      category: 'Full-Stack & Database Architecture',
      period: 'March 2021 – April 2021',
      description:
        'Hierarchical enterprise leave management system with fine-grained role-based access control (RBAC) supporting 500+ concurrent faculty users.',
      highlights: [
        'Engineered complex approval workflows with PostgreSQL triggers and ACID-compliant stored procedures',
        'Implemented hybrid database design using PostgreSQL for relational audit logs and MongoDB for dynamic document metadata',
        'Designed secure session authentication and real-time email notification triggers',
      ],
      stack: ['Node.js', 'PostgreSQL', 'MongoDB', 'Express', 'RBAC Security'],
      githubUrl: 'https://github.com/kumawatsachin009',
    },
    {
      title: 'Automated Document & Data Mining Pipeline',
      category: 'Data Mining & Computer Vision',
      period: 'July 2020 – August 2020',
      description:
        'Automated document processing and computer vision pipeline for parsing chemical and molecular structures from scientific research papers.',
      highlights: [
        'Processed 1,000+ complex multi-column PDF research papers with 85% extraction accuracy',
        'Built OpenCV contour detection and adaptive thresholding for molecular structure isolation',
        'Structured tabular data extraction using PyPDF and Tabula for downstream analytical ingestion',
      ],
      stack: ['Python', 'OpenCV', 'PyPDF', 'Tabula', 'NumPy', 'Data Extraction'],
      githubUrl: 'https://github.com/kumawatsachin009',
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconCode size={14} />
            Academic & Systems Projects
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text-accent">Software Projects</span>
          </h2>
          <p className="section-subtitle">
            Selected standalone applications and engineering solutions built with strong architectural fundamentals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {projects.map((proj, idx) => (
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="badge badge-accent mono">{proj.category}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{proj.period}</span>
                </div>

                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  {proj.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {proj.description}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <ul style={{ paddingLeft: '1.1rem', fontSize: '0.86rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {proj.highlights.map((item, hIdx) => (
                      <li key={hIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
                  {proj.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="badge mono" style={{ fontSize: '0.74rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.84rem', padding: '0.55rem' }}
                >
                  <IconGitHub size={16} />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
