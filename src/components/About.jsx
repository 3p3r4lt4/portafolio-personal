import SectionHeader from './SectionHeader.jsx';
import { about } from '../data/profile.js';

export default function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <SectionHeader eyebrow="Sobre mí" title="Tecnología al servicio del negocio" />
        <div className="about-grid">
          <div className="about-text reveal">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="stats reveal">
            {about.stats.map((s) => (
              <div className="stat card" key={s.label}>
                <strong className="gradient-text">{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
