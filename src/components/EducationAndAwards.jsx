import React from 'react';
import { IconAward, IconZap } from './Icons';

const EducationAndAwards = () => {
  return (
    <section id="education" className="section" style={{ backgroundColor: 'rgba(14, 19, 32, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <IconAward size={14} />
            Academic & Honors
          </span>
          <h2 className="section-title">
            Education & <span className="gradient-text-accent">Recognition</span>
          </h2>
          <p className="section-subtitle">
            Formal education from premier technical institute and organizational honors.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {/* Education Card */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(6, 182, 212, 0.12)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#67e8f9',
                }}
              >
                🎓
              </div>
              <div>
                <span className="badge badge-cyan mono">Degree</span>
              </div>
            </div>

            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
              Indian Institute of Technology, Ropar
            </h3>
            <div style={{ fontSize: '1rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.5rem' }}>
              Bachelor of Technology (B.Tech)
            </div>
            <div className="mono" style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              August 2018 – May 2022 · Punjab, India
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Comprehensive coursework in Computer Science, Data Structures & Algorithms, Operating Systems, Database Management Systems, and Distributed Computing.
            </p>
          </div>

          {/* Awards & Certifications Card */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fbbf24',
                }}
              >
                <IconAward size={22} />
              </div>
              <div>
                <span className="badge" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.3)', color: '#fbbf24' }}>
                  Awards & Honors
                </span>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                  Whale of the Quarter Award
                </h4>
                <span className="badge badge-accent mono">Q2 2024</span>
              </div>
              <div style={{ fontSize: '0.92rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.4rem' }}>
                CoinDCX
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Recognized for exceptional engineering contributions, technical leadership, and driving mission-critical backend stability.
              </p>
            </div>

            <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  Introduction to Deep Learning
                </h4>
                <span className="badge mono">2021</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                HSE University (Coursera)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndAwards;
