import { Link } from 'react-router-dom'
import PhotoBand from '../components/PhotoBand'

export default function Home() {
  return (
    <div className="page">
      <PhotoBand
        video="/videos/apollyon-launch.mp4"
        poster="/images/rockets/apollyon-i/onboard-camera-view.jpg"
        alt="Apollyon I launch"
        brand="Mudd Amateur Rocketry Club"
        title="MARC"
        subtitle="Harvey Mudd’s student rocketry team — design, build, and launch."
        cta={{ to: '/about', label: 'About' }}
        objectPosition="center 28%"
        className="home-launch-video"
      />

      <PhotoBand
        image="/images/club-life/competition-team-2026-2027.jpg"
        alt="MARC’s 2026–2027 competition team posing together in a classroom"
        title="Three ways to build"
        subtitle="Competition rockets, high-power certification, and L-RED: our new liquid rocket engine project."
        cta={{ to: '/about', label: 'Explore the teams' }}
        staticMedia
        objectPosition="center 60%"
      />

      <PhotoBand
        image="/images/club-life/unicycling-with-rocket.jpg"
        alt="Club member unicycling while carrying a rocket"
        title="Open to all majors"
        subtitle="No prior rocketry experience required. Join at club fair — or anytime."
        cta={{ to: '/join', label: 'How to join' }}
        staticMedia
        objectPosition="center 40%"
      />

      <PhotoBand
        image="/images/structures/machining.jpg"
        alt="MARC members machining a rocket component in the workshop"
        title="Fuel the next flight"
        subtitle="Sponsors keep our motors firing and our payloads flying. Reach out if you want to support the next mission."
        cta={{ to: '/donate', label: 'Donate' }}
        staticMedia
        objectPosition="center 40%"
      />
      <section className="dark-section">
        <div className="content-wrap">
          <h2 className="display-lg">Beyond the workshop</h2>
          <p className="body-lead section-cta">From club fairs and outreach to speakers and launch road trips, take a look at last year’s highlights. More exciting events and activities are coming this year.</p>
          <Link to="/about#events" className="ghost-btn section-cta">Club life & events <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </div>
  )
}
