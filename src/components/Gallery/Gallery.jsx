import { useState } from 'react';
import img1 from '../../assets/2.jpg';
import img2 from '../../assets/5-1.jpg';
import img3 from '../../assets/Dental-Clinic-in-Vijay-Nagar-Indore-scaled.jpg';
import img4 from '../../assets/dental-clinic.jpeg';
import img5 from '../../assets/fmc-dental-clinic-background-1.png';
import './Gallery.css';

const GALLERY = [
  { src: img1, label: 'Patient Consultation' },
  { src: img2, label: 'Dental Examination' },
  { src: img3, label: 'Modern Reception' },
  { src: img4, label: 'Treatment Room' },
  { src: img5, label: 'Our Facility' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="gallery-header text-center">
          <div className="section-tag">Gallery</div>
          <h2 className="section-title">A Peek Inside Our <span>Clinic</span></h2>
          <p className="section-sub">
            Our state-of-the-art facility is designed to make you feel comfortable and at ease
            from the moment you walk in.
          </p>
        </div>

        <div className="gallery-grid">
          {GALLERY.map((item, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => setLightbox(item.src)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.label}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(item.src)}
            >
              <img src={item.src} alt={item.label} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-label">🔍 {item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <img src={lightbox} alt="Gallery view" onClick={(e) => e.stopPropagation()} />
          <button
            id="lightbox-close-btn"
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >✕</button>
        </div>
      )}
    </section>
  );
}
