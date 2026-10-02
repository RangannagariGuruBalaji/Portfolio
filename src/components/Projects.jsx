import React, { useState } from 'react';
import { ExternalLink, ZoomIn, X, CloudSun, CalendarCheck, ClipboardCheck } from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'nxt-assess-app',
      title: 'Nxt Assess - Online Assessment Platform',
      category: 'react',
      tag: 'ReactJS / Context API / REST API',
      desc: 'An interactive online assessment platform featuring dynamic question navigation, live countdown timer, context state evaluation, and auto-submission.',
      tech: ['ReactJS', 'React Router', 'Context API', 'REST API', 'JavaScript', 'HTML5', 'CSS3'],
      source: 'https://github.com/RangannagariGuruBalaji/Nxt-Assess-App',
      demo: 'https://nxt-assess-4sl9q9jks-balaji7.vercel.app',
      icon: <ClipboardCheck size={32} style={{ color: '#6366f1' }} />,
      bullets: [
        'Developed a responsive online assessment platform with real-time question evaluation and automated submission capabilities.',
        'Integrated REST API (apis.ccbp.in/assess/questions) to dynamically fetch question banks, option formats, and assessment configurations.',
        'Implemented global state management using React Context API for selected answer tracking, question navigation, and score calculations.',
        'Built an interactive Question Palette & Timer component with countdown alert handling (600s), step navigation, and progress tracking.',
        'Secured application routes using custom authentication states and ProtectedRoute wrappers.',
        'Deployed live production build on Vercel with full responsiveness across desktop and mobile devices.'
      ],
      insights: {
        architecture: 'Component-driven React application utilizing Context API (EvaluationContext) for evaluation state, custom ProtectedRoute for session authentication, and REST API integration for dynamic questions.',
        challenges: 'Managing timer synchronization and multi-question state persistence across route transitions and window blur events. Solved using React Context state hooks and auto-submit triggers on countdown expiration.',
        performance: 'Optimized re-renders with structured context selectors and efficient state batching during question option selection.'
      },
      roles: ['frontend', 'swe', 'all']
    },
    {
      id: 'weather-app',
      title: 'Professional React Weather App',
      category: 'react',
      tag: 'ReactJS / API Integration',
      desc: 'A responsive weather application integrating live meteorological data, auto-suggestion city search, and real-time location detection.',
      tech: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'React Router', 'OpenWeather API', 'Geolocation API'],
      source: 'https://github.com/rgurubalaji3',
      demo: 'https://vercel.com',
      icon: <CloudSun size={32} style={{ color: '#0ea5e9' }} />,
      bullets: [
        'Developed a responsive React Weather Application with real-time weather data integration using OpenWeather API.',
        'Implemented current location weather functionality using Geolocation API with improved location accuracy.',
        'Added auto-suggestion search feature for cities and Hyderabad area locations using dynamic filtering.',
        'Built responsive and interactive frontend with React Hooks, conditional rendering, and event handling.',
        'Integrated live weather icons, humidity, temperature, and wind speed details with smooth user experience.',
        'Managed version control using Git & GitHub and deployed the application live using Vercel.'
      ],
      insights: {
        architecture: 'Component-driven React layout utilizing custom hooks for API calls, React Router for history states, and dynamic state variables for responsive rendering.',
        challenges: 'Handling asynchronous geolocation requests on browsers with restricted permissions. Resolved by adding fallback inputs to popular Indian cities.',
        performance: 'Implemented debounced searches to minimize OpenWeather API token usage and prevent rate limits.'
      },
      roles: ['frontend', 'swe', 'all']
    },
    {
      id: 'habit-tracker',
      title: 'Daily Habit Tracker Web Application',
      category: 'javascript',
      tag: 'JavaScript / Storage',
      desc: 'A high-performance daily habit log featuring streaks tracking, localStorage caching, and motivational tip requests.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage', 'Fetch API'],
      source: 'https://github.com/rgurubalaji3',
      demo: 'https://vercel.com',
      icon: <CalendarCheck size={32} style={{ color: '#10b981' }} />,
      bullets: [
        'Developed a responsive Daily Habit Tracker application with dynamic habit management and streak calculation features.',
        'Implemented DOM manipulation, event handling, and real-time UI updates using JavaScript.',
        'Used LocalStorage to persist habit data across browser sessions.',
        'Integrated an external API using Fetch API to retrieve and display dynamic habit suggestions.',
        'Designed a mobile-friendly responsive UI for desktop and mobile devices.'
      ],
      insights: {
        architecture: 'JavaScript DOM controller structure using an IIFE module pattern to secure state and custom LocalStorage helper layers.',
        challenges: 'Calculating streak integrity when cross-referencing system calendar dates. Solved via timestamp parsing and relative day-difference calculations.',
        performance: 'Optimized rendering queries by caching DOM lookups and batch-updating habit card classes on status change.'
      },
      roles: ['swe', 'frontend', 'all']
    }
  ];

  // Filtering criteria: active categories AND active role highlights
  const getFilteredProjects = () => {
    let filtered = projectsData;
    
    // Primary Category Tabs
    if (filter === 'react') {
      filtered = filtered.filter(p => p.category === 'react');
    } else if (filter === 'javascript') {
      filtered = filtered.filter(p => p.category === 'javascript');
    }

    return filtered;
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p>A showcase of technical projects highlighting structured software patterns, API integrations, and clean UI engineering.</p>
      </div>

      {/* Tabs */}
      <div className="projects-filter">
        <button
          onClick={() => setFilter('all')}
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        >
          All Projects
        </button>
        <button
          onClick={() => setFilter('react')}
          className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
        >
          ReactJS
        </button>
        <button
          onClick={() => setFilter('javascript')}
          className={`filter-btn ${filter === 'javascript' ? 'active' : ''}`}
        >
          JavaScript
        </button>
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {getFilteredProjects().map((project) => {
          return (
            <div
              key={project.id}
              className="glass-card project-card"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                {project.icon}
                <span className="project-badge">{project.tag}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-tech-stack">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-links" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <a href={project.source} target="_blank" rel="noreferrer" className="project-link">
                    <GithubIcon size={16} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>

                <button onClick={() => handleOpenModal(project)} className="project-more-btn">
                  <ZoomIn size={16} /> Case Study
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal} aria-label="Close Case Study">
              <X size={18} />
            </button>

            <div className="modal-body">
              <span className="modal-subtitle">{selectedProject.tag}</span>
              <h3>{selectedProject.title}</h3>
              <hr style={{ border: 0, height: '1px', background: 'var(--card-border)', margin: '1rem 0 1.5rem' }} />

              <div className="modal-section">
                <h4>Core Accomplishments</h4>
                <ul className="modal-bullets">
                  {selectedProject.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>System Architecture</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  {selectedProject.insights.architecture}
                </p>
              </div>

              <div className="modal-section">
                <h4>Key Technical Challenge</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  {selectedProject.insights.challenges}
                </p>
              </div>

              <div className="modal-section">
                <h4>Optimization & Integrity</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  {selectedProject.insights.performance}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', borderTop: '1px solid var(--card-border)', paddingTop: '1.5rem' }}>
                <a
                  href={selectedProject.source}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ fontSize: '0.9rem', padding: '0.6rem 1.5rem' }}
                >
                  <GithubIcon size={16} /> GitHub Source Code
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '0.9rem', padding: '0.6rem 1.5rem' }}
                >
                  <ExternalLink size={16} /> Live Application
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
