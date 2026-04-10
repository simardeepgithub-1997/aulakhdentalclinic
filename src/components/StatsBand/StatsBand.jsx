import './StatsBand.css';

const STATS = [
  { num: '5000', suffix: '+', label: 'Happy Patients' },
  { num: '15', suffix: '+', label: 'Years of Experience' },
  { num: '20', suffix: '+', label: 'Dental Services' },
  { num: '98', suffix: '%', label: 'Patient Satisfaction' },
];

export default function StatsBand() {
  return (
    <div className="stats-band">
      <div className="container">
        <div className="stats-band-grid">
          {STATS.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-num">
                {s.num}<span>{s.suffix}</span>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
