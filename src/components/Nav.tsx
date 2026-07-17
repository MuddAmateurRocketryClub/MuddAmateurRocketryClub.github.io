import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/rockets', label: 'Rockets' },
  { to: '/join', label: 'Join' },
  { to: '/contact', label: 'Contact' },
  { to: '/donate', label: 'Donate' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav${scrolled || open ? ' scrolled' : ''}`}>
      <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
        <img src="/images/marc-logo.png" alt="" className="nav__logo" />
        <span>MARC</span>
      </Link>

      <button
        className={`nav__toggle${open ? ' open' : ''}`}
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav__toggle-bars" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="nav__toggle-label">{open ? 'Close' : 'Menu'}</span>
      </button>

      <nav
        id="primary-nav"
        className={`nav__links${open ? ' open' : ''}`}
        aria-label="Primary"
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
