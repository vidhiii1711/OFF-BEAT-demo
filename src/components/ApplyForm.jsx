import { useState } from 'react'
import Toast from './Toast'
import './ApplyForm.css'

const roles = ['Founder', 'Creator', 'AI Builder', 'Web Developer', 'Designer', 'Other']

export default function ApplyForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    idea: '',
    link: '',
    ig: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [toast, setToast] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.role || !form.idea) return
    setSubmitted(true)
    setToast(true)
    setTimeout(() => setToast(false), 4000)
  }

  return (
    <section className="apply" id="apply">
      <div className="apply__inner">
        <div className="apply__header">
          <span className="apply__tag">Apply</span>
          <h2 className="apply__title">
            Ready to Build<br />
            <span>Something Bold?</span>
          </h2>
          <p className="apply__desc">
            Tell us about your idea. If it's got fire, we want to hear it. No decks needed — just your story.
          </p>
        </div>

        {submitted ? (
          <div className="apply__success">
            <span className="apply__success-icon">✦</span>
            <h3>Application Received.</h3>
            <p>OFF/BEAT will be in touch. Keep building.</p>
            <button
              className="apply__reset"
              onClick={() => {
                setSubmitted(false)
                setForm({ name: '', email: '', role: '', idea: '', link: '', ig: '' })
              }}
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form className="apply__form" onSubmit={handleSubmit} noValidate>
            <div className="apply__row">
              <div className="apply__field">
                <label className="apply__label">Full Name *</label>
                <input
                  className="apply__input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="apply__field">
                <label className="apply__label">Email *</label>
                <input
                  className="apply__input"
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="apply__field">
              <label className="apply__label">I am a... *</label>
              <div className="apply__roles">
                {roles.map((role) => (
                  <button
                    type="button"
                    key={role}
                    className={`apply__role-btn ${form.role === role ? 'active' : ''}`}
                    onClick={() => setForm((p) => ({ ...p, role }))}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <div className="apply__field">
              <label className="apply__label">Your Idea / What You're Building *</label>
              <textarea
                className="apply__textarea"
                name="idea"
                placeholder="Describe your startup idea, creator venture, or project in a few sentences. Be bold."
                value={form.idea}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            <div className="apply__row">
              <div className="apply__field">
                <label className="apply__label">Portfolio / Project Link</label>
                <input
                  className="apply__input"
                  type="url"
                  name="link"
                  placeholder="https://yourproject.vercel.app"
                  value={form.link}
                  onChange={handleChange}
                />
              </div>
              <div className="apply__field">
                <label className="apply__label">Instagram Handle</label>
                <input
                  className="apply__input"
                  type="text"
                  name="ig"
                  placeholder="@yourhandle"
                  value={form.ig}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="apply__submit"
              disabled={!form.name || !form.email || !form.role || !form.idea}
            >
              Submit Application ↗
            </button>
          </form>
        )}
      </div>

      {toast && (
        <Toast message="🎯 Submitted! OFF/BEAT will be in touch." onClose={() => setToast(false)} />
      )}
    </section>
  )
}
