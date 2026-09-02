import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi'
import './Nav.css'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ github, linkedin }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="nav-logo" onClick={handleLinkClick}>
          <span className="nav-logo-mark" aria-hidden="true" />
          Sxcelo<span className="nav-logo-dim">.dev</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="nav-icon-btn"
            aria-label="Open GitHub profile in a new tab"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="nav-icon-btn"
            aria-label="Open LinkedIn profile in a new tab"
          >
            <FiLinkedin size={18} />
          </a>
          <button
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-mobile" aria-label="Mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
