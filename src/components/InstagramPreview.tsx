const instagramUrl = 'https://www.instagram.com/hmcmarc/'

export default function InstagramPreview() {
  return (
    <aside className="instagram-preview" aria-label="MARC on Instagram">
      <a
        className="instagram-preview__photo"
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit @hmcmarc on Instagram (opens in a new tab)"
      >
        <img
          src="/images/club-life/competition-team-2026-2027.jpg"
          alt="MARC’s 2026–2027 competition team together in a classroom"
          width="2400"
          height="1800"
          loading="lazy"
        />
      </a>
      <div className="instagram-preview__content">
        <p className="micro">Follow along on Instagram</p>
        <h3 className="display-lg">@hmcmarc</h3>
        <p className="body-lead">See more of club life, rocket builds, and launch days.</p>
        <a
          className="ghost-btn"
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View @hmcmarc on Instagram (opens in a new tab)"
        >
          View on Instagram <span aria-hidden="true">↗</span>
        </a>
      </div>
    </aside>
  )
}
