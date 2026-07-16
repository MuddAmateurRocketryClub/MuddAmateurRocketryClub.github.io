import { Link } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About' },
  { to: '/rockets', label: 'Rockets' },
  { to: '/join', label: 'Join' },
  { to: '/contact', label: 'Contact' },
  { to: '/donate', label: 'Donate' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">Mudd Amateur Rocketry Club</div>
      <div className="footer__links">
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} MARC · Harvey Mudd College
      </p>
    </footer>
  )
}
