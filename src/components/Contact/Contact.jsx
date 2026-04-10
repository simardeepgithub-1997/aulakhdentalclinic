import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', service: '', date: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 56 }}>
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Book an <span>Appointment</span></h2>
          <p className="section-sub">
            Ready to transform your smile? Schedule your visit today. We'll confirm your
            appointment within 24 hours.
          </p>
        </div>

        <div className="contact-inner">
          {/* Info */}
          <div>
            <h3 className="contact-info-title">Visit Us</h3>
            <p className="contact-info-sub">
              Conveniently located in the heart of Amritsar. Walk-ins welcome during
              clinic hours.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">📍</div>
                <div className="contact-detail-text">
                  <strong>Address</strong>
                  <p>Namdhari Kanda, Dilbagh Nagar, Amritsar Cantt.,<br />Amritsar, Punjab 143006</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">📞</div>
                <div className="contact-detail-text">
                  <strong>Phone</strong>
                  <p>+91 98765 43210<br />+91 81234 56789</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">✉️</div>
                <div className="contact-detail-text">
                  <strong>Email</strong>
                  <p>info@aulakhdentalclinic.com</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">💬</div>
                <div className="contact-detail-text">
                  <strong>WhatsApp</strong>
                  <p>+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="contact-hours">
              <h4>🕐 Clinic Hours</h4>
              <div className="contact-hours-row">
                <span>Monday – Friday</span>
                <span>9:00 AM – 7:00 PM</span>
              </div>
              <div className="contact-hours-row">
                <span>Saturday</span>
                <span>9:00 AM – 5:00 PM</span>
              </div>
              <div className="contact-hours-row">
                <span>Sunday</span>
                <span>10:00 AM – 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-card">
            <h3>📅 Request an Appointment</h3>

            <form onSubmit={submit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handle}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number *</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handle}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handle}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-service">Service Needed</label>
                  <select id="contact-service" name="service" value={form.service} onChange={handle}>
                    <option value="">Select a service</option>
                    <option>General Check-up</option>
                    <option>Teeth Whitening</option>
                    <option>Dental Implant</option>
                    <option>Orthodontics (Braces)</option>
                    <option>Root Canal</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Pediatric Dentistry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-date">Preferred Date</label>
                  <input
                    id="contact-date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handle}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Additional Notes</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Any specific concerns or questions..."
                  value={form.message}
                  onChange={handle}
                />
              </div>

              <button id="contact-submit-btn" type="submit" className="btn btn-primary form-submit">
                📅 Confirm Appointment
              </button>

              {submitted && (
                <div className="form-success">
                  ✅ Thank you! We'll confirm your appointment within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
