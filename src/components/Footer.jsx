import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Footer.css'

export default function Footer({ email, linkedin, github }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Sxcelo Inez. All rights reserved.</p>
        <div className="footer-links">
          <a href={github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
            <FiGithub size={17} />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
            <FiLinkedin size={17} />
          </a>
          <a href={`mailto:${email}`} aria-label="Email">
            <FiMail size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}
