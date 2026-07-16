import PageHero from '../components/PageHero'

const rockets = [
  {
    year: '2025–2026',
    name: 'Apollyon I',
    status: 'Won 1st at FAR Unlimited 2026',
    image: '/images/rocket-apollyon.jpg',
    specs: [
      'Target altitude: 12,000 ft',
      'Single stage, dual deployment',
      'M-class motor (10.5 kNs impulse)',
      'Drone release',
      'Live video',
      'Cubesat payload',
      'Water ballast',
    ],
  },
  {
    year: '2024–2025',
    name: 'Gladius III',
    status: 'Won 3rd at FAR Unlimited 2025',
    image: '/images/rocket-gladius-iii.jpg',
    specs: ['Successful recovery'],
  },
  {
    year: '2023–2024',
    name: 'Gladius II',
    image: '/images/rocket-gladius-ii.jpg',
    specs: ['Fin shred'],
  },
  {
    year: '2022–2023',
    name: 'Gladius I',
    image: '/images/rocket-gladius-i.jpg',
    specs: ['Premature separation'],
  },
]

export default function Rockets() {
  return (
    <div className="page">
      <PageHero
        image="/images/rockets-hero.jpg"
        alt="Team members working on a rocket"
        title="Rockets"
        subtitle="Flight heritage from Gladius to Apollyon."
        objectPosition="center 45%"
      />

      <section className="dark-section">
        <div className="content-wrap">
          <div className="rocket-list">
            {rockets.map((rocket) => (
              <article key={rocket.name} className="rocket-row">
                <div className="rocket-row__header">
                  <p className="rocket-row__meta">{rocket.year}</p>
                  <h2 className="display-lg">{rocket.name}</h2>
                </div>
                <div className="rocket-row__body">
                  <figure className="rocket-row__photo">
                    <img src={rocket.image} alt={rocket.name} loading="lazy" />
                  </figure>
                  <div className="rocket-row__details">
                    {rocket.status && (
                      <p className="rocket-row__status">{rocket.status}</p>
                    )}
                    {rocket.specs.length > 0 && (
                      <ul className="rocket-row__specs">
                        {rocket.specs.map((spec) => (
                          <li key={spec}>{spec}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
