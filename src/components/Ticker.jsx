import './Ticker.css'

const items = [
  '✦ OFF/BEAT — BUILD BOLD',
  '✦ APPLICATIONS OPEN NOW',
  '✦ ₹100 CR SEED ROUND',
  '✦ BACKED BY BESSEMER VENTURE PARTNERS',
  '✦ INDIA\'S NEXT BOLD BRANDS',
  '✦ AI × CULTURE × GROWTH',
  '✦ FOUNDED BY AMAN GUPTA',
]

export default function Ticker() {
  const repeated = [...items, ...items, ...items]
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {repeated.map((item, i) => (
          <span key={i} className="ticker-item">{item}</span>
        ))}
      </div>
    </div>
  )
}
