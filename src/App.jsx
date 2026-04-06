// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: 'EcoTrack Dashboard',
      description: 'Real-time carbon footprint tracker with analytics and insights.',
      tags: ['React', 'D3.js', 'Node.js'],
    },
    {
      title: 'NeoBank App UI',
      description: 'Modern banking interface with smooth animations and secure login.',
      tags: ['Figma', 'Tailwind', 'Framer'],
    },
    {
      title: 'AI Content Gen',
      description: 'Machine learning tool that generates blog posts and social media content.',
      tags: ['Python', 'OpenAI', 'Flask'],
    },
    {
      title: 'Portfolio 2025',
      description: '3D interactive portfolio with WebGL and immersive experiences.',
      tags: ['Three.js', 'GSAP', 'WebGL'],
    }
  ];

  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'JavaScript/TypeScript', level: 88, icon: '📜' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Python', level: 82, icon: '🐍' },
    { name: 'HTML5/CSS3', level: 92, icon: '🎨' },
    { name: 'UI/UX Design', level: 78, icon: '✨' }
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">AS</span>
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              Available for work
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Rodelyn</span>
              <br />Creative Developer
            </h1>
            <p className="hero-subtitle">
              Crafting exceptional digital experiences with modern web technologies.
              Specialized in React, animations, and responsive design.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                View Projects
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                Contact Me
              </button>
            </div>
          </div>
      <div className="hero-visual">
  <div className="hero-image-placeholder">
    <img 
      src="rod.jpg" 
      alt="Profile"
      className="hero-image"
    />
  </div>
  <div className="floating-card card-1">
    <span>✨</span> express
  </div>
  <div className="floating-card card-2">
    <span>🚀</span>react
  </div>
  <div className="floating-card card-3">
    <span>🎨</span> node
  </div>
  <div className="hero-glow"></div>
</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">👤</span>
            About Me
          </h2>
          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                I'm a front-end developer with 2+ years of experience building 
                responsive and performant web applications. I love turning complex 
                problems into simple, elegant solutions.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">Tech Stacks</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-wrapper">
                <div className="about-image-placeholder">
                  <img src="rod.jpg" alt="About me"className="about-image"/>
                  <div className="placeholder-text">About Image</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">💪</span>
            Skills & Expertise
          </h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">🚀</span>
            Featured Projects
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image-placeholder">
                  <div className="placeholder-icon">🖼️</div>
                  <div className="placeholder-text">Project {index + 1}</div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href="#" className="project-link">Live Demo →</a>
                    <a href="#" className="project-link">Source Code →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">📬</span>
            Get In Touch
          </h2>
          <div className="contact-wrapper">
            <div className="contact-info">
              <p className="contact-text">
                I'm always open to discussing new projects, creative ideas, 
                or opportunities to be part of your vision.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>rodlebanan002gmail.com=p</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>iloilo city</span>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">instagram</a>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="email" placeholder="Email Address" className="form-input" />
              <textarea placeholder="Your Message" rows="5" className="form-input"></textarea>
              <button type="submit" className="btn-primary submit-btn">
                Send Message
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Alex Sun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;