import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile, about } from '../data/profile.js';

export default function Hero() {
  const { contact } = profile;

  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content reveal">
          {profile.available && (
            <span className="badge">
              <span className="dot" /> Disponible para nuevos proyectos
            </span>
          )}
          <h1>
            Hola, soy <span className="gradient-text">{profile.name}</span>
          </h1>
          <h2 className="hero-role">{profile.role}</h2>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-location">
            <MapPin size={16} /> {profile.location}
          </p>

          <div className="hero-buttons">
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos <ArrowRight size={18} />
            </a>
            {profile.cv ? (
              <a href={profile.cv} className="btn btn-outline" download>
                <Download size={18} /> Descargar CV
              </a>
            ) : (
              <a href="#contacto" className="btn btn-outline">
                Contactar
              </a>
            )}
          </div>

          <div className="socials">
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${contact.email}`} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="visual-wrap">
          {profile.photo ? (
            <div className="portrait">
              <img
                src={profile.photo}
                alt={`Foto de ${profile.name}`}
                width="640"
                height="800"
                fetchpriority="high"
              />
            </div>
          ) : (
            <div className="avatar-ring">
              <div className="avatar avatar-fallback">{profile.initials}</div>
            </div>
          )}
          <div className="exp-badge" aria-hidden="true">
            <strong className="gradient-text">{about.stats[0].value}</strong>
            <span>
              años en
              <br />
              Odoo ERP
            </span>
          </div>
          <div className="code-card" aria-hidden="true">
            <div className="code-dots">
              <span /> <span /> <span />
            </div>
            <pre>
              <code>
                <span className="k">class</span> <span className="c">Developer</span>(models.Model):{'\n'}
                {'    '}_name = <span className="s">'eduardo.peralta'</span>{'\n'}
                {'    '}stack = [<span className="s">'Odoo'</span>, <span className="s">'Python'</span>, <span className="s">'React'</span>]
              </code>
            </pre>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
