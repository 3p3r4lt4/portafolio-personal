import { useState } from 'react';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { projects, projectCategories } from '../data/profile.js';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="proyectos" className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="Proyectos"
          title="Trabajo destacado"
          subtitle="Una selección de proyectos en los que he participado."
        />

        <div className="filters reveal" role="tablist">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={filter === cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid-3">
          {visible.map((project) => (
            <article className="card project-card" key={project.title}>
              <div className="project-head">
                <span className="project-category">
                  {projectCategories.find((c) => c.id === project.category)?.label}
                </span>
                <div className="project-links">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer" aria-label="Repositorio">
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Demo">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="features">
                {project.features.map((f) => (
                  <li key={f}>
                    <CheckCircle2 size={15} /> {f}
                  </li>
                ))}
              </ul>
              <div className="tags">
                {project.technologies.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
