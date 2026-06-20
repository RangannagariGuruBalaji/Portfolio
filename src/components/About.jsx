import React from 'react';
import { GraduationCap, MessageSquare, Users, ShieldAlert, Award, Star } from 'lucide-react';

export const About = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Sri Venkateswara College of Engineering and Technology, Chittoor',
      period: '2022 – 2026',
      grade: '76% Aggregate',
      badge: 'Undergraduate',
      highlights: 'Focus on Data Structures, Algorithms, Web Technologies, Database Systems, and Software Engineering principles.'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaithanya Junior College, Piler',
      period: '2020 – 2022',
      grade: '57%',
      badge: 'High School',
      highlights: 'Completed Higher Secondary Education specializing in Maths, Physics, and Chemistry.'
    },
    {
      degree: 'SSC (Secondary School Certificate)',
      institution: 'SVSN Siddhartha High School, Piler',
      period: '2020',
      grade: '100% Perfect Score',
      badge: 'Schooling',
      highlights: 'Achieved a perfect academic score. Received appreciation for leadership and discipline.'
    }
  ];

  const strengths = [
    { name: 'Problem-Solving', icon: <ShieldAlert className="strength-icon" />, desc: 'Analytical approach to designing algorithms and resolving system bugs.' },
    { name: 'Teamwork & Collaboration', icon: <Users className="strength-icon" />, desc: 'Proven ability in coordinator roles and executing events collectively.' },
    { name: 'Communication Skills', icon: <MessageSquare className="strength-icon" />, desc: 'Articulate ideas clearly to cross-functional peers and leaders.' },
    { name: 'Leadership & Discipline', icon: <Award className="strength-icon" />, desc: 'Nurtured through active NCC activities and program planning.' }
  ];

  return (
    <section id="about">
      <div className="section-header">
        <h2>About & Education</h2>
        <p>A look into my background, academic credentials, and interpersonal strengths.</p>
      </div>

      <div className="about-grid">
        {/* Bio & Strengths */}
        <div className="about-info" style={{ textAlign: 'left' }}>
          <h3>Career Objective</h3>
          <p className="about-bio">
            Enthusiastic and motivated Computer Science Engineering student seeking an entry-level software development opportunity to apply technical skills, learn modern technologies, and contribute to organizational growth. Passionate about creating responsive interfaces and learning new architectural paradigms.
          </p>

          <h3 style={{ marginTop: '2.5rem', marginBottom: '1.25rem' }}>Key Strengths</h3>
          <div className="strengths-grid">
            {strengths.map((str, index) => (
              <div key={index} className="strength-card">
                {str.icon}
                <div>
                  <h4>{str.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    {str.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 style={{ textAlign: 'left', marginBottom: '1.75rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <GraduationCap style={{ color: 'var(--accent)' }} /> Education Timeline
          </h3>

          <div className="education-timeline">
            {education.map((edu, index) => {
              return (
                <div
                  key={index}
                  className="timeline-item"
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{edu.period}</span>
                    <h3>{edu.degree}</h3>
                    <p className="timeline-institution">{edu.institution}</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginHeight: '1.5' }}>
                      {edu.highlights}
                    </p>

                    <div className="timeline-stats">
                      <span className="timeline-grade">
                        {edu.grade === '100% Perfect Score' ? (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Star size={14} fill="currentColor" /> {edu.grade}
                          </span>
                        ) : edu.grade}
                      </span>
                      <span className="timeline-badge">{edu.badge}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
