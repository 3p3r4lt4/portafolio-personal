import SectionHeader from './SectionHeader.jsx';
import { skills, softSkills } from '../data/profile.js';

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        <SectionHeader eyebrow="Habilidades" title="Stack tecnológico" />
        <div className="grid-3">
          {skills.map((group) => (
            <div className="card reveal" key={group.group}>
              <h3 className="skill-group-title">{group.group}</h3>
              <ul className="skill-list">
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <div className="skill-row">
                      <span>{skill.name}</span>
                      <span className="mono">{skill.level}%</span>
                    </div>
                    <div className="bar" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={skill.name}>
                      <div className="bar-fill" style={{ '--w': `${skill.level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="chips reveal">
          {softSkills.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
