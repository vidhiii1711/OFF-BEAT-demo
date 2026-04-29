import './Stats.css'

const stats = [
  { value: '₹100 Cr', label: 'Seed Round' },
  { value: 'Bessemer', label: 'Lead Investor' },
  { value: '2026', label: 'Founded' },
  { value: '∞', label: 'Ambition' },
]

export default function Stats() {
  return (
    <section className="stats">
      {stats.map(({ value, label }, i) => (
        <div key={i} className="stats__item">
          <span className="stats__value">{value}</span>
          <span className="stats__label">{label}</span>
        </div>
      ))}
    </section>
  )
}
