import { useState, type FormEvent } from 'react'
import PageHero from '../components/PageHero'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const firstName = String(form.get('firstName') || '').trim()
    const lastName = String(form.get('lastName') || '').trim()
    const email = String(form.get('email') || '').trim()
    const message = String(form.get('message') || '').trim()
    const body = [
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      '',
      message,
    ].join('\n')

    window.location.href = `mailto:marc-leadership-l@gmail.com?subject=${encodeURIComponent(
      'MARC website contact',
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div className="page">
      <PageHero
        image="/images/contact-hero.jpg"
        alt="Rocket launching over the desert"
        title="Contact"
        subtitle="We are always open to new members joining."
        objectPosition="center 35%"
      />

      <section className="dark-section">
        <div className="content-wrap">
          <div className="contact-layout">
            <div>
              <h2 className="section-head">Get in touch</h2>
              <p className="body-lead" style={{ marginTop: '1.25rem' }}>
                Please feel free to reach out to us with questions about joining,
                sponsorship, or collaboration.
              </p>
              <a
                className="contact-email"
                href="mailto:marc-leadership-l@gmail.com"
              >
                marc-leadership-l@gmail.com
              </a>
            </div>

            <form className="form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="firstName">First name</label>
                  <input id="firstName" name="firstName" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="lastName">Last name</label>
                  <input id="lastName" name="lastName" type="text" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>
              <button
                type="submit"
                className="ghost-btn"
                style={{ alignSelf: 'flex-start' }}
              >
                Send
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </button>
              {sent && (
                <p className="form-success" role="status">
                  Opening your email client to send this message.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
