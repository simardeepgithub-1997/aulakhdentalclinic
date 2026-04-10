import './Testimonials.css';

const REVIEWS = [
  {
    name: 'Priya Sharma',
    tag: 'Teeth Whitening',
    text: 'Absolutely amazing experience! My teeth look 10 shades whiter and the staff was incredibly gentle. Dr. Aulakh explained every step clearly. Highly recommend!',
    color: '#1a91c8',
    initials: 'PS',
  },
  {
    name: 'Rajiv Mehta',
    tag: 'Dental Implant',
    text: 'Got my dental implant done here. Pain-free procedure and the result is indistinguishable from my real teeth. The clinic is very clean and modern.',
    color: '#0b6e99',
    initials: 'RM',
  },
  {
    name: 'Gurpreet Kaur',
    tag: 'Root Canal',
    text: 'I was terrified of root canals but the team made me feel so at ease. The procedure was surprisingly painless. Wonderful doctors and caring staff.',
    color: '#00c9a7',
    initials: 'GK',
  },
  {
    name: 'Amit Verma',
    tag: 'Kid\'s Dentistry',
    text: 'Brought my 6-year-old and she actually enjoyed the visit! The doctor made her laugh and feel safe. We won\'t go anywhere else now.',
    color: '#084f70',
    initials: 'AV',
  },
  {
    name: 'Simran Bedi',
    tag: 'Orthodontics',
    text: 'Been getting braces treatment here for 8 months. Excellent progress and the team adjusts the plan whenever needed. Very professional.',
    color: '#e8a83e',
    initials: 'SB',
  },
  {
    name: 'Harjeet Singh',
    tag: 'General Check-up',
    text: 'Regular patient for 5 years. The clinic keeps upgrading its equipment and the quality of service has only gotten better. True experts.',
    color: '#1a91c8',
    initials: 'HS',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="testimonials-header text-center">
          <div className="section-tag">Patient Reviews</div>
          <h2 className="section-title">Stories from Our <span>Happy Patients</span></h2>
          <p className="section-sub">
            Don't just take our word for it — here's what our patients say about their
            experience at Aulakh Dental Clinic.
          </p>
        </div>

        <div className="testimonials-grid">
          {REVIEWS.map((r) => (
            <div key={r.name} className="testimonial-card">
              <div className="quote-icon">"</div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
              </div>
              <p className="testimonial-text">"{r.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: r.color }}>
                  {r.initials}
                </div>
                <div>
                  <div className="testimonial-name">{r.name}</div>
                  <div className="testimonial-tag">{r.tag}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
