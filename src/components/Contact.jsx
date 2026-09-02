import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import './Contact.css'

export default function Contact({ email, linkedin, github, location }) {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-inner">
        <div className="section-head" style={{ marginBottom: 32 }}>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let's talk</h2>
          <p className="section-sub">
            Open to junior IT support and web development roles. Reach out through any of the
            channels below.
          </p>
        </div>

        <div className="contact-links">
          <a className="contact-link" href={`mailto:${email}`}>
            <FiMail size={18} />
            <span>{email}</span>
          </a>
          <a className="contact-link" href={linkedin} target="_blank" rel="noreferrer noopener">
            <FiLinkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a className="contact-link" href={github} target="_blank" rel="noreferrer noopener">
            <FiGithub size={18} />
            <span>GitHub</span>
          </a>
          {location && (
            <span className="contact-link contact-link-static">
              <FiMapPin size={18} />
              <span>{location}</span>
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
