import React, { useState, useEffect } from 'react';
import { Layout, Terminal, Database, Shield } from 'lucide-react';

export const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation slightly after mount to enable smooth bar width expansion
    const timer = setTimeout(() => setAnimate(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const skillsData = [
    {
      category: 'Frontend Development',
      icon: <Layout className="skills-category-icon" size={20} />,
      items: [
        { name: 'ReactJS', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'CSS3 / HTML5', level: 95 }
      ]
    },
    {
      category: 'Programming Languages',
      icon: <Terminal className="skills-category-icon" size={20} />,
      items: [
        { name: 'JavaScript', level: 85 },
        { name: 'Python Basics', level: 65 }
      ]
    },
    {
      category: 'Database Systems',
      icon: <Database className="skills-category-icon" size={20} />,
      items: [
        { name: 'SQL', level: 75 }
      ]
    },
    {
      category: 'Tools & Platforms',
      icon: <Shield className="skills-category-icon" size={20} />,
      items: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Vercel Deployment', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="section-header">
        <h2>Technical Skills</h2>
        <p>A breakdown of my software technologies, programming languages, and tooling competencies.</p>
      </div>

      <div className="skills-grid">
        {skillsData.map((cat, index) => {
          return (
            <div
              key={index}
              className="glass-card skill-card"
              style={{
                textAlign: 'left'
              }}
            >
              <div className="skills-category">
                {cat.icon}
                <h3>{cat.category}</h3>
              </div>

              <div className="skills-list">
                {cat.items.map((skill, sIndex) => (
                  <div key={sIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: animate ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
