import './Services.css';

const SERVICES = [
  {
    icon: '🦷',
    title: 'General Dentistry',
    desc: 'Comprehensive dental check-ups, cleaning, fillings and preventive care to maintain your oral health at its best.',
  },
  {
    icon: '✨',
    title: 'Cosmetic Dentistry',
    desc: 'Transform your smile with veneers, bonding, contouring and other aesthetic treatments tailored just for you.',
  },
  {
    icon: '🦮',
    title: 'Teeth Whitening',
    desc: 'Professional-grade whitening that gives you a brilliant, confident smile — safely and effectively.',
  },
  {
    icon: '🔩',
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacements that restore function and beauty to your smile.',
  },
  {
    icon: '😬',
    title: 'Orthodontics',
    desc: 'Braces and clear aligners to straighten teeth, correct bite issues and create perfectly aligned smiles.',
  },
  {
    icon: '👶',
    title: 'Pediatric Dentistry',
    desc: 'Gentle, friendly dental care designed especially for children to build healthy habits from an early age.',
  },
  {
    icon: '🩺',
    title: 'Root Canal Treatment',
    desc: 'Pain-free root canal therapy using modern techniques to save your natural teeth and relieve discomfort.',
  },
  {
    icon: '🦷',
    title: 'Dentures & Bridges',
    desc: 'Custom-fitted dentures and bridges to fill gaps and restore your complete smile comfortably.',
  },
  {
    icon: '🛡️',
    title: 'Gum Disease Treatment',
    desc: 'Diagnosis and treatment of periodontal disease to protect your gums and preserve your teeth long-term.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services-header text-center">
          <div className="section-tag">Our Services</div>
          <h2 className="section-title">
            Comprehensive <span>Dental Care</span><br />Under One Roof
          </h2>
          <p className="section-sub">
            From routine cleanings to advanced restorative procedures, our expert team delivers
            personalised, world-class dental care with the latest technology.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-link">Learn more →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
