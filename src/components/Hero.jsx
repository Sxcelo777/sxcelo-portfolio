import { FiArrowRight, FiGithub } from 'react-icons/fi'
import './Hero.css'

export default function Hero({ github }) {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true">
        <svg viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice">
          <g className="hero-grid-lines">
            <line x1="0" y1="120" x2="1200" y2="120" />
            <line x1="0" y1="320" x2="1200" y2="320" />
            <line x1="0" y1="520" x2="1200" y2="520" />
            <line x1="220" y1="0" x2="220" y2="640" />
            <line x1="620" y1="0" x2="620" y2="640" />
            <line x1="960" y1="0" x2="960" y2="640" />
          </g>
          <g className="hero-grid-nodes">
            <circle cx="220" cy="120" r="3.5" />
            <circle cx="620" cy="320" r="3.5" />
            <circle cx="960" cy="120" r="3.5" />
            <circle cx="220" cy="520" r="3.5" />
            <circle cx="960" cy="520" r="3.5" />
          </g>
        </svg>
      </div>

      <div className="container hero-inner">
        <div className="hero-status">
          <span className="hero-status-dot" />
          Available for junior IT &amp; web development roles
        </div>

        <h1 className="hero-name">Sicelo Mathenjwa</h1>
        <p className="hero-role">Junior IT Support Consultant · IT Support · Web Development</p>

        <p className="hero-desc">
          Junior IT professional with hands-on experience in technical support, hardware
          troubleshooting, networking and web development — building practical tools alongside
          day-to-day support work.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Projects <FiArrowRight size={16} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
          <a href={github} target="_blank" rel="noreferrer noopener" className="btn btn-ghost">
            <FiGithub size={16} /> View GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
