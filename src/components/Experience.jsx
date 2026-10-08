import SectionHeader from './SectionHeader.jsx';
import { experience } from '../data/profile.js';

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container container-narrow">
        <SectionHeader eyebrow="Experiencia" title="Trayectoria profesional" />
        <ol className="timeline">
          {experience.map((item) => (
            <li className="timeline-item reveal" key={item.period + item.role}>
              <span className="timeline-dot" />
              <div className="card">
                <span className="mono period">{item.period}</span>
                <h3>{item.role}</h3>
                <span className="company">{item.company}</span>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
