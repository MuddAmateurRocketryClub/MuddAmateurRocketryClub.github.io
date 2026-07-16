import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const faqs = [
  {
    q: 'Who can join?',
    a: 'Any Harvey Mudd student, regardless of major or experience. Because of budget restraints, we cannot allow other 5C students to join formally.',
  },
  {
    q: 'When can I join?',
    a: 'Normally, people sign up during the fall and spring club fair. However, we are open to people joining at any time. Just reach out!',
  },
  {
    q: 'What is the time commitment?',
    a: 'We have weekly 3-hour meetings. As the competition becomes closer, members typically spend more time outside of meetings to build — from about 5 hours a week to 20. The more hours you put in, the more you learn.',
  },
]

export default function Join() {
  return (
    <div className="page">
      <PageHero
        image="/images/join-hero.jpg"
        alt="MARC club members outdoors"
        title="Join"
        subtitle="No experience required. Just show up ready to build."
        objectPosition="center 30%"
      />

      <section className="dark-section">
        <div className="content-wrap narrow">
          <div className="dark-section__header">
            <h2 className="section-head">FAQs</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="ghost-btn" style={{ marginTop: '3rem' }}>
            Get in touch
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}
