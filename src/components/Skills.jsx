import React from 'react';
import Section from './Section';

const skills = [
  {
    label: 'Languages',
    value: ['Ruby (Ruby on Rails)', 'Go', 'C++', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    label: 'Distributed systems',
    value: [
      'Kafka',
      'Redis',
      'Microservices',
      'Event-driven design',
      'Transactional outbox',
      'Idempotency',
      'State machines',
      'gRPC',
    ],
  },
  {
    label: 'AI & LLM integration',
    value: [
      'Retrieval/tool APIs',
      'MCP-style tool APIs',
      'OAuth 2.0 access boundaries',
      'RAG concepts',
      'NLP (spaCy, NLTK)',
    ],
  },
  {
    label: 'Data',
    value: [
      'PostgreSQL',
      'MongoDB',
      'Elasticsearch',
      'Schema design',
      'Query optimisation',
      'Connection pooling',
    ],
  },
  {
    label: 'Infrastructure',
    value: ['AWS (Lambda, SQS, EC2, S3)', 'Docker', 'Kubernetes', 'Istio', 'CI/CD'],
  },
  {
    label: 'Observability',
    value: ['Datadog', 'Grafana', 'Prometheus', 'OpenTelemetry', 'JMeter', 'SLO / SLA'],
  },
];

const Skills = () => (
  <Section id="skills" index="03" title="Skills" note="What I work with">
    <div className="rows">
      {skills.map((group) => (
        <div className="row" key={group.label}>
          <div className="row-label">{group.label}</div>
          <div className="row-value">{group.value.join(', ')}</div>
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
