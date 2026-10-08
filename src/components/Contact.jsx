import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { profile } from '../data/profile.js';

const initialForm = { name: '', email: '', subject: '', message: '' };

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

export default function Contact() {
  const { contact } = profile;
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Envío a Netlify Forms (los mensajes aparecen en el panel de Netlify > Forms)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      });
      if (!res.ok) throw new Error(res.statusText);
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  const items = [
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: 'Teléfono', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Ubicación', value: profile.location },
    { icon: Linkedin, label: 'LinkedIn', value: 'Ver perfil', href: contact.linkedin },
    { icon: Github, label: 'GitHub', value: contact.github.replace('https://', ''), href: contact.github },
  ];

  return (
    <section id="contacto" className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="Contacto"
          title="Trabajemos juntos"
          subtitle="¿Tienes un proyecto Odoo en mente? Escríbeme y te responderé a la brevedad."
        />
        <div className="contact-grid">
          <ul className="contact-info reveal">
            {items.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="card contact-item">
                <div className="icon-box small">
                  <Icon size={18} />
                </div>
                <div>
                  <span className="contact-label">{label}</span>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {value}
                    </a>
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <form
            className="card contact-form reveal"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                No llenar: <input name="bot-field" />
              </label>
            </p>
            <div className="form-row">
              <label>
                Nombre
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Tu nombre" />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="tu@email.com" />
              </label>
            </div>
            <label>
              Asunto
              <input name="subject" value={form.subject} onChange={handleChange} required placeholder="¿En qué puedo ayudarte?" />
            </label>
            <label>
              Mensaje
              <textarea name="message" rows="5" value={form.message} onChange={handleChange} required placeholder="Cuéntame sobre tu proyecto..." />
            </label>
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <>
                  <Loader2 size={18} className="spin" /> Enviando...
                </>
              ) : (
                <>
                  <Send size={18} /> Enviar mensaje
                </>
              )}
            </button>
            {status === 'success' && (
              <p className="form-msg success" role="status">¡Mensaje enviado! Te contactaré pronto.</p>
            )}
            {status === 'error' && (
              <p className="form-msg error" role="alert">
                No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por email.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
