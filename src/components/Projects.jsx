import { useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/projects'
import './Projects.css'

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0]?.id)
  const active = projects.find((p) => p.id === activeId) ?? projects[0]

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Proof of work</h2>
          <p className="section-sub">Select a project to see what it does and how it was built.</p>
        </div>

        <div className="project-pills" role="tablist" aria-label="Projects">
          {projects.map((p) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={p.id === activeId}
              className={`project-pill ${p.id === activeId ? 'project-pill-active' : ''}`}
              onClick={() => setActiveId(p.id)}
            >
              {p.name}
            </button>
          ))}
        </div>

        {active && (
          <div className="project-panel">
            <div className="project-media">
              <img src={active.image} alt={`Screenshot of ${active.name}`} loading="lazy" />
            </div>

            <div className="project-info">
              <span className="project-tagline">{active.tagline}</span>
              <h3 className="project-name">{active.name}</h3>
              <p className="project-desc">{active.description}</p>

              <ul className="project-tech">
                {active.technologies.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className="project-actions">
                {active.demo && (
                  <a
                    href={active.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-primary"
                  >
                    View Project <FiExternalLink size={16} />
                  </a>
                )}
                {active.github && (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-secondary"
                  >
                    <FiGithub size={16} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
