import { Link } from 'react-router-dom'
import { subteams } from '../data/subteams'
import PageHero from '../components/PageHero'

const competitionPhotos = [
  { src: '/images/structures/machining.jpg', alt: 'MARC members machining a rocket component' },
  { src: '/images/propulsion/motor-preparation.jpg', alt: 'Preparing motor components at the workbench' },
  { src: '/images/recovionics/transmitter-workshop.jpg', alt: 'Sorting transmitters and electronics together' },
]

const competitionLeadership = [
  { name: 'Kyra Burns', role: 'President' },
  { name: 'Spencer Michaelson', role: 'Chief Engineer' },
  { name: 'Luke Pratt', role: 'Structures Lead' },
  { name: 'Charlotte Wong', role: 'Associate Structures Lead' },
  { name: 'Wesley Evans', role: 'Propulsions Lead' },
  { name: 'Lauren Fuller', role: 'Associate Propulsions Lead' },
  { name: 'Ben Simpson', role: 'Recovionics Lead' },
  { name: 'Rai Wandeler', role: 'Recovionics Lead' },
  { name: 'Amy Liu', role: 'Recovionics Lead' },
  { name: 'Ava Cheng', role: 'Associate Recovionics Lead' },
  { name: 'Helios Hong', role: 'Communications Lead' },
]

const hprLeadership = ['Lauren Fuller', 'Wesley Evans', 'Charlotte Wong', 'Zach Tan']

export default function About() {
  return (
    <div className="page">
      <PageHero
        image="/images/structures/airframe-work-on-pvc-stand.jpg"
        alt="Working on a rocket airframe resting on a padded PVC stand"
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
              Explore three branches: build a competition rocket for Friends of
              Amateur Rocketry (FAR), work toward your Level 1 certification with
              high-power rocketry (HPR), or join the new L-RED liquid rocket engine
              project. You can take part in all three.
            </p>
          </div>
        </div>
      </section>

      <section className="dark-section soft">
        <div className="content-wrap">
          <div className="team-grid">
            <div className="team-block">
              <h2 className="display-lg team-block__title">Competition team</h2>
              <p className="body-lead team-summary">Our 2026–2027 team is organized around tasks, with flexible subteams and close collaboration. Help design, simulate, build, and test the next rocket while learning across specialties.</p>
              <div className="team-photos">
                {competitionPhotos.map((photo) => (
                  <figure key={photo.src} className="team-photos__item">
                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                  </figure>
                ))}
              </div>
              <div className="subsys-list">
                {subteams.map((sys) => (
                  <Link key={sys.slug} to={`/competition/${sys.slug}`} className="subsys subteam-link">
                    <h3>{sys.title}</h3>
                    <ul>
                      {sys.goals.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <span className="text-link">Explore the subteam <span aria-hidden="true">→</span></span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="team-block">
              <h2 className="display-lg team-block__title">HPR</h2>
              <div className="team-photos team-photos--single">
                <figure className="team-photos__item">
                  <img
                    src="/images/hpr/desert-launch-group-with-rockets.jpg"
                    alt="High-power rocketry team"
                    loading="lazy"
                  />
                </figure>
              </div>
              <p className="body-lead">Build and launch your own Level 1 rocket at your own pace. Learn simulations in OpenRocket, join weekly Makerspace build sessions, and work toward an L1 certification on a mid-semester launch trip.</p>
            </div>

            <div className="team-block">
              <p className="micro">New for 2026–2027</p>
              <h2 className="display-lg team-block__title">L-RED</h2>
              <p className="body-lead">Help build a pressure-fed liquid rocket engine from the beginning. L-RED brings members together through weekly meetings and breakout groups, with a larger project commitment similar to the competition team.</p>
              <p className="leader__role section-cta">Wesley Evans · Program Lead & Chief Engineer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="content-wrap">
          <div className="dark-section__header">
            <h2 className="display-lg">Competition team leads</h2>
            <p className="body-lead caps">
              Meet the 2026–2027 leadership team
            </p>
          </div>
          <div className="leadership-grid">
            {competitionLeadership.map((person) => (
              <div key={person.name} className="leader">
                <p className="leader__name">{person.name}</p>
                <p className="leader__role">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="dark-section soft" aria-labelledby="hpr-leads">
        <div className="content-wrap">
          <div className="dark-section__header">
            <h2 id="hpr-leads" className="display-lg">HPR leads</h2>
            <p className="body-lead">Your team for building and launching a Level 1 rocket.</p>
          </div>
          <div className="leadership-grid">
            {hprLeadership.map((name) => (
              <div key={name} className="leader">
                <p className="leader__name">{name}</p>
                <p className="leader__role">HPR Lead</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section" id="events">
        <div className="content-wrap">
          <div className="dark-section__header">
            <h2 className="display-lg">Beyond the workshop</h2>
            <p className="body-lead">MARC is also a place to make friends and share our excitement for rocketry. Here’s a look at what we did beyond building rockets last year—with more exciting events and activities to come this year.</p>
          </div>
          <div className="subsys-list event-grid">
            <article className="subsys">
              <h3>Fall & spring club fairs</h3>
              <p>We brought our rockets to fall and spring club fairs, met new teammates, and introduced more students to MARC.</p>
            </article>
            <article className="subsys">
              <h3>Outreach</h3>
              <p>We joined the Diversity Fair, Sustainability Fair, and ASP to share rocketry with the community and highlight underrepresented groups in aerospace.</p>
            </article>
            <article className="subsys">
              <h3>Speakers & aerospace connections</h3>
              <p>Last year’s highlights included a speaker event with Apple satellite engineer Sandor Nemethy and a MARC × SWE Women in Aerospace panel.</p>
            </article>
            <article className="subsys">
              <h3>Road trips & good company</h3>
              <p>We headed to the desert for L1 launches, cheered on teammates, and shared In-N-Out stops along the way.</p>
            </article>
          </div>
          <div className="event-highlight">
            <h3 className="section-head">A conversation with Sandor Nemethy</h3>
            <p className="body-lead">A look back at last year’s speaker event with the Apple satellite engineer, from the discussion to a group photo with the club.</p>
            <div className="subteam-gallery event-gallery">
              <figure>
                <img src="/images/events/sandor-nemethy/discussion.jpg" alt="Sandor Nemethy and two student hosts in conversation on stage" width="1600" height="1200" loading="lazy" />
                <figcaption>Talking satellite systems, launch, and operations with Sandor Nemethy.</figcaption>
              </figure>
              <figure>
                <img src="/images/events/sandor-nemethy/group-photo.jpg" alt="Sandor Nemethy and MARC members posing together in the auditorium" width="1600" height="1200" loading="lazy" />
                <figcaption>The club together after the speaker event.</figcaption>
              </figure>
            </div>
          </div>
          <Link to="/join" className="ghost-btn section-cta">Join the club <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </div>
  )
}
