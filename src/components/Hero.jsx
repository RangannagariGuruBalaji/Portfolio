import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  // Typewriter effect states
  const roles = [
    'Computer Science Student',
    'Frontend Developer',
    'React Enthusiast',
    'Problem Solver'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause when full text is typed
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting characters
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="home" className="hero">
      <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <span className="hero-subtitle" style={{ display: 'block', marginBottom: '1rem' }}>Welcome to my Portfolio</span>
        <h1 className="hero-title" style={{ fontSize: '4.5rem', marginBottom: '1.5rem' }}>
          Hi, I'm <span className="gradient-text">R Guru Balaji</span>
        </h1>
        <div className="hero-role" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
          I am a <span>{currentText}</span>
          <span className="typewriter-cursor"></span>
        </div>
        <p className="hero-description" style={{ margin: '0 auto 3rem', fontSize: '1.25rem', lineHeight: '1.7' }}>
          Enthusiastic Computer Science Engineering student seeking an entry-level software development opportunity to apply technical skills, learn modern technologies, and contribute to organizational growth.
        </p>

        <div className="hero-cta" style={{ justifyContent: 'center' }}>
          <a href="#projects" className="btn btn-primary">
            View My Projects <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};
