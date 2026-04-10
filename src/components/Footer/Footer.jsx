import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">🦷</div>
              Aulakh Dental
            </div>
            <p className="footer-desc">
              Providing world-class dental care with a personal touch. Our mission is to
              improve lives through better oral health and beautiful smiles.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="Facebook">FB</a>
              <a href="#" className="social-link" aria-label="Instagram">IG</a>
              <a href="#" className="social-link" aria-label="Twitter">TW</a>
              <a href="#" className="social-link" aria-label="LinkedIn">LN</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Our Services</a>
              <a href="#gallery">Gallery</a>
              <a href="#testimonials">Reviews</a>
            </div>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h4>Dental Services</h4>
            <div className="footer-links">
              <a href="#services">Teeth Whitening</a>
              <a href="#services">Dental Implants</a>
              <a href="#services">Orthodontics</a>
              <a href="#services">Root Canal</a>
              <a href="#services">Cosmetic Dentistry</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4>Clinic Info</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📍</span>
                <p>Namdhari Kanda, Dilbagh Nagar,<br />Amritsar, Punjab 143006</p>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📞</span>
                <p>+91 98765 43210</p>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">✉️</span>
                <p>info@aulakhdentalclinic.com</p>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">🕐</span>
                <p>Mon - Sat: 9am - 7pm</p>
              </div>
            </div>
          </div>


        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {year} Aulakh Dental Clinic. All Rights Reserved. Developed with ❤️ in Amritsar.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
