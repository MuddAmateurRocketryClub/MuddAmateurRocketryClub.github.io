type PageHeroProps = {
  image: string
  alt: string
  title: string
  subtitle?: string
  objectPosition?: string
}

export default function PageHero({
  image,
  alt,
  title,
  subtitle,
  objectPosition,
}: PageHeroProps) {
  return (
    <header className="page-hero">
      <div className="page-hero__media">
        <img
          src={image}
          alt={alt}
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
      <div className="page-hero__shade" aria-hidden="true" />
      <div className="page-hero__content">
        <h1 className="display-xl reveal">{title}</h1>
        {subtitle && (
          <p className="body-lead caps reveal reveal-delay-1">{subtitle}</p>
        )}
      </div>
    </header>
  )
}
