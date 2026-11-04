import React from 'react';
import Section from './Section';
import { IconArrowUpRight, IconGitHub } from './Icons';
import { GITHUB_URL } from './Hero';

const projects = [
  {
    title: 'Faculty Leave Application Portal',
    meta: '2021 · Full-stack',
    description:
      'Leave management for a university department, with role-based approvals across faculty and staff. PostgreSQL triggers handle the approval state machine, with MongoDB for the variable form metadata.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
    href: GITHUB_URL,
  },
  {
    title: 'Document & Data Mining Pipeline',
    meta: '2020 · Data extraction',
    description:
      'Pipeline that pulls molecular structures and tables out of multi-column research PDFs. OpenCV contour detection isolates the figures; PyPDF and Tabula handle the tabular data.',
    stack: ['Python', 'OpenCV', 'PyPDF', 'Tabula'],
    href: GITHUB_URL,
  },
];

const Projects = () => (
  <Section id="projects" index="02" title="Projects" note="Selected work">
    <div className="cards">
      {projects.map((project) => (
        <article className="card" key={project.title}>
          <h3>{project.title}</h3>
          <p className="card-meta">{project.meta}</p>
          <p>{project.description}</p>

          <div className="stack">
            {project.stack.map((tech) => (
              <span className="tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <a className="card-link" href={project.href} target="_blank" rel="noreferrer">
            <IconGitHub size={14} />
            View on GitHub
            <IconArrowUpRight size={13} />
          </a>
        </article>
      ))}
    </div>
  </Section>
);

export default Projects;
