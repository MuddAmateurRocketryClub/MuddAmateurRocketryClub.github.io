import { Link, Navigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { subteams } from '../data/subteams'

export default function Subteam() {
  const { slug } = useParams()
  const team = subteams.find((item) => item.slug === slug)
  if (!team) return <Navigate to="/about" replace />

  return (
    <div className="page">
      <PageHero image={team.photos[0].src} alt={team.photos[0].alt} title={team.title} subtitle={team.description} />
      <section className="dark-section">
        <div className="content-wrap">
          <Link to="/about" className="text-link">← Back to the competition team</Link>
          <div className="subteam-intro">
            <div>
              <p className="micro">Competition team</p>
              <h2 className="display-lg">2026–2027 goals</h2>
              <p className="body-lead">{team.leads}</p>
              <p className="body-lead section-cta">Work across subteams, learn from the leads, and help shape the project through design, testing, and iteration.</p>
            </div>
            <ul className="goal-list">
              {team.goals.map((goal, index) => (
                <li key={goal}><span className="micro" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><span>{goal}</span></li>
              ))}
            </ul>
          </div>
          <div className="subteam-gallery">
            {team.photos.map((photo) => (
              <figure key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <figcaption>{photo.alt}</figcaption>
              </figure>
            ))}
          </div>
          <div className="subteam-next">
            <Link to="/join" className="ghost-btn">Build with us <span aria-hidden="true">→</span></Link>
            <nav className="subteam-nav" aria-label="Other competition subteams">
              {subteams.filter((item) => item.slug !== slug).map((item) => (
                <Link key={item.slug} to={`/competition/${item.slug}`} className="text-link">{item.title} →</Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </div>
  )
}
