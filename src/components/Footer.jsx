import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">OFF<span>/</span>BEAT</span>
          <p className="footer__tagline">Building India's boldest brands.</p>
        </div>

        <div className="footer__links">
          <a href="https://twitter.com/offbeatstudios1" target="_blank" rel="noopener noreferrer">
            X / Twitter ↗
          </a>
          <a href="https://www.linkedin.com/in/aman-gupta-7217a515" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>

        <p className="footer__copy">
          © 2026 OFF/BEAT Studios. Backed by Bessemer Venture Partners.
        </p>
      </div>
    </footer>
  )
}
