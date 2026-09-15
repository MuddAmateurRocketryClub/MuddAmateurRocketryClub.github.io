import { Link } from 'react-router-dom'
import PhotoBand from '../components/PhotoBand'

export default function Home() {
  return (
    <div className="page">
      <PhotoBand
        video="/videos/apollyon-launch.mp4"
        poster="/images/launch-poster.jpg"
        alt="Apollyon I launch"
        brand="Mudd Amateur Rocketry Club"
        title="MARC"
        subtitle="Harvey Mudd’s student rocketry team — design, build, and launch."
        cta={{ to: '/about', label: 'About' }}
        objectPosition="center 28%"
        className="home-launch-video"
      />

      <PhotoBand
        image="/images/rocket-pad.jpg"
        alt="Rocket on the launch pad"
        title="Three ways to build"
        subtitle="Competition rockets, high-power certification, and L-RED: our new liquid rocket engine project."
        cta={{ to: '/about', label: 'Explore the teams' }}
        staticMedia
      />

      <PhotoBand
        image="/images/open-to-all.jpg"
        alt="Club member unicycling while carrying a rocket"
        title="Open to all majors"
        subtitle="No prior rocketry experience required. Join at club fair — or anytime."
        cta={{ to: '/join', label: 'How to join' }}
        staticMedia
        objectPosition="center 40%"
      />

      <PhotoBand
        image="/images/fuel-flight.jpg"
        alt="Team working on a rocket in the workshop"
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
