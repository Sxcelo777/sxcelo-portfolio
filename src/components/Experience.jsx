import { experience } from '../data/experience'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
        </div>

        <ol className="timeline">
          {experience.map((job, i) => (
            <li className="timeline-item" key={`${job.company}-${i}`}>
              <div className="timeline-marker" aria-hidden="true">
                <span className="timeline-dot" />
                {i !== experience.length - 1 && <span className="timeline-connector" />}
              </div>

              <div className="timeline-card">
                <div className="timeline-card-head">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <p className="timeline-company">
                      {job.company}
                      {job.location ? ` · ${job.location}` : ''}
                    </p>
                  </div>
                  {job.dates && <span className="timeline-dates">{job.dates}</span>}
                </div>

                <p className="timeline-desc">{job.description}</p>

                {job.responsibilities?.length > 0 && (
                  <ul className="timeline-resp">
                    {job.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                )}

                <ul className="timeline-tech">
                  {job.technologies.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
