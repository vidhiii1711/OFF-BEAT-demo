import './Creators.css'

const cards = [
  {
    icon: '🚀',
    title: 'Founders',
    desc: 'Building a D2C brand, a SaaS tool, or the next big consumer product? We back bold ideas at the earliest stage.',
  },
  {
    icon: '🎨',
    title: 'Creators',
    desc: 'You have an audience and a voice. We help you turn that into a scalable business — content to commerce.',
  },
  {
    icon: '🤖',
    title: 'AI Builders',
    desc: 'Using AI to build faster, smarter products for the Indian market? That\'s exactly the future we\'re betting on.',
  },
]

export default function Creators() {
  return (
    <section className="creators" id="creators">
      <div className="creators__inner">
        <div className="creators__header">
          <span className="creators__tag">Who We Back</span>
          <h2 className="creators__title">
            Built for the<br />
            <span>Bold Ones.</span>
          </h2>
          <p className="creators__desc">
            OFF/BEAT backs founders and creators who understand India's new consumer — aspirational, digital-first, and culture-driven.
          </p>
        </div>

        <div className="creators__cards">
          {cards.map(({ icon, title, desc }, i) => (
            <div className="creators__card" key={i}>
              <span className="creators__card-icon">{icon}</span>
              <h3 className="creators__card-title">{title}</h3>
              <p className="creators__card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
