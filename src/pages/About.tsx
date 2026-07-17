import PageHero from '../components/PageHero'

const competitionSubsystems = [
  {
    title: 'Structures',
    items: [
      'Design and build robust hardware',
      'Design verification and physical testing',
    ],
  },
  {
    title: 'Propulsion',
    items: [
      'Motor selection and construction',
      'Flight characterizations',
      'FEA simulations',
    ],
  },
  {
    title: 'Recovery & Avionics',
    items: [
      'In-air experiments and live video',
      'Ejection systems and parachutes',
      'Parachute deployment',
      'Rocket tracking',
      'Ground support and integration',
    ],
  },
]

const competitionPhotos = [
  { src: '/images/competition-1.jpg', alt: 'Competition team at work' },
  { src: '/images/competition-2.jpg', alt: 'Competition rocket build' },
  { src: '/images/competition-3.jpg', alt: 'Avionics and transmitter sorting' },
]

const leadership = [
  { name: 'Kyra Burns', role: 'President' },
  { name: 'Spencer Michealson', role: 'Chief Engineer' },
  { name: 'Ben Simpson', role: 'Recovery & Avionics Lead' },
  { name: 'Rai Wandeler', role: 'Recovery & Avionics Lead' },
  { name: 'Helios Hong', role: 'Communications Lead' },
  { name: 'Wesley Evans', role: 'Propulsion & HPR Lead' },
  { name: 'Charlotte Wong', role: 'Associate Structures & HPR Lead' },
  { name: 'Luke Pratt', role: 'Associate Structures Lead' },
  { name: 'Ava Cheng', role: 'Associate Recovery & Avionics Lead' },
  { name: 'Lauren Fuller', role: 'HPR Lead' },
  { name: 'Zach Tan', role: 'HPR Lead' },
]

export default function About() {
  return (
    <div className="page">
      <PageHero
        image="/images/about-hero.jpg"
        alt="MARC club members"
        title="About us"
        subtitle="Harvey Mudd’s student rocketry club — technical skills, hard challenges, and teammates for life."
      />

      <section className="dark-section">
        <div className="content-wrap">
          <div className="dark-section__header">
            <h2 className="section-head">Who we are</h2>
            <p className="body-lead">
              We are open to all majors and require no previous rocketry
              experience or knowledge. Learn new technical skills, tackle
              rewarding challenges, and meet new friends and teammates.
            </p>
            <p className="body-lead" style={{ marginTop: '1.25rem' }}>
              We have two branches: the competition team, where members build a
              rocket for the annual Friends of Amateur Rocketry launch, and the
              high-power rocketry team, where members build and launch their own
              Level 1 rocket.
            </p>
          </div>
        </div>
      </section>

      <section className="dark-section soft">
        <div className="content-wrap">
          <div className="team-grid">
            <div className="team-block">
              <h2 className="display-lg team-block__title">Competition team</h2>
              <div className="team-photos">
                {competitionPhotos.map((photo) => (
                  <figure key={photo.src} className="team-photos__item">
                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                  </figure>
                ))}
              </div>
              <div className="subsys-list">
                {competitionSubsystems.map((sys) => (
                  <div key={sys.title} className="subsys">
                    <h3>{sys.title}</h3>
                    <ul>
                      {sys.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="team-block">
              <h2 className="display-lg team-block__title">HPR</h2>
              <div className="team-photos team-photos--single">
                <figure className="team-photos__item">
                  <img
                    src="/images/hpr-team.jpg"
                    alt="High-power rocketry team"
                    loading="lazy"
                  />
                </figure>
              </div>
              <p className="body-lead caps">
                Build and launch your own L1 from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="content-wrap">
          <div className="dark-section__header">
            <h2 className="display-lg">Leadership</h2>
            <p className="body-lead caps">
              Meet the 2026–2027 leadership team
            </p>
          </div>
          <div className="leadership-grid">
            {leadership.map((person) => (
              <div key={person.name} className="leader">
                <p className="leader__name">{person.name}</p>
                <p className="leader__role">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
