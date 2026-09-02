import { skillGroups } from '../data/skills'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">Tools and technologies I work with</h2>
          <p className="section-sub">
            Grouped by where they're used most — from first-line support platforms to the stack
            behind my own projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.category}>
              <h3 className="skill-card-title">{group.category}</h3>
              <ul className="skill-chip-list">
                {group.items.map((item) => (
                  <li key={item} className="skill-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
