import React from 'react';
import { Award, Compass, Users, CheckCircle } from 'lucide-react';

export const Certifications = () => {
  const certifications = [
    {
      title: 'Predictive Modelling with Applications: Supervised and Unsupervised Learning',
      issuer: 'NPTEL'
    },
    {
      title: 'Python Essentials 1',
      issuer: 'Cisco Networking Academy'
    },
    {
      title: 'Fundamentals of Data Analytics',
      issuer: 'L&T Edutech'
    },
    {
      title: 'Artificial Intelligence and Machine Learning',
      issuer: 'L&T Edutech'
    }
  ];

  const activities = [
    {
      title: 'College Fest Coordinator',
      role: 'Event Leadership',
      bullets: [
        'Worked as a Coordinator in organizing college fests and technical events.',
        'Coordinated event management activities and supported smooth execution of college programs.'
      ]
    },
    {
      title: 'NCC Cadet',
      role: 'Discipline & Teamwork',
      bullets: [
        'Participated in National Cadet Corps (NCC) activities.',
        'Demonstrated teamwork, discipline, and strong leadership qualities during camp programs.'
      ]
    }
  ];

  return (
    <section id="certifications">
      <div className="section-header">
        <h2>Credentials & Leadership</h2>
        <p>Certifications that validate my technical understanding and activities demonstrating leadership qualities.</p>
      </div>

      <div className="certifications-container">
        {/* Left: Certifications Grid */}
        <div>
          <h3 style={{ textAlign: 'left', marginBottom: '1.75rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award style={{ color: 'var(--accent)' }} /> Professional Certifications
          </h3>

          <div className="certs-grid">
            {certifications.map((cert, index) => {
              return (
                <div
                  key={index}
                  className="glass-card cert-card"
                >
                  <Compass className="cert-icon" size={24} />
                  <div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Extracurricular Activities */}
        <div className="extra-container">
          <h3 style={{ textAlign: 'left', marginBottom: '1.75rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Users style={{ color: 'var(--accent)' }} /> Leadership & Activities
          </h3>

          {activities.map((act, index) => (
            <div key={index} className="glass-card extra-card">
              <div className="extra-header">
                <CheckCircle size={18} style={{ color: 'var(--accent-secondary)' }} />
                <div>
                  <h3>{act.title}</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: '600', textTransform: 'uppercase' }}>
                    {act.role}
                  </span>
                </div>
              </div>

              <ul className="extra-list">
                {act.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
