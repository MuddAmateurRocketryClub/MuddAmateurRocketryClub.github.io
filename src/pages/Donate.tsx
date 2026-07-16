import PageHero from '../components/PageHero'

export default function Donate() {
  return (
    <div className="page">
      <PageHero
        image="/images/donate-hero.jpg"
        alt="MARC rocketry team"
        title="Donate"
        subtitle="Help fuel our next journey."
        objectPosition="center 62%"
      />

      <section className="dark-section donate-cta">
        <div className="content-wrap narrow">
          <h2 className="display-lg">Sponsor a flight</h2>
          <p className="body-lead">
            We are always looking for sponsors to fuel our next journey. If you
            are interested in donating, please reach out — every contribution
            goes toward motors, materials, and getting hardware on the pad.
          </p>
          <a
            className="contact-email"
            href="mailto:marc-leadership-l@gmail.com"
          >
            marc-leadership-l@gmail.com
          </a>
        </div>
      </section>
    </div>
  )
}
