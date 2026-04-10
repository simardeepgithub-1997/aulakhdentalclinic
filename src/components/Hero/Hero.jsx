import heroBg from '../../assets/fmc-dental-clinic-background-1.png';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <img src={heroBg} alt="Dental clinic interior" className="hero-bg-img" />
      <div className="hero-overlay" />

      <div className="container" style={{ width: '100%' }}>
        <div className="hero-content">
          <div className="hero-badge fade-in">
            <span>🦷</span> Trusted Dental Care in Amritsar
          </div>

          <h1 className="hero-title fade-in-up delay-1">
            Your Perfect Smile<br />
            Starts <span className="highlight">Right Here</span>
          </h1>

          <p className="hero-desc fade-in-up delay-2">
            At Aulakh Dental Clinic, we combine cutting-edge technology with compassionate
            care to deliver outstanding dental results. From routine check-ups to full smile
            makeovers — we've got your smile covered.
          </p>

          <div className="hero-actions fade-in-up delay-3">
            <a href="#contact" className="btn btn-accent">📅 Book Appointment</a>
            <a href="#services" className="btn btn-outline">Our Services</a>
          </div>

          <div className="hero-stats fade-in-up delay-4">
            <div className="hero-stat">
              <span className="hero-stat-num">5000+</span>
              <span className="hero-stat-label">Happy Patients</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">15+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">20+</span>
              <span className="hero-stat-label">Services Offered</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">98%</span>
              <span className="hero-stat-label">Patient Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating card */}
      <div className="hero-card fade-in delay-5">
        <div className="hero-card-icon">⭐</div>
        <div className="hero-card-text">
          <strong>Top-Rated Clinic</strong>
          <span>4.9/5 on Google Reviews</span>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-dot" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
