import React from 'react';
import Section from './Section';

const experiences = [
  {
    role: 'Software Development Engineer 2',
    company: 'CoinDCX',
    location: 'Bengaluru, India',
    period: 'Oct 2024 – Present',
    points: [
      'Built a multi-bank routing engine for IMPS, NEFT and RTGS withdrawals, with automated fluctuation routing. Withdrawal failure rates fell from 1.59% to 0.78%.',
      'Moved INR withdrawals from a Rails monolith to Go microservices, handling 10,000 TPS at peak with sub-300 ms p99 latency and strict financial consistency.',
      'Owned SLO-driven alerting and incident response: MTTA under 2 minutes, MTTR under 15 minutes, and no P0 incidents.',
      'Ran zero-downtime payment migrations across product, QA and ops through RFCs and cohort-based feature flags.',
    ],
    stack: ['Go', 'Ruby on Rails', 'Datadog'],
  },
  {
    role: 'Software Development Engineer 1',
    company: 'CoinDCX',
    location: 'Bengaluru, India',
    period: 'Jun 2022 – Oct 2024',
    points: [
      'Built an OAuth 2.0 / M2M authenticated gateway between Sprinklr and the trading microservices, with zero-trust access, PII masking and data isolation.',
      'Automated KYC migrations and account recovery for 250,000+ user profiles, plus a human-in-the-loop gateway for high-risk state changes.',
      'Built secure retrieval APIs and a deterministic routing layer for customer chatbots, with guardrails against hallucination and prompt injection across 10+ payment flows.',
    ],
    stack: ['OAuth 2.0', 'MCP', 'Retrieval APIs', 'LLM guardrails'],
  },
  {
    role: 'Data Science Engineer Intern',
    company: 'IntelleWings',
    location: 'Remote',
    period: 'May 2021 – Nov 2021',
    points: [
      'Built a named entity recognition pipeline with spaCy and NLTK (92% F1), served over REST at sub-150 ms for 10,000+ requests a day.',
      'Built distributed scraping pipelines handling 50,000+ documents a day, and optimised Elasticsearch indexing to halve search latency and triple throughput.',
    ],
    stack: ['Python', 'spaCy', 'NLTK', 'Elasticsearch'],
  },
];

const Experience = () => (
  <Section id="experience" index="01" title="Experience">
    {experiences.map((exp) => (
      <article className="entry" key={exp.period}>
        <div className="entry-head">
          <div>
            <h3>{exp.role}</h3>
            <p className="entry-org">
              {exp.company} <span aria-hidden="true">·</span> {exp.location}
            </p>
          </div>
          <span className="entry-meta">{exp.period}</span>
        </div>

        <ul className="points">
          {exp.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="stack">
          {exp.stack.map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </article>
    ))}
  </Section>
);

export default Experience;
