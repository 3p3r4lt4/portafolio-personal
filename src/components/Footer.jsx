import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function Footer() {
  const { contact } = profile;
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Hecho con React & Vite.
        </p>
        <div className="socials">
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${contact.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="#inicio" aria-label="Volver arriba">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
