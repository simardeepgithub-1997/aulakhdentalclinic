import './FloatingButtons.css';

export default function FloatingButtons() {
  const phone = "+919876543210"; // Sample number, user can update
  const message = "Hi Aulakh Dental Clinic, I'd like to book an appointment.";
  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <div className="floating-buttons">
      <a 
        href={`tel:${phone}`} 
        className="fab-btn fab-call" 
        aria-label="Call Now"
        title="Call Now"
      >
        📞
      </a>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fab-btn fab-whatsapp"
        aria-label="WhatsApp Us"
        title="WhatsApp Us"
      >
        💬
      </a>
    </div>
  );
}
