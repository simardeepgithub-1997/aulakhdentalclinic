import aboutImg from '../../assets/2.jpg';
import doctorImg from '/images/dentist.png';
import './About.css';

const FEATURES = [
  { icon: '🏥', title: 'Modern Facility', detail: 'State-of-the-art equipment' },
  { icon: '👨‍⚕️', title: 'Expert Doctors', detail: 'BDS & MDS certified' },
  { icon: '💊', title: 'Pain-Free Care', detail: 'Gentle & comfortable treatments' },
  { icon: '⏰', title: 'Flexible Hours', detail: 'Morning & evening slots' },
  { icon: '🔬', title: 'Advanced Tech', title: 'Digital X-rays & 3D scans', detail: 'Digital X-rays & 3D scans' },
  { icon: '💰', title: 'Affordable', detail: 'Transparent pricing & EMIs' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-inner">
          {/* Images */}
          <div className="about-images">
            <img src={aboutImg} alt="Patient receiving dental treatment" className="about-img-main" />
            <div className="about-img-badge">
              <div className="about-img-badge-icon">🏆</div>
              <div className="about-img-badge-text">
                <strong>15+ Years</strong>
                <span>Of Excellence in Dentistry</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <div className="section-tag">About Us</div>
            <h2 className="section-title">
              Where Expertise Meets <span>Compassion</span>
            </h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              Aulakh Dental Clinic has been serving Amritsar and surrounding areas for over 15 years.
              Our highly qualified team of dental professionals is committed to providing exceptional
              care in a warm, welcoming environment. We believe everyone deserves a healthy,
              beautiful smile.
            </p>

            <div className="about-features">
              {FEATURES.map((f) => (
                <div key={f.title} className="about-feature">
                  <div className="about-feature-icon">{f.icon}</div>
                  <div className="about-feature-text">
                    <strong>{f.title}</strong>
                    <span>{f.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary">Book a Consultation →</a>

            <div className="doctor-card">
              <img src={doctorImg} alt="Lead Dentist" className="doctor-avatar" />
              <div className="doctor-info">
                <strong>Dr. Aulakh</strong>
                <span>Lead Dentist — BDS, MDS (Prosthodontics)</span>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
