import { Wrench, Code2, Cloud, ClipboardList, Plug, GraduationCap } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { services } from '../data/profile.js';

const icons = { Wrench, Code2, Cloud, ClipboardList, Plug, GraduationCap };

export default function Services() {
  return (
    <section id="servicios" className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="Servicios"
          title="¿Cómo puedo ayudarte?"
          subtitle="Soluciones integrales en el ecosistema Odoo, desde el análisis hasta la puesta en producción."
        />
        <div className="grid-3">
          {services.map((service) => {
            const Icon = icons[service.icon] ?? Code2;
            return (
              <article className="card service-card reveal" key={service.title}>
                <div className="icon-box">
                  <Icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
