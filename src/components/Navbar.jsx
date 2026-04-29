import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Studio', href: '#studio' },
  { label: 'Creators', href: '#creators' },
  { label: 'AI Tools', href: '#ai-tools' },
  { label: 'Apply', href: '#apply' },
]

export default function Navbar() {
  const [active, setActive] = useState('studio')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      const sections = ['studio', 'creators', 'ai-tools', 'apply']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i])
          return
        }
      }
      setActive('')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a className="navbar__logo" href="/">
        OFF<span>/</span>BEAT
      </a>

      <ul className="navbar__links">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className={`navbar__link ${active === href.replace('#', '') ? 'active' : ''}`}
              onClick={(e) => scrollTo(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#apply"
        className="navbar__cta"
        onClick={(e) => scrollTo(e, '#apply')}
      >
        Apply Now
      </a>
    </nav>
  )
}
