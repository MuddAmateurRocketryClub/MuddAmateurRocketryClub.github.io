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
      />

      <PhotoBand
        image="/images/rocket-pad.jpg"
        alt="Rocket on the launch pad"
        title="Competition & high power"
        subtitle="Two branches. One mission: fly farther and learn more."
        cta={{ to: '/rockets', label: 'Our rockets' }}
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
    </div>
  )
}
