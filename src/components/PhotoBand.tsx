import { Link } from 'react-router-dom'

type PhotoBandProps = {
  image?: string
  video?: string
  poster?: string
  alt: string
  title: string
  subtitle?: string
  cta?: { to: string; label: string }
  align?: 'bottom' | 'mid'
  staticMedia?: boolean
  brand?: string
  objectPosition?: string
}

export default function PhotoBand({
  image,
  video,
  poster,
  alt,
  title,
  subtitle,
  cta,
  align = 'bottom',
  staticMedia = false,
  brand,
  objectPosition,
}: PhotoBandProps) {
  return (
    <section
      className={`photo-band${align === 'mid' ? ' mid' : ''}${staticMedia ? ' static' : ''}${video ? ' has-video' : ''}`}
    >
      <div className="photo-band__media">
        {video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={poster || image}
            aria-label={alt}
            style={objectPosition ? { objectPosition } : undefined}
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={image}
            alt={alt}
            style={objectPosition ? { objectPosition } : undefined}
          />
        )}
      </div>
      <div className="photo-band__shade" aria-hidden="true" />
      <div className="photo-band__content">
        {brand && <p className="cap reveal">{brand}</p>}
        <h1 className="display-xxl reveal reveal-delay-1">{title}</h1>
        {subtitle && (
          <p className="body-lead caps reveal reveal-delay-2">{subtitle}</p>
        )}
        {cta && (
          <Link to={cta.to} className="ghost-btn reveal reveal-delay-3">
            {cta.label}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        )}
      </div>
    </section>
  )
}
