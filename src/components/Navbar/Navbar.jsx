import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#home" className="navbar-brand">
            <div className="navbar-logo-icon">🦷</div>
            Aulakh Dental
          </a>

          <div className="navbar-links">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <a href="#contact" className="navbar-cta">Book Appointment</a>
          </div>

          <button
            className="navbar-hamburger"
            id="navbar-hamburger-btn"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <button className="mobile-nav-close" id="mobile-nav-close-btn" aria-label="Close menu" onClick={close}>✕</button>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} onClick={close}>{label}</a>
        ))}
        <a href="#contact" className="btn btn-accent" onClick={close} style={{ marginTop: 8 }}>Book Appointment</a>
      </div>
    </>
  );
}
