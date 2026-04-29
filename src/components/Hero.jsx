import { useState } from 'react'
import WatchModal from './WatchModal'
import './Hero.css'

export default function Hero() {
  const [showModal, setShowModal] = useState(false)

  const scrollToApply = (e) => {
    e.preventDefault()
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="hero" id="studio">
        {/* background marquee */}
        <div className="hero__bg-marquee" aria-hidden="true">
          <div className="hero__bg-track">
            {Array(6).fill('OFF/BEAT — BUILD BOLD — CREATE — DISRUPT — SCALE — ').map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>

        {/* orbit ring */}
        <div className="hero__orbit" aria-hidden="true">
          <div className="hero__orbit-ring" />
          <div className="hero__orbit-dot" />
        </div>

        {/* badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Now Accepting Applications
        </div>

        {/* main heading */}
        <h1 className="hero__heading">
          <span className="hero__heading-line glitch" data-text="BUILD">BUILD</span>
          <span className="hero__heading-line">INDIA'S</span>
          <span className="hero__heading-line hero__heading-accent glitch" data-text="BOLDEST">BOLDEST</span>
          <span className="hero__heading-line">BRANDS.</span>
        </h1>

        <p className="hero__sub">
          A venture studio at the intersection of culture, AI, and the next generation of Indian consumers. Backed by Bessemer Venture Partners.
        </p>

        <div className="hero__ctas">
          <a href="#apply" className="btn btn--primary" onClick={scrollToApply}>
            Submit Your Idea
          </a>
          <button className="btn btn--ghost" onClick={() => setShowModal(true)}>
            <span className="btn-play">▶</span> Watch the Story
          </button>
        </div>

        {/* grid lines decoration */}
        <div className="hero__grid" aria-hidden="true" />
      </section>

      {showModal && <WatchModal onClose={() => setShowModal(false)} />}
    </>
  )
}
