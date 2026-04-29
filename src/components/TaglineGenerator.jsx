import { useState, useRef } from 'react'
import './TaglineGenerator.css'
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || ''

const COOLDOWN_SECONDS = 15
const RETRY_DELAY_MS = 12000
const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

const buildPrompt = (idea) =>
  `You are a brand strategist for OFF/BEAT, a bold Indian venture studio backed by Aman Gupta (founder of boAt).
Generate exactly 3 short, punchy brand taglines for this startup idea: "${idea}"
Rules: under 8 words each, bold and aspirational, focused on Indian youth culture.
Respond ONLY with a JSON array of 3 strings, no markdown.
Example: ["Tagline one", "Tagline two", "Tagline three"]`

async function fetchGemini(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.9, maxOutputTokens: 200 },
    }),
  })
}

async function generateTaglines(idea, onRetrying) {
  const prompt = buildPrompt(idea)
  let res = await fetchGemini(prompt)
  if (res.status === 429) {
    onRetrying()
    await sleep(RETRY_DELAY_MS)
    res = await fetchGemini(prompt)
  }
  if (res.status === 429) throw new Error('RATE_LIMIT')
  if (res.status === 400) throw new Error('BAD_KEY')
  if (!res.ok) throw new Error(`API_${res.status}`)
  const data = await res.json()
  const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || '[]'
  const clean = raw.replace(/```json|```/g, '').trim()
  const parsed = JSON.parse(clean)
  return Array.isArray(parsed) ? parsed : Object.values(parsed)
}

export default function TaglineGenerator() {
  const [input, setInput] = useState('')
  const [taglines, setTaglines] = useState([])
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [cooldown, setCooldown] = useState(0)
  const timerRef = useRef(null)

  const startCooldown = (secs = COOLDOWN_SECONDS) => {
    setCooldown(secs)
    let remaining = secs
    timerRef.current = setInterval(() => {
      remaining -= 1
      setCooldown(remaining)
      if (remaining <= 0) { clearInterval(timerRef.current); setCooldown(0) }
    }, 1000)
  }

  const handleGenerate = async () => {
    if (!input.trim() || cooldown > 0 || status === 'loading' || status === 'retrying') return
    setStatus('loading')
    setErrorMsg('')
    setTaglines([])
    try {
      const results = await generateTaglines(input.trim(), () => setStatus('retrying'))
      setTaglines(results)
      setStatus('done')
      startCooldown()
    } catch (err) {
      setStatus('error')
      if (err.message === 'RATE_LIMIT') {
        setErrorMsg('Rate limit hit twice in a row. Wait 60 seconds and try again.')
        startCooldown(30)
      } else if (err.message === 'BAD_KEY') {
        setErrorMsg('API key rejected. Check VITE_GEMINI_API_KEY in .env and restart npm run dev.')
      } else {
        setErrorMsg(`Error: ${err.message}. Check console for details.`)
      }
    }
  }

  const isBusy = status === 'loading' || status === 'retrying'

  return (
    <section className="tgen" id="ai-tools">
      <div className="tgen__inner">
        <div className="tgen__header">
          <span className="tgen__tag">AI Tools</span>
          <h2 className="tgen__title">Brand Tagline<br /><span>Generator</span></h2>
          <p className="tgen__desc">
            Describe your startup idea. Get three bold, battle-ready taglines — powered by Gemini AI.
          </p>
        </div>
        <div className="tgen__form">
          <div className="tgen__input-wrap">
            <input
              type="text"
              className="tgen__input"
              placeholder="e.g. affordable skincare for Indian college students..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              maxLength={200}
              disabled={isBusy}
            />
            <button
              className="tgen__btn"
              onClick={handleGenerate}
              disabled={isBusy || !input.trim() || cooldown > 0}
            >
              {status === 'loading' && <><span className="tgen__spinner" /> Generating…</>}
              {status === 'retrying' && <><span className="tgen__spinner" /> Retrying…</>}
              {cooldown > 0 && status !== 'loading' && status !== 'retrying' && `Wait ${cooldown}s`}
              {!isBusy && cooldown === 0 && 'Generate ↗'}
            </button>
          </div>
          {status === 'retrying' && (
            <p className="tgen__info">⚡ Rate limited — auto-retrying in {RETRY_DELAY_MS / 1000}s. Hang on…</p>
          )}
          {status === 'error' && errorMsg && (
            <p className="tgen__error">{errorMsg}</p>
          )}
          {taglines.length > 0 && (
            <div className="tgen__results">
              {taglines.map((tagline, i) => (
                <div key={i} className="tgen__result" style={{ animationDelay: `${i * 0.12}s` }}>
                  <span className="tgen__result-num">0{i + 1}</span>
                  <span className="tgen__result-text">{tagline}</span>
                  <button className="tgen__copy" onClick={() => navigator.clipboard.writeText(tagline)} title="Copy">⎘</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}